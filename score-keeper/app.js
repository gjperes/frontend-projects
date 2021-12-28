const player01 = {
    pontos: 0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1Btn")
}

const player02 = {
    pontos: 0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2Btn")
}

let maxPontos = parseInt(document.querySelector("#maxPontos").value)
let isGameOver = false

// Reseta todos os valores do jogo para os valores iniciais
function reset () {
    for(let player of [player01, player02]) {
        player.pontos = 0
        player.display.textContent = 0
        player.display.classList.remove('green', 'red')
        player.button.disabled = false
    }
}

// Desativa os botões de incrementar pontuação
function disableBtn() {
    for(let player of [player01, player02]) {
        player.button.disabled = true
    }
}

// Incrementa a pontuação
function addPontos(player, opponent) {
    if(!isGameOver)
        player.pontos += 1
        if(player.pontos === maxPontos) {
            isGameOver = true
            player.display.classList.add('green')
            opponent.display.classList.add('red')
            disableBtn()
        }
        player.display.textContent = player.pontos
}

// Event Listener dos players
player01.button.addEventListener("click", addPontos(player01, player02))
player02.button.addEventListener("click", addPontos(player02, player01))

// Reinicia o placar
document.querySelector('#restart').addEventListener("click", reset)

// Redefine o máximo de pontos possível
document.querySelector("#maxPontos").addEventListener("change", function() {
    maxPontos = parseInt(document.querySelector("#maxPontos").value)
    reset()
})