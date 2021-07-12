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

const person = {
    firstName: 'Arun',
    lastName: 'Kudiyal',
    // Array in the object
    fav_colors: ['Black', 'Blue', 'Grey'],
    designation: 'Subject Matter Expert',
    yearsOfExp: 7,
    // Object inside an object
    address: {
        street: 'Street - 1',
        area: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'
    }
}

console.log(person);

// Accessing the values of obejct
console.log(`Hi, my name is ${person.firstName} ${person.lastName}. I work as ${person.designation}. My two favourite colors are ${person.fav_colors[0]} & ${person.fav_colors[2]}. I live in ${person.address.area}`);

// ARRAY OF OBJECTS