// create a function that calculate the sum
function addNumber(num1, num2, num3, callback) {
  let sum = num1 + num2 + num3;
  callback(sum);
}
// define a fuction to handle the total sum
function handleResult(sum) {
  console.log("The total is :", sum);
}
