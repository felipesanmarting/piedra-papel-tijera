const ROCK = 'rock'
const PAPER = 'paper'
const SCISSOR = 'scissor'

const TIE = 0
const WIN = 1
const LOST = 2


// selecciono los 3 botones a traves de su ids
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const resultText = document.getElementById('star-text') // selecciono el texto


// puntaje
let pointUser = 0
let resultUser = document.getElementById('result-user')
resultUser.innerHTML = pointUser

let pointIa = 0
let resultIa = document.getElementById('result-ia')
resultIa.innerHTML = pointIa

let ronda = 0
let consolRonda = document.getElementById('consola-ronda')

// let listaPuntajes = {
//     '0': 120,
//     '1': 70,
//     '2': 200
// }


rockBtn.addEventListener('click', () => {
    play(ROCK)
})

paperBtn.addEventListener('click', () => {
    play(PAPER)
})

scissorBtn.addEventListener('click', () => {
    play(SCISSOR)
})



// opcion del usuario
function play(userOption){

    ronda += 1
    
    if(ronda <= 10){
        consolRonda.innerHTML = ronda

        const userImg = document.getElementById('img-user') // selecciono imagen de usuario
        const userIa = document.getElementById('img-ia') // selecciono imagen de IA 
    
        // numeros random para IA
        function calculateMachineOption(){
            const numberRandom = Math.floor(Math.random() * 3)
            switch (numberRandom){
                case 0:
                    return ROCK
                case 1:
                    return PAPER
                case 2:
                    return SCISSOR
            }
        }
      
        // opcion del usuario en imagen
        userImg.src = "img/" +userOption+ ".svg"

        resultText.innerHTML = `<div class="rotate">⌛️</div>`

        const interval = setInterval(function(){
        const machineOption = calculateMachineOption()
        
        // opcion del IA en imagen
        userIa.src = "img/" +machineOption+ ".svg"
        }, 100)


        setTimeout(function(){

            clearInterval(interval)
            //calcular la opcion del ordenador
            const machineOption = calculateMachineOption()
            const result = calculateResult(userOption, machineOption)

            // opcion del IA en imagen
            userIa.src = "img/" +machineOption+ ".svg"

            switch(result){
                case TIE:
                    resultText.innerHTML = 'Empate 👀'
                    break
                
                case WIN:
                    resultText.innerHTML = 'Ganaste 👑'
                    break
                
                case LOST:
                    resultText.innerHTML = 'Perdiste 😭'
                    break
            }
        }, 1500)  
    
        function calculateResult(userOption, machineOption){
            
            // si coincide con la maquina
            if(userOption === machineOption){
                return TIE
        
                //usuario selecciona papel, posibilidades 
            } else if(userOption === ROCK){
                if(machineOption === PAPER) {
                    resultText.innerHTML = 'Perdiste 😭' //lost
                    pointIa += 70
                    pointUser -= 30
                }
                if(machineOption === SCISSOR) {
                    resultText.innerHTML = 'Ganaste 👑' //win
                    pointUser += 100
                    pointIa -= 30
                }
        
            } else if(userOption === PAPER){
                if(machineOption === SCISSOR) {
                    resultText.innerHTML = 'Perdiste 😭' //lost
                    pointIa += 70
                    pointUser -=30
                }
                if(machineOption === ROCK) {
                    resultText.innerHTML = 'Ganaste 👑' //win
                    pointUser += 100
                    pointIa -= 30
                }
        
            } else if(userOption === SCISSOR){
                if(machineOption === ROCK) {
                    resultText.innerHTML = 'Perdiste 😭' //lost
                    pointIa += 70
                    pointUser -=30
                }
                if(machineOption === PAPER) {
                    resultText.innerHTML = 'Ganaste 👑' //win
                    pointUser += 100
                    pointIa -= 30
                }
            }

            // impresión de resultados 
            resultUser.innerHTML = pointUser;
            resultIa.innerHTML = pointIa;
        }

    }//fin condicional ronda
     
    else {
        alert('Fin del de ronda #1')
    }
}





