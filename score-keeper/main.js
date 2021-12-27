const player01 = document.querySelector('#player01')
const player02 = document.querySelector('#player02')

const addScore01 = document.querySelector('#score-p01')
const addScore02 = document.querySelector('#score-p02')

const maxpoints = 0

document.querySelector('select').addEventListener('change', () => {
    maxpoints = document.querySelector('select').value
})

document.querySelector('#restart').addEventListener('click', () => {
    player01.value = "0"
    player02.value = "0"
})

