const containerDicas = document.querySelector("#container-dicas")


recognition.addEventListener('result', (event) => {
    var resposta = event.results[0][0].transcript;

})

function verificaResposta() {
    if (resposta === randomElement.nome) {
        containerDicas.innerHTML =
            `
            Voce acertou, a palavra era ${randomElement.nome}
        `
    } else {
        console.log(`DICA 1: ${randomElement.dica1}`)
        containerDicas.innerHTML +=
            `
            <div id="dica1" class="dicas"> Primeira dica: <span> 
            ${randomElement.dica1}</span></div>
        `
        btnComecar.addEventListener('click', verificaResposta2())
    }
}

// verificaResposta2();
function verificaResposta2() {
    recognition.onaudioend = () => {

        if (resposta === randomElement.nome) {
            containerDicas.innerHTML = `Voce acertou, a palavra era ${randomElement.nome}`;
        } else {
            console.log(`DICA 2: ${randomElement.dica2}`);
            containerDicas.innerHTML += `<div id="dica2" class="dicas"> Segunda dica: <span> ${randomElement.dica2}</span></div>`;

        }
        btnComecar.addEventListener('click', verificaResposta3())
    }
}

function verificaResposta3() {
    recognition.onaudioend = () => {

        if (resposta === randomElement.nome) {
            containerDicas.innerHTML = `Voce acertou, a palavra era ${randomElement.nome}`;
        } else {
            console.log(`DICA 3: ${randomElement.dica3}`);
            containerDicas.innerHTML += `<div id="dica3" class="dicas"> Segunda dica: <span> ${randomElement.dica3}</span></div>`;

            btnComecar.addEventListener('click', verificaRespostaFinal())
        }
    }
}

function verificaRespostaFinal() {
    if (resposta === randomElement.nome) {
        console.log(`Voce acertou, a palavra era ${randomElement.nome}`)
    } else {
        containerDicas.innerHTML = `As dicas acabaram, a palavra era: ${randomElement.nome}`
    }
}
