const input = document.getElementById('from-id')
const peliculas = document.getElementById('peliculas')
const buscar = document.getElementById('buscar')
const mensajeError = document.getElementById('invisible')
const mensajeNoRepetidos = document.getElementById("norepetidos")

let movieList = []
const apiKey = "k_glv80svx"
const url = "https://imdb-api.com/en/API/SearchTitle/"
let cargando = false

input.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(cargando === true){
        return false
    }

    function validate(text) {
        if(text==''){
            return false  
        }else{ 
            return true
        }
    }
    
    function addList(name) {
        movieList.push(name)
    }
    
    function addToDocument() {
        peliculas.innerHTML = "";
        // console.log(movieList)
        movieList.forEach((element) => {
            let node = document.createElement("LI");// Create a <li> node
            //if primer elemento en rojo
            let textnode = document.createTextNode(element);         // Create a text node
            node.appendChild(textnode);            // Append the text to <li>
            peliculas.appendChild(node)
        });
    }

	
    const tittle = document.getElementById('tittle')
    const validar = validate(tittle.value)
    if(validar == false){
        mensajeError.classList.remove("invisible")
        return
    }else{
        mensajeError.classList.add("invisible")
        //https://imdb-api.com/en/API/SearchTitle/k_glv80svx/Incep
        // let test = url + '/' + apiKey + '/' + tittle.value

        //loading
        cargando = true
        buscar.classList.add("cargando")
        buscar.innerText = "Cargando..."
        await axios.get(`${url}/${apiKey}/${tittle.value}`)//promesa
        .then(function (response) {
            //quitar loading
            console.log(response)
            cargando = false
            buscar.classList.remove("cargando")
            buscar.innerText = "Buscar"
            if(response.status === 200){// la respuesta esta bien
                if(response.data != undefined && response.data.results.length > 0){
                    let primerDato = response.data.results[0];
                    let nombreAGuardar = primerDato.title + ' ' + primerDato.description
                    if(movieList.find(movie => movie === nombreAGuardar)){
                        mensajeNoRepetidos.classList.remove("invisible")
                        return
                    }
                    mensajeNoRepetidos.classList.add("invisible")
                    addList(nombreAGuardar)
                    addToDocument()
                }
            } else {//la respuesta esta mal
                console.log('Error:',response)
            }
        })
        .catch(function (error) {
            console.log(error);
            //quitar loading
            cargando = false
            buscar.classList.remove("cargando")
            buscar.innerText = "Buscar"
        })
    }
            
    
});
