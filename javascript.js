const input = document.getElementById('from-id')

function validateName(tittle) {
    if(tittle.value==''){
        console.log('completa el campo')
        return false
    
    }else{ 
        return true
    }
}

input.addEventListener('submit', (e) => {
	e.preventDefault();
    const tittle = document.getElementById('tittle')
    console.log(tittle.value);
    const validate = validateName(tittle)
    if(validate == false){
        return
    }else{
        console.log('aca deberia continuar')
    }
            
    
});
