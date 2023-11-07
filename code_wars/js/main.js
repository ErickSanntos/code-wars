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
 

 https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript]

//  Code as fast as you can! You need to double the integer and return it.

 function doubleInteger(i) {
  let number = 2
  let double = number * 2
  return double;
}


// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x){
  let removeSpace = x.split(' ').join('')
  return removeSpace;
  }


  //Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
function animal(obj){
  const dog = {
      name: 'dog',
      legs: 4,
      color: 'white'
    }; 
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.` /// simple mistakes get you 
 

}

//reverse a string 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
////////
function solution(str){
  return str.split('').reverse('').join('')
 
}
// first split the string 
// than i reverse the string 
// than i join the strin back together

// filter arrays
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


///

function filter_list(l) {
 
  return l.filter((ele)=> typeof ele === 'number')
}
// number 
////////////
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
///
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript


//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
  let result = parseInt(a) + parseInt(b)
 let str_result = result.toString()
 return str_result
  
}

//We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
const stringToNumber = function(str){
  let result = parseInt(str)
  return result
  return null;
}


//Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  return  ((h*60*60+m*60+s)*1000)
    console.log(past)
  }
  // shows hours minutes and seconds
  // need a function 
  // returns time in milliseconds
  // 1 hour = 3600 second 
  // 3600 * 1000 = milliseconds 


  //Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
  
function litres(time) {
    let drinks = Math.floor(time * 0.5)
    return drinks;
  }

  // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


  function simpleMultiplication(number) {
    if(number % 2 === 0){
      return number * 8
    }else if(number % 2 != 0 ){
       return number * 9
    }
 }
 // if even multiply by 1/8 
 // if otherwise divide by 9
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

 function smash (words) {
  let arr = words.join(' ')
 
   return arr
  
};

// Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

function maps(x){
  return x.map((el) => el * 2)
}
// iterrate thru each arrays index for each array 
// multiply by 2
//try map()
// mutate 
//imitible 
//mutible 


// document.addEventListener('DOMContentLoaded', function() {
//   const facilitiesList = document.getElementById('facilitiesList')

//   fetch('https://data.nasa.gov/resource/gvk9-iz74.json')
//       .then(response => response.json())
//       .then(data => {
//           data.forEach(facility => {
//               const row = document.createElement('tr')
//               const nameCell = document.createElement('td')
//               const cityCell = document.createElement('td')
//               const stateCell = document.createElement('td')
//               const weatherCell = document.createElement('td')

//               // Grab facility name, city, and state
//               nameCell.textContent = facility.center 
//               cityCell.textContent = facility.city 
//               stateCell.textContent = facility.state

//               // Get latitude and longitude from the facility location
//               const latitude = facility.location.latitude 
//               const longitude = facility.location.longitude 

//               // Fetch weather data based on latitude and longitude
//               fetch(`https://api.weatherapi.com/v1/current.json?key=b19bd926788146399f7232525232210&q=${latitude},${longitude}`) 
//                   .then(response => response.json())
//                   .then(weatherData => {
//                       // Check if required properties exist in the response
//                       if (weatherData.current && weatherData.current.temperature && weatherData.current.weather_descriptions) {
//                           const temperature = weatherData.current.temperature
//                           const description = weatherData.current.weather_descriptions[0]
//                           weatherCell.textContent = `${description}, ${temperature}°C` 
//                       } else {
//                           weatherCell.textContent = 'Data not available'
//                       }
//                   })
//                   .catch(error => {
//                       console.error('Error fetching weather data:', error)
//                       weatherCell.textContent = 'N/A'
//                   }) 

//               row.appendChild(nameCell)
//               row.appendChild(cityCell)
//               row.appendChild(stateCell)
//               row.appendChild(weatherCell)
//               facilitiesList.appendChild(row)
//           })
//       })
//       .catch(error => {
//           console.error('Error fetching NASA facilities:', error)
//       }) 
// }) 