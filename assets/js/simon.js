const buttonStart = document.getElementById('buttonStart')

const btnOne = document.getElementById('one')
const btnTwo = document.getElementById('two')
const btnThree = document.getElementById('three')
const btnFour = document.getElementById('four')


class Game {
    constructor() {
        this.inicializar()
    }

    inicializar() {
        buttonStart.classList.add('hide')
    }
}

function startGame() {
    var game = new Game
}