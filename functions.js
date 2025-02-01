function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Shubham"));



const add = function (a, b) {
  return a + b;
};

console.log(add(3, 5));



const multiply = (a, b) => a * b;

console.log(multiply(4, 7));


setTimeout(function () {
  console.log("shubham");
}, 2000);


//first class functions
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log(operate(5, 3, add)); 
console.log(operate(5, 3, multiply)); 


//higher order function 
function operate(a, b, operation) {
    return operation(a, b);
}
const add = (x, y) => x + y;
console.log(operate(5, 3, add));


//IIFE
(function(name) {
    console.log(`Hello, ${name}!`);
})("Shubham");



