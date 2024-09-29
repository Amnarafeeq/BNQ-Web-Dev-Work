// Q no 01: Sum of Two Numbers
// Write a function sum(a, b) that takes two numbers as arguments and returns their sum
// Example: sum(3, 4) should return 7.

console.log("******* Ans no 01 *******");

const sum = (a,b) =>{
    return a + b
}
let result1  = sum(3, 4)
console.log(result1);

// Q no 02: Check Even or Odd
// Write a function isEven(n) that returns true if the number n is even, and false if it's odd.
// Example: isEven(5) should return false.

console.log("******* Ans no 02 *******");

const isEven = (n) => {
    if(n % 2 == 0){
        return true
    }else{
       return false
    }

}
let result12 = isEven(5)
console.log(result12);

// Q no 03: Maximum of Three Numbers
// Write a function maxOfThree(a, b, c) that takes three numbers and returns the largest of the three.
// Example: maxOfThree(5, 8, 3) should return 8.

console.log("******* Ans no 03 *******");

const maxOfThree = (a,b,c) => {
    return (a > b) ? (a > c ? a : c) : (b > c ? b : c)
}
let result3 = maxOfThree(1,23,4)
console.log(result3);


// Q no 04: Reverse an Array
// Write a function reverseArray(arr) that takes an array and returns a new array with the elements in reverse order.
// Example: reverseArray([1, 2, 3]) should return [3, 2, 1].

console.log("******* Ans no 04 *******");

const reverseArray = (arr) => {
    let resultOfReverse = arr.reverse()
    return resultOfReverse
}
let result4 = reverseArray ([1,2,3])
console.log(result4);

// Q no 05: Factorial of a Number
// Write a function factorial(n) that takes a non-negative integer n and returns its factorial.
// Example: factorial(5) should return 120

console.log("******* Ans no 05 *******");

const factorial = (n) => {
    if (n == 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
let result5 = factorial(5)
console.log(result5);

// Q no 06: Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of vowels (a, e, i, o, u) in it.
// Example: countVowels('hello world') should return 3.

console.log("******* Ans no 06 *******");

const countVowels = (str) => {
    let vowels = ['a','e','i', 'o', 'u']
    let count = 0;
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        if(vowels.includes(char)){
            count++
        }
        
    }
    return count
}
console.log(countVowels("Hello World"));

// Q no 07: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that takes an array and returns a new array with duplicates removed.
// Example: removeDuplicates([1, 2, 2, 3, 4, 4]) should return [1, 2, 3, 4].

console.log("******* Ans no 07 *******");

const removeDuplicates = (arr) => {
    return arr.filter((el,index) => arr.indexOf(el) === index)
}
console.log(removeDuplicates([11,1,2,2,3,3]));

// Q no 08: Sum of Array Elements
// Write a function sumArray(arr) that takes an array of numbers and returns the sum of all the elements.
// Example: sumArray([1, 2, 3, 4]) should return 10.

console.log("******* Ans no 08 *******");

const sumArray = (arr) => {
    let result = arr.reduce((preVal, currVal ) => preVal + currVal)
    return result
}
console.log(sumArray([1,2,3,4]));

// Q no 09: Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit using the 
// formula F = C * 9/5 + 32.
// Example: celsiusToFahrenheit(0) should return 32.

console.log("******* Ans no 09 *******");

const celsiusToFahrenheit = (c) =>{
    return c * 9/5 + 32
}
console.log(celsiusToFahrenheit(0));

// Q no 10: Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
// Example: isPrime(7) should return true

console.log("******* Ans no 10 *******");

const isPrime = (n) =>{
    if(n == 1 || n < 1){
        return false
    }else{
        for (let i = 2; i < n; i++){
          if( n % 1 == 0){
           return true
            
          }else{
            return false
          }
        }
    }
    
    
}
console.log(isPrime(8));
