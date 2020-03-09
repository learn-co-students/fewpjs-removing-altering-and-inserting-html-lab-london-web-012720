// Write your code here!

let element = document.createElement('div')

let ul = document.createElement('ul')
 
let main = document.getElementById("main");
main.remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory'
newHeader.innerHTML = 'YOUR-NAME is the champion';