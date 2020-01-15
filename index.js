document.getElementById('main').remove('main');
// main.remove()

let newHeader = document.createElement("h1"); 
newHeader.id = "victory";
newHeader.innerHTML = "Tachi is the champion"; 
document.body.appendChild(newHeader); 