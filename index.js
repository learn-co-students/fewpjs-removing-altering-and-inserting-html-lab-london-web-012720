let element = document.querySelector('body main#main')

element.remove()
let body = document.body

// add inside the body the tag h1
body.innerHTML = "<h1></h1> ";


// select the tag and store it in a variable 
let newHeader = body.querySelector('h1')


// add an id an id's name to the h1
newHeader.setAttribute("id", "victory")


let name = "Banana";

// add a text inside the h1
newHeader.innerHTML = `${name} is the champion`;