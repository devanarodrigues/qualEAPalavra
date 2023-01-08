// const dica1 = <div id="dica1" class="dicas"> Primeira dica: <span> 1</span></div>
// const dica2 = <div id="dica2" class="dicas"> Segunda dica: <span>2 </span></div>
// const dica3 = <div id="dica3" class="dicas"> Terceira dica: <span> 3</span></div>
// const containerDicas = document.querySelector("#container-dicas")


function exibirDica1() {
    containerDicas.innerHTML = `<div id="dica1" class="dicas"> Primeira dica: <span> ${randomElement.dica1}</span></div>`
}
// exibirDica1()
