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
        this.level = 1
        this.colors = {
            btnOne,
            btnTwo,
            btnThree,
            btnFour
        }
    }

    generarSecuencia() {
        this.secuence = new Array(10).fill(0).map(n => Math.floor(Math.random * 4))
    }
}

function startGame() {
    var game = new Game
}