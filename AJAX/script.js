// AJAX Code to integrate GitHub API

// Step 1 - Create an object of XHR - XMLHttpRequest
const xhr = new XMLHttpRequest()
const url = `https://api.github.com/users`

// Step 2 - Open the portal for communication b/w client & server
// xhr.open(HttpMethod, url)
xhr.open('GET', url)

// Step 3 - Keep the track of the request
xhr.onreadystatechange = () => {
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

// Step 4 - Send the Request
xhr.send()