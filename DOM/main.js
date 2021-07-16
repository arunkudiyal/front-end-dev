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

const textInput = document.getElementById('text-input')
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
//     console.log(e);
//     // const value = e.target.value
//     // console.log(value)
// })

// const button = document.getElementById('button')
// button.addEventListener('click', (event) => {
//     console.log(event);
// })


// *** FUN ACTIVITY ***
// function mouseEnterFunction(e) {
//     // console.log('Entered');
//     box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
// }

// const box = document.getElementById('box')
// box.addEventListener('mouseenter', mouseEnterFunction)

// box.addEventListener('mouseleave', (e) => {
//     box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`
// })


// DOM TRAVERSALS

// It is a way to navigate to the parent, children or any siblings of a given element

// 1. Parent Element
// const item = document.querySelector('.list-group-item')
// // console.log(item);
// const listParentElement = item.parentElement
// // console.log(listParentElement);
// listParentElement.style.color = 'blue'
// listParentElement.style.border = `3px solid red`



// // 2. Children Elements
// const unordedList = document.querySelector('#items')
// // console.log(unordedList.childNodes);         // text (indentation)
// const children = unordedList.children
// console.log(children);

// for(let i=0; i < children.length; i++) {
//     if(i % 2 == 0) {
//         children[i].style.color = 'grey'
//     } else {
//         children[i].style.color = 'black'
//     }
// }
// firstChild (text) & firstElementChild
// lastChild (text) & lastElementChild



// 3. Siblings - previous or next
// const secondText = document.getElementById('second-text')
// console.log(secondText);

// // console.log(secondText.previousSibling);            // text
// console.log(secondText.previousElementSibling);

// // console.log(secondText.nextElementSibling);`         // text
// console.log(secondText.nextElementSibling);



// GENERATING AN HTML ELEMNT USING JS
// const newLi = document.createElement('li')

// Providing attributes to your newly created element
// newLi.id = 'new-id'
// newLi.className = 'list-group-item'

// Add this newly created element in the HTML
// const items = document.getElementById('items')
// items.appendChild(newLi)

// const items = document.getElementById('items')
// const submitButton = document.getElementById('submit-button')

// const text = document.getElementById('text-input')
// text.addEventListener('keyup', (e) => {
//     var value = e.target.value
//     submitButton.addEventListener('click', (e) => {
//         // Do-not want the submit-button to call the back-end
//         e.preventDefault()
//         newLi.innerText = value
//         items.appendChild(newLi)
//     })
// })

// submitButton.addEventListener('click', (e) => {
//     // Do-not want the submit-button to call the back-end
//     e.preventDefault()
//     console.log(value);
//     items.appendChild(newLi)
// })

// console.log(newLi);