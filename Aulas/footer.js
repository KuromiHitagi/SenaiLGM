const footer = document.querySelector('footer');
footer.innerHTML = `
    <div id="contatoDiv">
        <h4>Entre em Contato</h4>
        <p>
            Email: <a href="mailto:darktails076@gmail.com">darktails076@gmail.com</a>
        </p>
        <p>
            Visite meu <a href="https://github.com/KuromiHitagi/" target="_blank">GitHub</a> e siga-me! <a class="github-icon" target="_blank"><img width="20px" height="20px" src="../src/Images/github-icon.png" alt="GitHub"/></a>
        </p>
    </div>
    <div class="footer-link">
        <a href="../Aulas/index.html">Ir para o Repositório de Aulas</a>
    </div>
    <div>
        <p>
            Made By: <br>Nicolas Freitas <br>16/02/2026
        </p>
        <button onclick="Modo()" id="btn-Modo">Modo <span id="modo"></span></button>
    </div>
`;

const btnModo = document.getElementById("btn-Modo")
const modo = document.getElementById("modo")
let contador = 0;

function verify() {
    if(contador === 0) {
        modo.innerText = "Escuro"
    } else if(contador === 1) {
        modo.innerText = "Claro"
    }
}

setInterval(() => {
    verify();
}, 500)

function Modo() {
    if(contador === 0) {
        footer.classList.remove("black")
        footer.classList.add("white")
    } else if(contador === 1) {
        footer.classList.remove("white")
        footer.classList.add("black")
    }

    contador = (contador === 0) ? 1 : 0;
}