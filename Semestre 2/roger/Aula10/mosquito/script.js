let telaX;
let telaY;
let dificuldade;
let qtdMosquitos;
let velocidadeMosquito;
let tempo;
let intervalMosquito;
let intervalTempo;
let vidas;

const start = document.getElementById('start')
const gameplay = document.getElementById('gameplay')
const end = document.getElementById('end')

async function config() {
    telaX = window.innerWidth
    telaY = window.innerHeight
    dificuldade = document.querySelector('select').value

    if (dificuldade == 'easy') {
        qtdMosquitos = 5
        tempo = 20
        velocidadeMosquito = 4000
        vidas = 5
    }
    if (dificuldade == 'medium') {
        qtdMosquitos = 10
        tempo = 30
        velocidadeMosquito = 3000
        vidas = 4
    }
    if (dificuldade == 'hard') {
        qtdMosquitos = 15
        tempo = 30
        velocidadeMosquito = 2000
        vidas = 3
    }
    if (dificuldade == 'insane') {
        qtdMosquitos = 50
        tempo = 55
        velocidadeMosquito = 1100
        vidas = 2
    }

    loadLife()

    // console.log(telaX)
    // console.log(telaY)
    // console.log(dificuldade)
}

function loadFly() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        vidas -= 1
        loadLife()

        if (vidas <= 0) {
            encerrarJogo(false)
            return
        }
    }

    let mosquito = document.createElement('img');
    mosquito.src = './image/ghost_fly.png'
    mosquito.style.position = 'absolute'
    mosquito.style.zIndex = '999'
    mosquito.id = 'mosquito'
    mosquito.width = Math.floor(Math.random() * (32 - 24 + 1)) + 24;
    mosquito.height = mosquito.width;

    let posicaoX = Math.floor(Math.random() * telaX) - 90
    let posicaoY = Math.floor(Math.random() * telaY) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    mosquito.style.left = `${posicaoX}px`;
    mosquito.style.top = `${posicaoY}px`;

    mosquito.onclick = function () {
        this.remove()
        qtdMosquitos -= 1

        if (qtdMosquitos <= 0) encerrarJogo(true)
    }

    document.querySelector('main').append(mosquito)
}

function loadLife() {
    const lifeContainer = document.getElementById('life');
    if (!lifeContainer) return;

    lifeContainer.innerHTML = '';
    for (let i = 0; i < vidas; i++) {
        lifeContainer.innerHTML += `<img src="./image/coracao_cheio.png" alt="Vida"/>`;
    }
}

function encerrarJogo(vitoria) {
    clearInterval(intervalTempo)
    clearInterval(intervalMosquito)

    if (document.getElementById('mosquito')) document.getElementById('mosquito').remove()

    gameplay.classList.add('fadeOut')
    gameplay.classList.remove('active', 'fadeIn')
    end.classList.add('active', 'fadeIn')

    if (vitoria) {
        document.getElementById('lose').classList.remove('active', 'fadeIn')
        document.getElementById('win').classList.add('active', 'fadeIn')
    }
    else {
        document.getElementById('win').classList.remove('active', 'fadeIn')
        document.getElementById('lose').classList.add('active', 'fadeIn')
    }
}

async function startGame() {
    try {
        start.classList.add('fadeOut')
        start.classList.remove('active')
        gameplay.classList.add('active', 'fadeIn')
        gameplay.style.backgroundColor = '#000'
        document.getElementById('prepare').classList.add('active')

        await config()

        setTimeout(() => {
            document.getElementById('prepare').classList.add('fadeOut')
            document.getElementById('prepare').classList.remove('active')
            gameplay.style.backgroundColor = 'transparent'

            document.getElementById('tempo').innerText = `${tempo}`

            loadFly()

            intervalTempo = setInterval(() => {
                tempo -= 1
                document.getElementById('tempo').innerText = `${tempo}`

                if (tempo <= 0) encerrarJogo(false)
            }, 1000)

            setInterval(() => {
                loadFly()
            }, velocidadeMosquito)
        }, 2500)

    } catch (error) {
        console.error("Erro ao configurar o jogo: " + error)
    }
}
