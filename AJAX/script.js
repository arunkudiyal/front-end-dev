// AJAX Code to integrate GitHub API

// Step 1 - Create an object of XHR - XMLHttpRequest
const xhr = new XMLHttpRequest()
console.log(`The Ready State of the XHR is: ${xhr.readyState}`);
const url = `https://api.github.com/users`

// Step 2 - Open the portal for communication b/w client & server
// xhr.open(HttpMethod, url)
xhr.open('GET', url)
console.log(`The Ready State of the XHR is: ${xhr.readyState}`);

// Step 3 - Keep the track of the request
xhr.onreadystatechange = () => {
    console.log(`The Ready State of the XHR is: ${xhr.readyState}`);
    if(xhr.readyState == 4 && xhr.status == 200) {
        const response = xhr.responseText
        const responseObject = JSON.parse(response)

        for(let i=0; i < 30; i++) {
            const image = document.createElement('img')
            image.setAttribute('src', responseObject[i].avatar_url)
            
            const username = document.createElement('h3')
            username.textContent = responseObject[i].login

            const rule = document.createElement('hr')

            const container = document.querySelector('#main')
            container.appendChild(image)
            container.appendChild(username)
            container.appendChild(rule)
        }

        console.log(responseObject);
    }
}
console.log(`The Ready State of the XHR is: ${xhr.readyState}`);

// Step 4 - Send the Request
xhr.send()