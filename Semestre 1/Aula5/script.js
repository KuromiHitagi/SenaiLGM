let container = document.querySelector("tbody")
let btnArea = document.getElementById("btn");
let btnReset = document.getElementById("btnReset")
let JogadorAtual = "X";
let EspacoDisponivel = 9;

function Teste() {
    btnArea.innerHTML += `<button class="btnGerar" onclick="Renderizar()">Gerar</button>
                          <button class="btnReset" id="btnReset" onclick="ResetarGame()">Resetar</button>`
}

function Renderizar() {
    gerarTabela();
    clicarContainer();
    ExibirJogadorAtual();
}

function gerarTabela() {
    //Limpar o container se for chamada novamente
    container.innerHTML = ""

    for (let i = 0; i < 3; i++) {
        let linha = document.createElement("tr");

        for (let j = 0; j < 3; j++) {
            let coluna = document.createElement("td");
            coluna.classList.add("quadrado")

            coluna.dataset.row = i;
            coluna.dataset.column = j;

            linha.appendChild(coluna);
        }

        container.appendChild(linha);
    }
}

function clicarContainer() {
    let btnResetElement = document.getElementById("btnReset")
    if (btnResetElement) {
        btnReset.classList.add("btnReset2")
    }
    const lista = document.querySelectorAll(".quadrado")

    lista.forEach((e) => {

        e.addEventListener("mouseenter", (el) => {
            if (JogadorAtual === "X") {
                el.target.style.backgroundColor = "rgb(0, 150, 230)";
            } else {
                el.target.style.backgroundColor = "rgb(230, 80, 0)";
            }
        })

        e.addEventListener("mouseleave", (el) => {
            el.target.style.backgroundColor = "antiquewhite";
        })

        e.addEventListener("click", () => {
            if (EspacoDisponivel > 0) {
                console.log("O jogador que clicou foi: ");

                if (e.tagName == "TD" && e.innerHTML === "") {
                    e.innerText = JogadorAtual;

                    JogadorAtual = (JogadorAtual == "X") ? "O" : "X";
                    EspacoDisponivel--;

                    console.log("Espaços restantes: " + EspacoDisponivel)
                    console.log("")

                    if (EspacoDisponivel == 0) {
                        setTimeout(() => alert("Bah kkkk reseta aí po"), 50)
                    }

                    ExibirJogadorAtual();
                }
            }
        })
    })
}

function ExibirJogadorAtual() {
    let DivTurno = document.getElementById("Turno");
    DivTurno.innerHTML = `<p>Jogador Atual: <span class="${JogadorAtual}">${JogadorAtual}</span></p>`;
}

function ResetarGame() {
    console.clear()
    console.log("Jogo Resetado")
    console.log("")

    JogadorAtual = "X";
    EspacoDisponivel = 9;
    const lista = document.querySelectorAll(".quadrado")

    lista.forEach((e) => {
        if (e.tagName == "TD") {
            e.innerText = ""
        }
    })
}

//Inicializar função Mãe
Teste();