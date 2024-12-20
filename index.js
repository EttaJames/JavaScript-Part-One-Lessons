// JAVASCRIPT FUNCTIONS
//a reusable block of code designed to perform a specific task.


function greet(name){
    console.log('Good Evening ' + name)
}

greet('Etta')

console.log("..........................................................")

// A function that calculates how much a number of people must pay when amount is shared equally
// function payment_plan(amount, people){
//     return amount / people
// }


// A function that calculates the area of a rectangle

function area_rectangle(width, height){
    return width * height
}

console.log (area_rectangle(42,15))


// A function that calculates the area of a triangle
function area_triangle(base, height){
    return ((0.5 * base) * height)
}
 console.log(area_triangle(10, 30))

// the above function can be written as an arrow function as shown below:
// const area_triangle = (base, height) =>{
//     return ((0.5 * base) * height)
// }

// console.log(area_triangle(10,30))

 //ARROW FUNCTIONS -- (This is another way to write JavaScript functions like we did above)

 const sum = () => {
    return a + b
 }


// -ASSIGNMENT- (Create a function that calculates simple interest)

// Using Arrow Function
 const simple_interest = (principal, rate, time) =>{
    return ((principal * rate * time) / 100)
 }
 console.log(simple_interest(2000000,5,2))

// Using Normal JavaScript Function
function SI (p,r,t){
    return ((p*r*t)/100)
}
console.log(SI(10000000, 10, 5))

// spread functions

const sumArray = (...numbers) =>{
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sumArray(1,2,3,4,5,6,7))

// Note that in the arrow function, the '=>' is same as 'return' in the normal way of writing functions

const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

const subtract = (x, y) => x - y
console.log(subtract(25, 10)) //15

const multiply = (p, q) => p * q
console.log(multiply(50, 43)) //2150

// writing the same above in normal javascript function method
function adder(a,b){
return (a+b)
}
console.log(adder(20,30))


const addnumbers = (...numbers) =>{
    return numbers.reduce((everything, num) => everything + num, 0) // the reduce method adds them up
}

console.log(addnumbers(56,345,785,97))





console.log('--------------------------------------------------------')

const ibad = (...nums) => {
    return nums.reduce((everything, num) => everything + num, 0)
}

console.log(ibad(53,56,48,54,522,45,12,2,2,1,56,2))

// JavaScript Variables have 3 Scopes (Global, Local and Block Scopes)
// A 'scope' is how a variable can be accessed within a program

// Example of a Global scope: one which can be accessed though out the entire program

//Global Scope
let myAge = 35

function declareAge(){
    console.log(myAge)
}
declareAge()

//Local Scope
function declareName(){
    let name = 'Etta'
    console.log(name)
}

declareName()


// JavaScript Closure
// A closure is a function defined inside of another function
// the inner function has access to the variables and scope
// of the outer function.

// EXAMPLE 1
function outer(){
    let message = 'Guy, how far?'      

    function inner (){
        console.log(message)
    }

    inner()
}

message = 'Bros, wetin dey sup?';

outer()
// as seen above, everything within the outer function is a closure!

//And outside of the outer scope, we have no way
// of accessing the variable within it (in this case, the 'message' variable)
// This is an advantage of a closure - you can encapsulate variables
//  and make them private.

// EXAMPLE 2
// A Closure can maintain the state of a variable and can make it private as well

// Lets create a counter program

// function createCounter(){
//     let count = 0

//     function increment(){
//         count++
//         console.log ('Count increased to:', (count))
//     }
//     return {increment}
// }

// const counter = createCounter()

// counter.increment()
// counter.increment()

console.log('...........................................')

// function createGame(){
//     let score = 0

//     function increaseScore(points){
//         score += points
//         console.log('+',(points),'pts')
//     }
    
//     function decreaseScore(points){
//         score -= points
//         console.log('-',(points),'pts')
//     }
    
//     function getScore(){
//         return score
//     }
    
//     return (increaseScore, decreaseScore, getScore)
// }

// const game = createGame()

// game.increaseScore(5)
// game.increaseScore(6)
// game.decreaseScore(1)

// score = 10000000005065

// console.log('the final score is ', game.getScore(), 'points')

function counter(){
    let count = 0
    return function increment(){
        count ++
        return count
    }

}

const myCounter = counter()


// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())
// console.log(myCounter())


// Closure example in Loops

// for (let i = 0; i <= 8; i++){
//      setTimeout(()=> console.log(i), i * 1000)
// }

// you use setTimeout to delay the execution of your code in milliseconds
// 1000 means 1 second. 2000 means 2 seconds etc
// you pass the function as the first parameter
// then followed by the time you wish the code to be executed 


// ARRAYS

//An array is a collection of items stored in memory locations

let ages = [] //an empty array

const fruits = ["Orange", "Bananas", "Apples", "Mangoes", "Cherries"]

const myInfo = [21, "22 QWL New York City", "male", true]

// every item in an array has an index which starts from 0
// the above are all arrays, now to gain access to the content 
// of these arrays, you can do this below
fruits[2] = "Agbalumo"

fruits.push("Guavas", "Pineapples") // adds more items to your array

fruits.unshift("Pawpaw") // adds an item to the beginning of your array

fruits.pop() // removes the last item from our array

fruits.shift() //removes the first item from our array (reverse of pop)

console.log(`We have ${fruits.length} fruits in our array`) //to know number of items in our array, we use the length method

// so unshift adds items to the beginning of your array while
// push adds items to the end of your array

console.log(fruits)

const myName = "Etta"
const fullStatement = `I am ${myName}, a ${myInfo[0]} year old ${myInfo[2]}, living at ${myInfo[1]} and I love eating ${fruits[2]}` 

console.log(fullStatement)


// OBJECTS
// Similar to arrays but Objects are a collection of key-value pairs

const person = {
    name: 'Brian',
    age: 30,
    state: 'Anambra',
    isEmployed: true
}

function workStatus(value){
    if (value = true){
        return "Employed"
    } else{
        return "Unemployed"
    }
}

person.name = "Ada" // you can always edit the content of your objects just like in arrays like so

console.log(`Her name is ${person.name}, she is ${person.age}yrs of age. Also, she is gainfully ${workStatus(person.isEmployed)}`)

delete person.state // deletes a key-value pair of an object

console.log(person)

// // let number = 0
// function testing(number){
//         if (number % 2 === 0){
//         return "This number is an Even number"
//     }else{
//         return "This has got to be an Odd number"
//     }
// }

// console.log(testing(35))

//ASSIGNMENT
// 1. Find the largest of three numbers
// . Create a function called findLargest(a,b,c) that returns the largest of three numbers

function findLargest(a ,b, c){
    if (a >= b && a >= c){
        return (`${a} is the largest number`)
    } else if (b >= a && b >=c){
        return (`${b} is the largest number`)
    } else {
        return (`${c} is the largest number`)
    }
}

console.log(findLargest(19, 99, 900))
console.log(findLargest(20, 79, 9))

// 2. Factorial Calculation
// . Write a function factorial(n) that calculates the factorial of a number using a loop
function factorial(n) {
    if (n < 0) {
        return "There are no factorials for negative numbers!";
    }

    let output = 1; // We start with 1, as the factorial of 0 is 1

    for (let i = 1; i <= n; i++) {
        output *= i; // Multiply output by the current number
    }

    return output;
}

console.log(factorial(5))
console.log(factorial(9))

// 3. Reverse a string
// . write a function reverseString(str) that takes a string and returns it reversed
// function reverseString(str) {
//     let reversed = "";

    // Looping through the string backwards
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]; // Adding each character to the reversed string
//     }

//     return reversed;
// }

// console.log(reverseString('JavaScript'))
// console.log(reverseString('Abracadabra'))

// OR

function reverseString(str){
    return str.split("").reverse().join("")
} //"split" breaks the word into alphabets, "reverse" reverses these alphabets
// and finally "join" puts together the reversed alphabets

console.log(reverseString('Calabar'))
console.log(reverseString('Afang Soup'))

// 4. Count vowels in a string
// . create a function countVowels(str) that counts and returns the number of vowels in a string

function countVowels(str) {
    // Convert the string to lowercase to handle case-insensitive matching
    str = str.toLowerCase();

    // Define the vowels
    const vowels = "aeiou";

    // Initialize a counter for vowels
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++; // Increment the counter if the character is a vowel
        }
    }

    return count; // Return the total count of vowels
}

console.log(countVowels("Hello"));        
console.log(countVowels("JavaScript"));  
console.log(countVowels("Halleluyah"));    

// 5. Sum of array elements
// . Write a function sumArray(arr) that calculates the sum of all numbers in an array
function sumArray(arr) {
    let sum = 0

    // Loop through the array and add each number to the sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}


console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, -2, 30]));   
console.log(sumArray([]));              
