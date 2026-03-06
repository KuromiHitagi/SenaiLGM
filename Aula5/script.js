let container = document.querySelector("tbody")
let JogadorAtual = "X";

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
    const lista = document.querySelectorAll(".quadrado")
    lista.forEach((e) => {
        if (JogadorAtual === "X") {
            e.addEventListener("mouseenter", (el) => {
                el.target.style.backgroundColor = "rgb(0, 150, 230)";
            })
        } else if (JogadorAtual === "O") {
            e.addEventListener("mouseenter", (el) => {
                el.target.style.backgroundColor = "rgb(230, 80, 0)";
            })
        }

        e.addEventListener("mouseleave", (el) => {
            el.target.style.backgroundColor = "antiquewhite";
        })

        e.addEventListener("click", (evento) => {
            console.log("AHHH");

            if (evento.target.tagName == "TD" && evento.target.innerHTML === "") {
                if (JogadorAtual === "X") {
                    evento.target.innerText = "X"
                    JogadorAtual = "O"
                } else {
                    evento.target.innerText = "O"
                    JogadorAtual = "X"
                }
            }
        })
    })
}

// Inicializar a funções
gerarTabela()
clicarContainer()