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
const dica01 = document.querySelector("#dica1")
const dica02 = document.querySelector("#dica2")
const dica03 = document.querySelector("#dica3")
let palavraFalada

document.addEventListener("DOMContentLoaded", function (event) {
    divTemas.innerHTML = `
    O tema é: <span class="cor-tema">${tema}</span> 
    `
})

btnComecar.addEventListener('click', () => {
    nav.classList.remove('disable')
    btnOn.classList.remove('disable')
    main.removeChild(start)

    h1.innerHTML = "Vamos lá"
    
})


btnOn.addEventListener('click', function (e) {
    recognition.start()
    console.log('recognition.start: Ready to receive a color command.')
    btnOn.innerHTML = "<i class='fa-solid fa-microphone fa-beat-fade fa-2x' style='--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;color: red;'></i>"
})



// recognition.addEventListener('result', onSpeak)
// function onSpeak(e) {
//     console.log ("onSpeak: ", e.results[0][0].transcript)
// }


recognition.addEventListener('soundstart', () => {
    console.log('soundstart: Some sound is being received')
    h1.innerHTML = `CAPTURANDO SOM...`


})



recognition.onaudioend = () => {
    console.log('onaudioend: Speech has stopped being detected');
    btnOn.innerHTML = "<i class='fa-solid fa-microphone fa-2x'></i>"

    h1.innerHTML = `Vamos lá`


    recognition.onresult = (event) => {
        palavraFalada = event.results[0][0].transcript[0].toUpperCase() + event.results[0][0].transcript.substring(1)
        resposta.innerHTML = ""
        resposta.innerHTML += `Você falou: ${palavraFalada}`
        
        if (containerDicas.contains(dica01)) {
            verificaResposta2(palavraFalada)
        } else {
            verificaResposta(palavraFalada)
        }
    }

}

