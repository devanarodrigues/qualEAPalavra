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

    h1.innerHTML = "Vamos começar..."    
    vamosLaScale()    
})

// ============= EXIBINDO O TEMA ============= 
document.addEventListener("DOMContentLoaded", function (event) {
    divTemas.innerHTML = `O tema é: <span class="cor-tema">${categoria.tema}</span>`

    animacaoInicioH1()
    animacaoInicioCliqueAbaixo()
})

// ============= INICIANDO CAPTURA DE AUDIO ============= 
btnOn.addEventListener('click', function (e) {
    palavraFalada = undefined
    recognition.start()
    h1.innerHTML= "Aguardando resposta..."
    aguardandoResposta()

    console.log('recognition.start: Ready to receive a color command.')

    console.log("start captura ", cont)
    console.log(palavraSecreta)
    btnOn.style.display = 'none'
})


// ============= DURANTE A CAPTURA DE AUDIO ============= 
recognition.addEventListener('soundstart', () => {
    console.log('soundstart: Some sound is being received')

    h1.innerHTML = `CAPTURANDO ÁUDIO...`
    capturandoAudio()

    console.log(palavraFalada)
})


// ============= FINAL DO AUDIO ============= 
recognition.onaudioend = () => {
    h1.innerHTML = `Vamos lá...`
    vamosLa()
    console.log('onaudioend: Speech has stopped being detected');
    btnOn.style.display = 'block'
    btnOn.innerHTML = "<i class='fa-solid fa-microphone fa-2x'></i>"
    // console.log("antes do if", eUndefinedOuNao)

    // if (eUndefinedOuNao === true) {
    //     h1.innerHTML = "Palavra não identificada. Fale novamente"
    //     palavraNaoIdentificada()

    //     divResposta.innerHTML = ""
    // } else {
    //     h1.innerHTML = `Vamos lá`
    // }
    if (palavraFalada === undefined) {
        palavraNaoFoiCapturada()
    } else {
        palavraFoiCapturada()
    }
}

// ============= RESULTADO DA CAPTURA DO AUDIO ============= 
recognition.onresult = (event) => {
    palavraFalada = event.results[0][0].transcript.toUpperCase()
    console.log(palavraFalada)

    if (palavraFalada === undefined) {
        palavraNaoFoiCapturada()
    } else {
        palavraFoiCapturada()
    }
}


function palavraNaoFoiCapturada() {
    h1.innerHTML = "Palavra não identificada. <br>Fale novamente."
    palavraNaoIdentificada()
    divResposta.innerHTML = ""
}


function palavraFoiCapturada() {
    h1.innerHTML = `Vamos lá...`
    eUndefinedOuNao = true
    cont++
    // console.log("após resultado: ", cont)
    divResposta.innerHTML = ""
    divResposta.innerHTML += `Você falou: <span class='falada'>${palavraFalada}</span>`

    // ============= VERIFICANDO RESPOSTA CORRETA ============= 
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

