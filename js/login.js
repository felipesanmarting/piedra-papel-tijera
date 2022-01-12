
function validateLogin(){
    let userName = document.getElementById('user-name').value
    let password = document.getElementById('password').value
    
    if(userName === 'user' && password === 'pass'){

        document.getElementById('section-play').style.display = 'block'
        document.getElementById('section-login').style.display = 'none'

    } else if(userName !== '' && password !== ''){
        
        alert('ingresa información correcta ✌🏼')

        //limpiar input 
        document.getElementById('user-name').value = ''
        document.getElementById('password').value = ''
    }
}

