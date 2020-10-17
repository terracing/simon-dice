const buttonStart = document.getElementById('buttonStart')

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')

const LAST_LEVEL = 2


class Game {
    constructor() {
        this.secuence
        this.inicializar()
        this.generateSecuence()
        setTimeout(() => this.nextLevel(), 500)

    }

    inicializar() {
        this.colorSelect = this.colorSelect.bind(this)
        this.nextLevel = this.nextLevel.bind(this)
        this.toggleBtnStart()
        this.level = 1
        this.colors = {
            one,
            two,
            three,
            four
        }
    }

    toggleBtnStart() {
        if (buttonStart.classList.contains('hide')) {
            buttonStart.classList.remove('hide')
        } else {
            buttonStart.classList.add('hide')
        }
    }

    generateSecuence() {
        this.secuence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.sublevel = 0
        this.lightSecuence()
        this.addClickEvent()
    }

    transformSecuence(secuenceNumber) {
        switch (secuenceNumber) {
            case 0:
                return 'one'
            case 1:
                return 'two'
            case 2:
                return 'three'
            case 3:
                return 'four'
        }
    }

    transformColorNumber(color) {
        switch (color) {
            case 'one':
                return 0
            case 'two':
                return 1
            case 'three':
                return 2
            case 'four':
                return 3
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

    addClickEvent() {
        this.colors.one.addEventListener('click', this.colorSelect)
        this.colors.two.addEventListener('click', this.colorSelect)
        this.colors.three.addEventListener('click', this.colorSelect)
        this.colors.four.addEventListener('click', this.colorSelect)
    }

    deleteEventsClick() {
        this.colors.one.removeEventListener('click', this.colorSelect)
        this.colors.two.removeEventListener('click', this.colorSelect)
        this.colors.three.removeEventListener('click', this.colorSelect)
        this.colors.four.removeEventListener('click', this.colorSelect)
    }

    colorSelect(ev) {
        const nameColor = ev.target.dataset.color
        const numberColor = this.transformColorNumber(nameColor)
        this.lightColor(nameColor)
        console.log(numberColor + ' -- ' + this.secuence[this.sublevel])
        if (numberColor === this.secuence[this.sublevel]) {
            this.sublevel++
            if (this.sublevel == this.level) {
                this.level++
                this.deleteEventsClick()
                if (this.level === (LAST_LEVEL + 1)) {
                    this.winGame()
                } else {
                    setTimeout(() => this.nextLevel(), 2000)
                }
            }
        } else {
            this.lostGame()
        }
    }

    winGame() {
        swal('Simon dice', 'Felicitaciones, ganaste el juego', 'success')
            .then(() => this.inicializar())
    }

    lostGame() {
        swal('Simon dice', 'Lo lamentamos, perdiste el juego', 'error')
            .then(() => {
                this.deleteEventsClick()
                this.inicializar()
            })
    }
}

function startGame() {
    var game = new Game
}