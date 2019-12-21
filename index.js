// Write your code here!
let main = document.querySelector('main')
main.remove();

let body = document.querySelector('body')
let newHeader = document.createElement('h1')

// newHeader.addClassName = "victory"
newHeader.id = "victory"
newHeader.innerHTML = "Shannon is the champion"

body.appendChild(newHeader)
