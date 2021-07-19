function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(10, 20));
function sum(a, b) {
    return +a + +b;
}
// console.log(sum('10', '20'));
// Keep any parameter in the function as option (?)
function getName(firstName, lastName) {
    if (typeof lastName === 'undefined') {
        return "" + firstName;
    }
    return firstName + " " + lastName;
}
console.log(getName('John'));
function printSomething(string1, string2) {
    console.log(string1 + " " + string2);
}
printSomething('Hi', 'how are you');
