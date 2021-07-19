let myString: string
let myNum: number
let myBool: boolean
let myVar: any

// Arrays
// If something is going to be an array
// let strArray: string[]
// let numArray: number[]
// let anyArray: any[]

let strArray: Array<string> 
let numArray: Array<number>
let anyArray: Array<any>

myBool = true
myString = 'Hello World'
myNum = 1234
myVar = true
strArray = ['hello', 'world', 'this', 'is', 'TS']
numArray = [10, 20, 30, 40]
anyArray = [10, 'Hello', null, true, undefined]

console.log(myBool);
console.log(myNum);
console.log(myString);
console.log(myVar);
console.log(strArray);
console.log(numArray);
console.log(anyArray);


let myVoid: void = undefined
let myNull: null = null
let myUndefined: undefined = null

console.log(myVoid);
console.log(myNull);
console.log(myUndefined);