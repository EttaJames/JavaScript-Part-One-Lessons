// JAVASCRIPT VARIABLES AND DATA TYPE

// There are 3 ways to declare a variable: var, let and const

// Data Types include: strings, integers, boolean, null values, 
// undefined (a variable without any value), Symbol(a unique identifier)

//strings and numbers
let name = "Rumpelstiltskin"
console.log(typeof name)

let age = 34
console.log(typeof age)

let anotherAge = '30'
console.log(typeof anotherAge)


//boolean
let isThereLight = false

let wasThereLight = true

console.log(typeof isThereLight)
console.log(wasThereLight)

let fridgeContent = null
console.log(typeof fridgeContent)


//Javascript Comparison Operators
let a = 6
let b = 4

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

let ageEtta = 40
let houseNo = '4'

let combine = ageEtta + houseNo

console.log(typeof combine) //concatenation occurs when a string and a number are added to produce a string

let c = 7
let d = 3
let e = "7"
let f = 3

console.log ("..............................................................")
console.log(c > d)
console.log(c < d)
console.log(c == d)
console.log(c == e) //this will display true because == checks ONLY for the data value contained in both variables
console.log(c === e) // this will display false because === checks for BOTH  data value and data type of the variable
console.log(d === f) // to prove the === statement above

// Logical Operator (from the word "LOGIC".. you gerrit?)
// We use it to combine multiple conditions 
// They include AND, OR and NOT

//NOTE:
//when using AND (&&), all the values MUST be true for it to return "True"
//when using OR (||), at least one value must be true for it to return "True"

let p = true
let q = false
let r = false
let s = true
let t = false

console.log ("..............................................................")

console.log (p && q) //false
console.log (p || q) //true

console.log(p && q && s) //false
console.log(p || r || s) // true

console.log(!s) //false 
console.log(!r) // true

console.log ("..............................................................")
// The ! operator flips the truthiness of a boolean value:
// If the value is true, ! changes it to false.
// If the value is false, ! changes it to true.
// It's simply how the ! operator is designed to work!


// Conditional Statements
//They include: IF, ELSE IF, SWITCH

let accessAge = 18

if (accessAge < 18){
    console.log("You are not yet an adult and hence not eligible to enrol")
} else if (accessAge >= 18 && accessAge > 24){
    console.log('You are eligible to enrol')
} else {
    console.log('Go and confirm your real age!')
}

console.log ("..............................................................")

//SWITCH Statement

let day = 5
let dayName

switch(day){
    case 1:
        dayName = 'Monday';
        break;

    case 2:
        dayName = 'Tuesday';
        break;

    case 3:
        dayName = 'Wednesday';
        break;

    case 4:
        dayName = 'Thursday';
        break;

    case 5:
        dayName = 'Friday';
        break;

    case 6:
        dayName = 'Saturday';
        break;

    case 7:
        dayName = 'Sunday';
        break;
    
        default:
            dayName = 'Invalid Day';

}

console.log('Today is ' + dayName)

// I added jara with the code below.. hehehe
// if (dayName == 'Friday'){
//     console.log('TGIF!!!!!')
// } else if (dayName != 'Friday'){
//     console.log('Its not the weekend yet!')
// }
console.log ("..............................................................")

//LOOPS

// for loops, while loops and Do while loops are the 3 main kinds of loops

//For Loops (first initiate, secondly, give a condition, finally, increment or decrement)
for(let number = 0; number < 6; number++){
    console.log(number)
}

//while loops are the same but kinda broken down more

let i = 0

while (i < 6){
    console.log(i)
    i++
}


