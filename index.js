// Write your code here!
main.remove('main')

let body = document.querySelector('body')
let newHeader = document.createElement('h1')

newHeader.id = "victory"
newHeader.innerHTML = "Alicia is the champion"
body.appendChild(newHeader)