const temas = [
    {
        "tema": [
            {
                "nome": "macaco",
                "dica1": "inteligente",
                "dica2": "teoria evolucao",
                "dica3": "vive em florestas"
            },
            {
                "nome": "galinha",
                "dica1": "ave",
                "dica2": "industria alimentar",
                "dica3": "bota ovos"
            },
            {
                "nome": "galinha",
                "dica1": "ave",
                "dica2": "industria alimentar",
                "dica3": "bota ovos"
            }
        ]
    },
    {
        "tema": [
            {
                "nome": "laranja",
                "dica1": "acido",
                "dica2": "arvore",
                "dica3": "cor"
            },
            {
                "nome": "morango",
                "dica1": "sementes",
                "dica2": "fondue",
                "dica3": "sensacao"
            },
            {
                "nome": "melancia",
                "dica1": "nasce no chao",
                "dica2": "muitas sementes dentro",
                "dica3": "magali"
            }
        ]
    },
    {
        "tema": [
            {
                "nome": "azul",
                "dica1": "tranquilidade",
                "dica2": "harmonia",
                "dica3": "ceu"
            },
            {
                "nome": "vermelho",
                "dica1": "fogo",
                "dica2": "paixao",
                "dica3": "coracao"
            },
            {
                "nome": "verde",
                "dica1": "esperanca",
                "dica2": "saude",
                "dica3": "floresta"
            }]
    }
]
const randomIndex = Math.floor(Math.random() * temas.length);
const randomElement = temas[randomIndex].tema[randomIndex]; // console.log(temas[x].tema[x])
console.log(randomElement)

// function escolhendoPalavra (randomElement){
//     randomElement
// }

// let palavra = "verde" // "resposta"
// semDica(palavra)

function semDica(palavra) {
    if (palavra === randomElement.nome) {
        console.log(`Voce acertou, a palavra era ${randomElement.nome}`)
    } else {
        console.log(`DICA 1: ${randomElement.dica1}`)
        // exibir input para receber resposta (funcao que ative o microfone)
        dica2(palavra)
    }
}
function dica2(palavra) {
    if (palavra === randomElement.nome) {
        console.log(`Voce acertou, a palavra era ${randomElement.nome}`)
    } else {
        console.log(`DICA 2: ${randomElement.dica2}`)
        // exibir input para receber resposta (funcao)
        dica3(palavra)
    }
}
function dica3(palavra) {
    if (palavra === randomElement.nome) {
        console.log(`Voce acertou, a palavra era ${randomElement.nome}`)
    } else {
        console.log(`DICA 3: ${randomElement.dica3}`)
        // exibir input para receber resposta (funcao)
        gameover(palavra)
    }
}

function gameover(palavra) {
    if (palavra === randomElement.nome) {
        console.log(`Voce acertou, a palavra era ${randomElement.nome}`)
    } else {
        console.log(`As dicas acabaram, a palavra era: ${randomElement.nome}`)
    }
}


// ================ RECEBENDO RESPOSTA ================

// const resposta = document.getElementById("input-resposta").value

// funcao que ative o microfone: converter audio em palavra e depois executar a funcao que verifica (funcao dicaX)



//  ------- exibe temas -------
// console.log(temas)

// ------- exibe itens do tema escolhido -------
// console.log(temas[0].animais)

// ------- exibe dados do item escolhido -------
// console.log(temas[0].animais[0])

// console.log(temas[0].animais[0].nome)
// exibe apenas um dado do item escolhido

