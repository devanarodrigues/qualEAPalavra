const containerDicas = document.querySelector("#container-dicas")
const alerta = document.getElementsByClassName('alerta')

function verificandoResposta(resposta) {

    if (resposta !== palavraSecreta) {
        containerDicas.innerHTML = dica1HTML
    } else {
        win()
    }
}

function verificandoResposta2(resposta) {
    if (resposta !== palavraSecreta) {
        containerDicas.innerHTML += dica2HTML
    } else {
        win()
    }
}
function verificandoResposta3(resposta) {
    if (resposta !== palavraSecreta) {
        containerDicas.innerHTML += dica3HTML
        h1.innerHTML = 'ÚLTIMA CHANCE!' 
    } else {
        win()
    }
}
function verificandoResposta4(resposta) {
    if (resposta === palavraSecreta) {
        win()
    } else {
        lose()
    }
}

// ============= EXIBINDO PAGINA DE DERROTA ============= 
const reload = document.createElement("button")
reload.classList.add("btn")
reload.innerHTML = 'JOGAR NOVAMENTE'
reload.addEventListener("click", () => { window.location.reload(true) })

function lose() {
    wrapper.innerHTML = `
    <div id="end">
    <h1>GAME OVER</h1>
    <div class='end__game-over'>
    
        <p class='end__game-over__mensagem'>Você <span id='resposta-errada'>perdeu</span>!</p>
        <p class='end__game-over__resposta'>A palavra correta é: <span id='resposta-errada'> ${palavraSecreta} </span></p>
    
        <p>Quem sabe na próxima você acerta...</p>
    </div>
    </div>`

    animacaoLose()
    wrapper.appendChild(reload)
}



// ============= EXIBINDO PAGINA DE VITORIA ============= 
function win() {
    wrapper.innerHTML = `
            <div id="end">
            <h1>GAME OVER</h1>
            <div class='end__win'>
                <p class='end__win__mensagem'>Você <span id='resposta-certa'>ganhou</span>!</p>
                <p class='end__win__resposta'>A palavra correta é: <span id='resposta-certa'> ${palavraSecreta} </span></p>

                <p>Vamos ver se você acerta mais uma vez?</p>
            </div>
            </div>`

    animacaoWin()
    wrapper.appendChild(reload)
}



