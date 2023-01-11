let randomIndex = Math.floor(Math.random() * temas.length);

const tema = temas[randomIndex]

randomIndex = Math.floor(Math.random() * temas.length);
const categoria = tema.categoria[randomIndex]

const d1 = categoria.dica1.toUpperCase()
const d2 = categoria.dica2.toUpperCase()
const d3 = categoria.dica3.toUpperCase()
const palavraSecreta = categoria.nome.toUpperCase()

const IdDica1 = document.querySelector("#dica1")
const IdDica2 = document.querySelector("#dica2")
const IdDica3 = document.querySelector("#dica3")

const dica1HTML = `<div id="dica1" class="dicas"> Primeira dica: <span> ${d1}</span></div>`
const dica2HTML = `<div id="dica2" class="dicas"> Segunda dica: <span> ${d2}</span></div>`
const dica3HTML = `<div id="dica3" class="dicas"> Terceira dica: <span> ${d3}</span></div>`