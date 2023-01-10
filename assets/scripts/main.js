const wrapper = document.querySelector("#wrapper")
const main = document.querySelector("main")
const h1 = document.querySelector("#wrapper > main > h1")
const nav = document.querySelector("#wrapper > main > nav")
const divTemas = document.querySelector("#tema")
const btnComecar = document.querySelector("#btn-start")
const start = document.getElementById('start')
const btnOn = document.getElementById('btn-on')
const botoes = document.getElementsByClassName('botoes')
const divResposta = document.querySelector("#resposta")
const cliqueAbaixo = document.querySelector("#start > p")
let eUndefinedOuNao = true
let palavraFalada
let cont = 0

// ============= MUDANDO PARA A PAGINA DO GAME ============= 
btnComecar.addEventListener('click', () => {
    nav.classList.remove('disable')
    btnOn.classList.remove('disable')
    main.removeChild(start)

    h1.innerHTML = "Vamos lá"

    
    h1.animate([
        { transform: 'scale(4)', easing: 'cubic-bezier(.54,.21,.6,.88)'},
        { transform: 'scale(1)', easing: 'cubic-bezier(.54,.21,.6,.88)' }
    ],{
        duration: 550,
        iterations: 1
    })    
})

// ============= EXIBINDO O TEMA ============= 
document.addEventListener("DOMContentLoaded", function (event) {
    divTemas.innerHTML = `O tema é: <span class="cor-tema">${categoria.tema}</span>`

    animacaoInicioH1()
    animacaoInicioCliqueAbaixo()
})

// ============= INICIANDO CAPTURA DE AUDIO ============= 
btnOn.addEventListener('click', function (e) {
    recognition.start()
    console.log('recognition.start: Ready to receive a color command.')
    btnOn.innerHTML = "<i class='fa-solid fa-microphone fa-beat-fade fa-2x' style='--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;color: red;'></i>"

    console.log("start captura ", cont)
    console.log(palavraSecreta)
    btnOn.style.display = 'none'
})


// ============= DURANTE A CAPTURA DE AUDIO ============= 
recognition.addEventListener('soundstart', () => {
    console.log('soundstart: Some sound is being received')

    h1.innerHTML = `CAPTURANDO SOM...`
    capturando = true
    console.log(palavraFalada)
})


// ============= FINAL DO AUDIO ============= 
recognition.onaudioend = () => {
    capturando = false
    console.log('onaudioend: Speech has stopped being detected');
    btnOn.style.display = 'block'
    btnOn.innerHTML = "<i class='fa-solid fa-microphone fa-2x'></i>"
    console.log("antes do if",eUndefinedOuNao)
    if (eUndefinedOuNao === true) {
        h1.innerHTML = "Palavra não identificada. Fale novamente"
        divResposta.innerHTML = ""
    }else{
    h1.innerHTML = `Vamos lá`
    }
    
    // ============= RESULTADO DA CAPTURA DO AUDIO ============= 
    recognition.onresult = (event) => {
        palavraFalada = event.results[0][0].transcript[0].toUpperCase() + event.results[0][0].transcript.substring(1)
        console.log(palavraFalada)
        if (palavraFalada === undefined){
            
        }else{
            eUndefinedOuNao = true
            cont++
            // console.log("após resultado: ", cont)
            divResposta.innerHTML = ""
            divResposta.innerHTML += `Você falou: ${palavraFalada}`

            if (cont === 1) {
                verificandoResposta(palavraFalada)
            } else if (cont === 2) {
                verificandoResposta2(palavraFalada)
            } else if (cont === 3) {
                verificandoResposta3(palavraFalada)
            } else if (cont === 4) {
                verificandoResposta4(palavraFalada)
            }
        }
        
        
    }

    // ============= VERIFICANDO RESPOSTA CORRETA ============= 
}

