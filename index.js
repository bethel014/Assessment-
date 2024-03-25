// create a function that calculate the sum
// function addNumber(num1, num2, num3, callback) {
//   let sum = num1 + num2 + num3;
//   callback(sum);
// }
// define a function to handle the total sum
// function handleResult(sum) {
//   console.log("The total is :", sum);
// }
// call the addNumber function with numbers and fallback
// addNumber(6, 7, 9, handleResult);

//question2:Create a function that is called filterArray,that takes an array of numbers and a callback function as its parameters.The filterArray function should iterate through the array ans apply the callback function to each element.The callback function should determine wether the element should be included in the filtered array or not.the filtered array should then be returned as the result.

// function filterArray(arr, callback) {
//   let filteredArray = [];

//   arr.forEach(function (element) {
//     if (callback(element)) {
//       filteredArray.push(element);
//     }
//   });
//   return filteredArray;
// }
//to test my understanding of the question, let me use a live situation, to check if a number is an odd number.

// function oddNum(num) {
//   return num % 2 === 1;
// }
// let numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let oddNumbers = filterArray(numbers, oddNum);
// console.log(oddNumbers);

// question 3
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(10);
