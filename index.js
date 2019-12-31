// Write your code here!
main.remove();


let element = document.createElement('h1');
element.setAttribute('id', 'victory');
document.body.appendChild(element);

let newHeader = document.getElementById('victory');

newHeader.innerHTML = "Hazel is the champion";