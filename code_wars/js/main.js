//// code wars ///
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript


//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//solution// 
function  countSheep (num){
    let sheepCount = ""
    for(let i = 1;i <= num ; i++ ){
      sheepCount  += `${i} sheep...`;
      
     
    } 
    return sheepCount;
  }
  console.log(countSheep(3))
  // i have a integer 
  // i need a for loop 
  //no negative intergers
  
//   What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.
function addLength(str) {
  let splitArr = str.split(" ")
   return splitArr.map(word => word +" "+ word.length);
   console.log(splitArr)
  
 }
 addLength('apple ban')
 // we need to get length of a word
 //seperate word by space 
 //return as an array 
 