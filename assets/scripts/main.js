const wrapper = document.querySelector("#wrapper")
const main = document.querySelector("main")
const h1 = document.querySelector("#wrapper > main > h1")
const nav = document.querySelector("#wrapper > main > nav")
const divTemas = document.querySelector("#tema")
const btnComecar = document.querySelector("#btn-start")
const start = document.getElementById('start')
const btnOn = document.getElementById('btn-on')
const botoes = document.getElementsByClassName('botoes')
const restart = document.querySelector("#btn-restart")
const divResposta = document.querySelector("#resposta")
let palavraFalada
let cont = 0

// ============= MUDANDO PARA A PAGINA DO GAME ============= 
btnComecar.addEventListener('click', () => {
    nav.classList.remove('disable')
    btnOn.classList.remove('disable')
    main.removeChild(start)
    
    h1.innerHTML = "Vamos lá"
})

// ============= EXIBINDO O TEMA ============= 
document.addEventListener("DOMContentLoaded", function (event) {
    divTemas.innerHTML = `O tema é: <span class="cor-tema">${categoria.tema}</span>`
})

// ============= INICIANDO CAPTURA DE AUDIO ============= 
btnOn.addEventListener('click', function (e) {
    recognition.start()
    console.log('recognition.start: Ready to receive a color command.')
    btnOn.innerHTML = "<i class='fa-solid fa-microphone fa-beat-fade fa-2x' style='--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;color: red;'></i>"
    
    console.log("start captura ", cont)
    console.log(palavraSecreta)
})


// ============= DURANTE A CAPTURA DE AUDIO ============= 
recognition.addEventListener('soundstart', () => {
    console.log('soundstart: Some sound is being received')
    cont++
    console.log("capturando", cont)
    h1.innerHTML = `CAPTURANDO SOM...`
    capturando = true
    console.log(palavraFalada)
})


// ============= FINAL DO AUDIO ============= 
recognition.onaudioend = () => {
    capturando = false
    console.log('onaudioend: Speech has stopped being detected');
    btnOn.innerHTML = "<i class='fa-solid fa-microphone fa-2x'></i>"
    h1.innerHTML = `Vamos lá`
    
    // ============= RESULTADO DA CAPTURA DO AUDIO ============= 
    recognition.onresult = (event) => {
        palavraFalada = event.results[0][0].transcript[0].toUpperCase() + event.results[0][0].transcript.substring(1)
        // console.log(palavraFalada)
        divResposta.innerHTML = ""
        divResposta.innerHTML += `Você falou: ${palavraFalada}`

        if(cont === 1){
            verificandoResposta(palavraFalada)
        }else if(cont === 2){
            verificandoResposta2(palavraFalada)
        }else if (cont === 3){
            verificandoResposta3(palavraFalada)
        }else if (cont === 4){
            verificandoResposta4(palavraFalada)
        }
    }
    
    // ============= VERIFICANDO RESPOSTA CORRETA ============= 
}

