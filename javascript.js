const input = document.getElementById('from-id')
const peliculas = document.getElementById('peliculas') 
let list = []

function validate(text) {
    if(text==''){
        return false  
    }else{ 
        return true
    }
}

function addList(name) {
    list.push(name)   
}

function addToDocument(list) {
    peliculas.innerHTML = "";
    
    list.forEach((element) => {
        let node = document.createElement("LI");// Create a <li> node
        //if primer elemento en rojo
        let textnode = document.createTextNode(element);         // Create a text node
        node.appendChild(textnode);            // Append the text to <li>
        peliculas.appendChild(node)
    });
}

input.addEventListener('submit', (e) => {
	e.preventDefault();
    const tittle = document.getElementById('tittle')
    console.log(tittle.value);
    const validar = validate(tittle.value)
    if(validar == false){
        return
    }else{
        addList(tittle.value)
        console.log(list)
        addToDocument(list)
    }
            
    
});
