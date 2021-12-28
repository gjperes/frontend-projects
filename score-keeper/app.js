const player01 = document.querySelector("#pontos-01")
const player02 = document.querySelector("#pontos-02")

const addPontoPlayer01 = document.querySelector("#score-01")
const addPontoPlayer02 = document.querySelector("#score-02")

addPontoPlayer01.addEventListener("click", function () {
    const pontosPlayer01 = parseInt(player01.innerText)
    player01.innerText = pontosPlayer01 + 1
})

addPontoPlayer02.addEventListener("click", function () {
    const pontosPlayer02 = parseInt(player02.innerText)
    player02.innerText = pontosPlayer02 + 1
})

const restartBtn = document.querySelector('#restart')

restartBtn.addEventListener("click", function() {
    player01.innerText = 0
    player02.innerText = 0
})