const containerDicas = document.querySelector("#container-dicas")
restart.addEventListener("click", () => { window.location.reload(true) })

recognition.addEventListener('result', (event) => {
    var resposta = event.results[0][0].transcript;

})

function verificaResposta(palavra) {
    if (palavra === randomElement.nome) {
        win()
    } else {
        console.log(`DICA 1: ${randomElement.dica1}`)
        containerDicas.innerHTML += `<div id="dica1" class="dicas"> Primeira dica: <span> ${randomElement.dica1}</span></div>`

        btnComecar.addEventListener('click', verificaResposta2())
    }
}

// verificaResposta2();
function verificaResposta2(palavra) {
    recognition.onaudioend = () => {

        if (palavra === randomElement.nome) {
            containerDicas.innerHTML = `Voce acertou, a palavra era ${randomElement.nome}`;
            win()
        } else {
            console.log(`DICA 2: ${randomElement.dica2}`);
            containerDicas.innerHTML += `<div id="dica2" class="dicas"> Segunda dica: <span> ${randomElement.dica2}</span></div>`;

        }
        btnComecar.addEventListener('click', verificaResposta3())
    }
}

function verificaResposta3(palavra) {
    recognition.onaudioend = () => {

        if (palavra === randomElement.nome) {
            containerDicas.innerHTML = `Voce acertou, a palavra era ${randomElement.nome}`;
            win()
        } else {
            console.log(`DICA 3: ${randomElement.dica3}`);
            containerDicas.innerHTML += `<div id="dica3" class="dicas"> Segunda dica: <span> ${randomElement.dica3}</span></div>`;

            btnComecar.addEventListener('click', verificaRespostaFinal())
        }
    }
}

function verificaRespostaFinal(palavra) {
    if (palavra === randomElement.nome) {
        console.log(`Voce acertou, a palavra era ${randomElement.nome}`)
        win()
    } else {
        containerDicas.innerHTML = `As dicas acabaram`
        setTimeout(lose(), 3000)
    }
}


function lose() {
    restart.classList.remove('some')
    restart.classList.remove('restart')
    wrapper.innerHTML = `
            <div class='end__game-over'>
                <p class='end__game-over__mensagem'>Você perdeu!</p>
                <p class='end__game-over__resposta'>A palavra correta era: <span id='resposta-errada'> ${palavraSecreta} </span></p>
                <p>Quem sabe na próxima você acerta</p>
        <button class="btn" id="btn-restart">Recomecar </button>
            </div>`
}

function win() {
    wrapper.innerHTML = `<div id="end">
            <h1>GAME OVER!</h1>
            
            <div class='end__win'>
                <p class='end__win__mensagem'>Você ganhou!</p>
                <p class='end__win__resposta'>A palavra correta era:  <span id='resposta-certa'> ${palavraSecreta} </span></p>
                <p>Vamos ver se você acerta mais uma vez?</p>
                        <button class="btn" id="btn-restart">Recomecar </button>
`
}

