function getSum(num1: number, num2: number): number {
    return num1 + num2
}
console.log(getSum(10, 20));

function sum(a: number, b: number): number {
    return +a + +b
}

// console.log(sum('10', '20'));


// Keep any parameter in the function as option (?)
function getName(firstName: string, lastName?: string): string {
    if(typeof lastName === 'undefined') {
        return `${firstName}`
    }
    return `${firstName} ${lastName}`
}
console.log(getName('John'));


function printSomething(string1: string, string2: string): void {
    console.log(string1 + " " + string2);
}

printSomething('Hi', 'how are you')