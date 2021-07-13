// Basics of JS

// OUTPUTS
// alert(2+2) -> It halts the loading of the documnet
// console.warn('Hi, This is a warning!')
// console.error('This is an error')
// console.log('Hi, this is a message')

// '' = " " || ;

// VARIABLES & CONSTACTS
// variableName = value

// a = 10.13567575757554746488656
// console.log(a)

// // SCOPING - ES6 - let - LOCAL{if-else, switch, loops}, var - GLOBAL, const
// var variable = 10
// console.log(variable);

// let something = 'Hi'
// console.log(something);

// // const requires devlarartion & defination in the same line
// const abc = 'ABC'
// // abc = 12345                 // CANNOT DO
// console.log(abc)


// DATATYPES IN JS - 1. Primitive DT     2. Non-Primitive DT
// 6 PDT - Number, String, Boolean, undefined, null, Symbol
// 3 Non PDTs - Array, Object, ArrayOfObjects

// const a = 10
// const b = 'JavaScript'
// const c = true
// const d = undefined
// const e = null

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);  // null | object - returns the type of the pointer which is object by default


// STRINGS & STRING METHODS

// const str = 'JavaScript, C, C++, Python, Ruby, Java'

// // Length
// console.log(str.length);

// // Change the case of the string
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// // Sub-Strings - extract a part of an existing String
// console.log(str.substr(15));    // (a) -> start = 0, end = a obmit 0 - a
// console.log(str.substring(3, 12)); // (a,b) -> a is inc but b is exc

// // index of a character
// console.log(str.indexOf('a'));  // Mutliple occ - First occ is O/P

// // Split - O/P is returned in form of an Array
// const languages = str.split(', ')
// // Access using the indices
// console.log(languages[0]);
// console.log(languages);


// FUN STUFF
// console.log(10 / 0);        // Infinity
// console.log(10 / 'Arun');   // NaN

// // MEME - Egg or Hen ... ?

// const values = ['🥚', '🐓']
// const result = values.sort()
// console.log(result);


// ARRAYS IN JS - Collection of items put in specific index

// Creating Arrays - 1. Array Constructor
// const courses = new Array('FSD', 'ML', 'Data Srcience', 'AI')
// console.log(courses);

// 2. Using [ ] -> 
// const courses = ['ML', 'DSA', 'Data Structures', 'C', 'FSD']
// console.log(courses);

// const items = [10.25, 10, 'Hello', 'Arun', undefined]
// console.log(items);

// // Access the elements
// console.log(items[2]);


// // STRING LITERALS
// // String - '', " ", ``
// console.log(items[2] + ", my name is " + items[3]);
// console.log(`${items[2]}, my name is ${items[3]}`);


// OBJECTS IN JS - { key: value }

// const person = {
//     firstName: 'Arun',
//     lastName: 'Kudiyal',
//     // Array in the object
//     fav_colors: ['Black', 'Blue', 'Grey'],
//     designation: 'Subject Matter Expert',
//     yearsOfExp: 7,
//     // Object inside an object
//     address: {
//         street: 'Street - 1',
//         area: 'Mumbai',
//         state: 'Maharashtra',
//         country: 'India'
//     }
// }

// console.log(person);

// // Accessing the values of obejct
// console.log(`Hi, my name is ${person.firstName} ${person.lastName}. I work as ${person.designation}. My two favourite colors are ${person.fav_colors[0]} & ${person.fav_colors[2]}. I live in ${person.address.area}`);


// // ARRAY OF OBJECTS - [ {}, {}, {} ]

// const employees = [
//     {
//         emp_id: 1002,
//         designation: 'SME',
//         company: 'Microsoft',
//         skiils: ['C', 'C++', 'Java'],
//         location: {
//             officeLocation: 'Mumbai',
//             pin: 1234
//         }
//     }, 
//     {
//         emp_id: 1012,
//         designation: 'SDE',
//         company: 'Apple',
//         skiils: ['JS', 'React', 'Angular'],
//         location: {
//             officeLocation: 'Delhi',
//             pin: 123401
//         }
//     }, 
//     {
//         emp_id: 1034,
//         designation: 'Tester',
//         company: 'Google',
//         skiils: ['JUnit', 'Mocha'],
//         location: {
//             officeLocation: 'Hyderabad',
//             pin: 12345
//         }
//     }
// ]

// console.log(employees);

// Access

// 1. Access the emp_id of each and every employee
// console.log(`${employees[0].emp_id}, ${employees[1].emp_id}, ${employees[2].emp_id}`);

// // 2. Access one of the skiils for all the employees
// console.log(`${employees[0].skiils[0]}, ${employees[1].skiils[0]}, ${employees[2].skiils[0]}`);

// // 3. The locations oif all the employees
// console.log(`${employees[0].location.officeLocation}, ${employees[1].location.officeLocation}, ${employees[2].location.officeLocation}`);


// // JSON -> JS Object Notion

// // Convert Array of Objects into JSON - stringify()
// const data = JSON.stringify(employees)
// console.log(data);

// // Convert JSON into Array of Objects - parse()
// const data_two = JSON.parse(data)
// console.log(data_two);


// CONDITIONALS
// if(10 < 20) {
//     console.log('10 is less than 20');
// } else {
//     console.log('10 is greater than 20');
// }

// // 10, 15 20
// if(15 > 10 && 15 < 20) {
//     console.log('Option - 1');
// } else if(15 < 10 && 15 > 20) {
//     console.log(Option - 2);
// } else {
//     console.log('Option - 3');
// }

// SHORT HAND
// condition ? true : false

// 10 < 20 ? console.log('10 is less than 20') : console.log('10 is greater than 20');

// TIPS & TRICKS

// 1. comparison
// 1 == '1' ? console.log('YES') : console.log('NO');
// 1 === '1' ? console.log('YES') : console.log('NO');

// // 2. var, let, const
// const age = 31
// if(age >= 30) {
//     const ans = age * 2
//     console.log(ans);
// } else {
//     let ans_one = age / 2
//     console.log(ans_one)
// }

// console.log(ans);


// LOOPS IN JS

// Basics Loops - 1. for Loops  2. while Loop

// for(let i=0 ; i <= 10; i++) {
//     console.log(`Value is ${i}`);
// }

// let i = 1
// while(i <= 20) {
//     console.log(`Value is ${i}`);
//     i += 1
// }


// Higher Order Array Methods
// 1. Loop around the entire array
// 2. If you donot like todos[i].task

const todos = [
    {
        id: 1,
        task: 'Complete the Assignments',
        isCompleted: false
    },
    {
        id: 2,
        task: 'Take my dog for a walk',
        isCompleted: true
    }, 
    {
        id: 3,
        task: 'Take out the Trash',
        isCompleted: true
    }
]
// console.log(todos.length);

// Check the tasks
// for(let i=0; i < todos.length; i++) {
//     console.log(todos[i].task);
// }

// for-of
// for(todo of todos) {
//     todo.isCompleted ? console.log(todo.task) : ''
// }

// OTHERS IN CALLBACKS & PROMISES


// *** FUNCTIONS IN JS ***
// Functions is a block of code which are useful
// 1. Tradidional Way
// 2. ES6 Way

// function functionName(parameters) { // Body }

// function sayName(name) {
//     console.log(`Hello ${name}`);
// }

// sayName('Ahmedi')
// sayName('Resham')

// ES6 Arrow Function 
// const functionName = (parameters) => { //Body } 

// const greet = (name) => {
//     console.log(`Good evening ${name}`);
// }

// const add = (a, b) => {
//     return (a + b)
// }

// const answer = add(10, 20)
// console.log(answer);

// greet('Ahmedi')



// OBJECT ORIENTED PROGRAMMING
// class -> {data + functions}

// 1. traditional -> Constructor Function
// 2. classes

function Person_Function(firstName, lastName, dob) {

    // create the properties | Data Members
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

    // Create Methods
    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`
    }

    this.getBirthYear = () => {
        return this.dob.getFullYear()
    }
}

// Initialize the objects
const person_one = new Person_Function('John', 'Ivy', '7-2-90')
// console.log(person_one.getFullName());
// console.log(person_one.getBirthYear());
console.log(person_one);


// ES6 - classes
class Person {
    constructor(firstName, lastName, dob) {
        // create the properties | Data Members
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    // Methods
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }
}

// Initialize the object
const user_one = new Person('User', 'One', '7-5-92')
console.log(user_one);