// 1. Object Property Access
// • Question: Create an object named car with properties make, model, and year. How would 
// you access and print the model of the car?

console.log("****** Ans 1 ******");

const car = {
    make: "Toyota",
    modal:"Corolla",
    year: 2023,
}
console.log(car.modal);


// 2. Array Iteration
// • Question: Given an array of numbers, write a for loop that prints each number in the array.

console.log("****** Ans 2 ******");

const arrOfNumbers = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < arrOfNumbers.length; i++){
    console.log(arrOfNumbers[i]);
    
}

// 3. Array Sum Function
// • Question: Write a function that takes an array of numbers as an argument and returns the 
// sum of all elements in the array.

console.log("****** Ans 3 ******");

const arrayOfSum = (arr) =>{
    let result = arr.reduce((preVal, currVal) => preVal + currVal)
    return result
}
console.log(arrayOfSum([10,20,30,40,50]));

// 4. Date Manipulation
// • Question: How would you create a new Date object in JavaScript and extract the current year from it?

console.log("****** Ans 4 ******");

let newDate = new Date()
let getYear =  newDate.getFullYear()
console.log(getYear);

// 5. If-Else Statement
// • Question: Write a function that takes a number as an argument and returns "Positive" if the number is 
// greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is 0.

console.log("****** Ans 5 ******");

const checkNumbers = (number) => {
    if(number > 0){
        return "Positive"
    }else if (number < 0 ){
        return "Negative"
    }else{
        return "Zero"
    }
}
console.log(checkNumbers(1));
console.log(checkNumbers(0));
console.log(checkNumbers(-1));

// 6. While Loop
// • Question: Write a while loop that prints numbers from 1 to 5.

console.log("****** Ans 6 ******");

let i = 1
while (i <= 5){
    console.log(i);   
    i++
}

// 7. Math Operations
// • Question: Write a function that calculates the square root of a number using JavaScript's Math object

console.log("****** Ans 7 ******");

const calSquareRoot = (n)=>{
    return Math.sqrt(n)
}
console.log(calSquareRoot(25));

// 8. Array Filtering
// • Question: Write a function that takes an array of numbers and returns a new array containing only the even numbers

console.log("****** Ans 8 ******");

const containingEvenNum = (arr) => {
  return  arr.filter(ele => ele % 2 == 0)
}
console.log(containingEvenNum([2,3,4,5,6,7,8]));

// 9. Function with Default Parameters
// • Question: Create a function that multiplies two numbers. If the second number is not provided, it should
//  default to 10.

console.log("****** Ans 9 ******");

const defaultParameter = (a , b = 10) => {
         return a + b
}
console.log(defaultParameter(10,20));
console.log(defaultParameter(60));

// 10. Object Methods
// • Question: Create an object calculator with methods add, subtract, multiply, and divide. Each 
// method should take two numbers as arguments and return the result of the corresponding operation

console.log("****** Ans 10 ******");

const calculator = {
    add: (a, b) => {
        return a + b
    },
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b   
     },
     divide: (a, b) => {
        return a / b
     } 
    }
console.log(calculator.add(20,30));
console.log(calculator.subtract(20,30));
console.log(calculator.multiply(20,30));
console.log(calculator.divide(20,30));
    
// 11. Nested If-Else
// • Question: Write a function that checks a student's grade and returns "A" for marks above 90, 
// "B" for marks between 80 and 90, "C" for marks between 70 and 80, and "F" for marks below  70.
        
console.log("****** Ans 11 ******");

const checkStdGrades = (marks) => {
    if(marks > 90){
        return "Grade A"
    }else if (marks > 80 && marks <= 90){
        return "Grade B"
    }else if (marks > 70 && marks <= 80){
        return "Grade C"
    }else {
        return "Fail"
    }
}
console.log(checkStdGrades(95));
console.log(checkStdGrades(85));
console.log(checkStdGrades(77));
console.log(checkStdGrades(60));

// 12. Array Length
// • Question: How do you find the length of an array in JavaScript?

console.log("****** Ans 12 ******");

const arrayLength = ["a","b","c","d"]
let result =  arrayLength.length
console.log(result);

// 13. For Loop with Break
// • Question: Write a for loop that iterates through an array of numbers and breaks the loop 
// when it encounters the number 5.

console.log("****** Ans 13 ******");

for (let i = 1; i <= 10; i++){
   console.log(i);

    if(i >= 5){
        break
    }
   
}


// 14. Date Comparison
// • Question: Write a function that takes two dates as arguments and returns true if the first 
// date is earlier than the second date.

console.log("****** Ans 14 ******");

const takeDate = (date1, date2) =>{
    if (new Date (date1) < new Date (date2)){
        return true
    }else{
        return false
    }
}
console.log(takeDate("2023,12,3","2024,3,12"));

// 15. Switch Statement
// • Question: Write a switch statement that takes a day of the week (1 for Monday, 2 for 
// Tuesday, etc.) and returns the name of the day

console.log("****** Ans 15 ******");

const getDayName = (day) =>{
      switch(day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3: 
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";                
        case 6:
            return "Saturday";
        case 7: 
            return "Sunday";
        default:
            return "Invalid Day"             
      }
}
console.log(getDayName(3));
