// Write your code here!
document.querySelector('main').remove(); 

let newHeader = document.createElement('h1'); 
document.body.appendChild(newHeader); 

newHeader.id = 'victory'; 
newHeader.innerHTML = 'Chris is the champion'; 