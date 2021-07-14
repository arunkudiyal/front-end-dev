// DOCUMENT OBJECT MODEL

// What document is ?
// console.dir(document)

// console.log(document.URL);
// console.log(document.title);

// // Header
// const header = document.all[10]
// // Change the title
// header.textContent = 'New Title'

// console.log(header);


// *** IDENTITFIER METHODS - id, className, tagName, querySelector, querySelectorAll ***

// getElementById
// const headerTitle = document.getElementById('header-title')

// Methods to manipulate the data
// headerTitle.textContent = 'New Title'

// Method to contain element inside an another element
// headerTitle.innerHTML = `<h3>This h3 is inside h1</h3>`

// Change the style of an existing element
// headerTitle.style.fontFamily = 'cursive'
// headerTitle.style.borderBottom = `2px solid black`

// console.log(headerTitle);


// getElementsByClassName
// const items = document.getElementsByClassName('list-group-item')
// console.log(items);

// for(let i=0; i < items.length; i++) {
//     if(i % 2 == 0) {
//         items[i].style.backgroundColor = 'grey' 
//     }
// }


// getElementsByTagName
// const items = document.getElementsByTagName('li')
// console.log(items)

// for(let i=0; i < items.length; i++) {
//     if(i % 2 == 0) {
//         items[i].style.backgroundColor = 'grey' 
//     }
// }


// querySelector
// const headerTitle = document.querySelector('#header-title')
// console.log(headerTitle);

// const items = document.querySelector('.list-group-item')
// console.log(items);

// const liTags = document.querySelector('li')
// console.log(liTags);

// querySelectorAll
// const items = document.querySelectorAll('.list-group-item')
// console.log(items);

// const liTags = document.querySelectorAll('li')
// console.log(liTags);


// *** DOM EVENTS ***

// 1 - Access the element
// const button = document.getElementById('button')
// console.log(button);

// 2 - Add Event Listner to this element
// button.addEventListener('click', () => {
//     alert('Button was clicked again')
// })

// FEW OTHER EVENTS
// button.addEventListener('dblclick', () => {
//     alert('The Button was clicked twice!');
// })

// const textInput = document.getElementById('text-input')
// console.log(textInput); 

// textInput.addEventListener('focus', () => {
//     console.log(`Focused on the Text Input`);
// })

// textInput.addEventListener('blur', () => {
//     console.log(`Blurred from the Text Input`);
// })

// textInput.addEventListener('copy', () => {
//     console.log('Copied from the Text Input');
// })

// textInput.addEventListener('cut', () => {
//     console.log('Cut from the Text Input');
// })

// textInput.addEventListener('paste', () => {
//     console.log('Pasted to the Text Input');
// })

// textInput.addEventListener('keyup', () => {
//     console.log('Key was lifted up from the Text Input');
// })

// textInput.addEventListener('keydown', () => {
//     console.log('Key was pressed in the Text Input');
// })


// EVENT PARAMETERS

// const textInput = document.getElementById('text-input')
// textInput.addEventListener('keyup', (e) => {
//     // console.log(e);
//     const value = e.target.value
//     console.log(value)
// })

// const button = document.getElementById('button')
// button.addEventListener('click', (event) => {
//     console.log(event);
// })


// *** FUN ACTIVITY ***
const box = document.getElementById('box')
box.addEventListener('mouseenter', (e) => {
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
})

box.addEventListener('mouseleave', (e) => {
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
})