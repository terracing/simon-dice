const buttonStart = document.getElementById('buttonStart')

const btnOne = document.getElementById('one')
const btnTwo = document.getElementById('two')
const btnThree = document.getElementById('three')
const btnFour = document.getElementById('four')


class Game {
    constructor() {
        this.inicializar()
        this.generateSecuence()
        this.nextLevel()
        this.secuence
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

    generateSecuence() {
        this.secuence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.lightSecuence()
    }

    transformSecuence(secuenceNumber) {
        switch(secuenceNumber) {
            case 0 : 
                return 'btnOne'
            case 1:
                return 'btnTwo'
            case 2:
                return 'btnThree'
            case 3:
                return 'btnFour'
        }
    }

    lightColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => this.darkenColor(color), 350)
    }

    darkenColor(color) {
        this.colors[color].classList.remove('light')
    }

    lightSecuence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformSecuence(this.secuence[i])
            setTimeout(() => this.lightColor(color), 1000 * i)
        }
    }
}

function startGame() {
    var game = new Game
}