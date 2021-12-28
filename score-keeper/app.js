const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")

const p1Btn = document.querySelector("#p1Btn")
const p2Btn = document.querySelector("#p2Btn")

const restart = document.querySelector('#restart')

let maxPontos = parseInt(document.querySelector("#maxPontos").value)
let p1Pontos = 0
let p2Pontos = 0
let isGameOver = false

// Incrementa pontos do player 01
p1Btn.addEventListener("click", function () {
    if(!isGameOver)
        p1Pontos++
        if(p1Pontos === maxPontos)
            isGameOver = true
        p1Display.textContent = p1Pontos
})

// Incrementa pontos do player 02
p2Btn.addEventListener("click", function () {
    if(!isGameOver)
        p2Pontos++
        if(p2Pontos === maxPontos)
            isGameOver = true
        p2Display.textContent = p2Pontos
})

// Reinicia o placar
restart.addEventListener("click", function() {
    p1Display.textContent = 0
    p1Pontos = 0
    p2Display.textContent = 0
    p2Pontos = 0
    isGameOver = false
})

// Redefine o máximo de pontos possível
document.querySelector("#maxPontos").addEventListener("change", function() {
    maxPontos = parseInt(document.querySelector("#maxPontos").value)
})