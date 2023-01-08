const btnOn = document.getElementById('btn-on')
const start = document.getElementById('start')
const btnComecar = document.querySelector("#btn-start")
const botoes = document.getElementsByClassName('botoes')
const nav = document.querySelector("#wrapper > main > nav")
const h1 = document.querySelector("#wrapper > main > h1")
const divTemas = document.querySelector("#tema")
const divResposta = document.querySelector("#resposta")
const dica01 = document.querySelector("#dica1")
const dica02 = document.querySelector("#dica2")
const dica03 = document.querySelector("#dica3")
const wrapper = document.querySelector("#wrapper")
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", function (event) {
    divTemas.innerHTML = `
    O tema é: <span class="cor-tema">${tema}</span> 
    `
})

btnComecar.addEventListener('click', ()=>{
    nav.classList.remove('disable')
    btnOn.classList.remove('disable')
    start.removeChild(btnComecar)

    h1.innerHTML = "Vamos lá"
})


btnOn.addEventListener('click', function (e) {
    recognition.start()
    console.log('recognition.start: Ready to receive a color command.')
})



// recognition.addEventListener('result', onSpeak)
// function onSpeak(e) {
//     console.log ("onSpeak: ", e.results[0][0].transcript)
// }


recognition.addEventListener('soundstart', () =>{
    console.log('soundstart: Some sound is being received')
    h1.innerHTML = `CAPTURANDO SOM...`
})


recognition.onaudioend = () => {
    console.log('onaudioend: Speech has stopped being detected');
    
    h1.innerHTML = `Você consegue adivinhar a palavra?`
    btnOn.innerHTML = `Ligar microfone`

    recognition.onresult = (event) =>{
        resposta.innerHTML = ""
        resposta.innerHTML += `Você falou: ${event.results[0][0].transcript}`
        if(containerDicas.contains(dica01)){
            verificaResposta2()
        }else{
            verificaResposta()
        }
    }
}