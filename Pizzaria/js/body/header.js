const header = document.querySelector('header')

function gerarHeader() {
    const isLog = sessionStorage.getItem("isLog")

    const carrinho_icon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
    `;

    header.innerHTML = '';

    header.innerHTML =
        `
            <nav>
                <div class="logotipo">
                    <p>Forno&Código</p>
                </div>

                <div class="acoes">
                    <ul>
                        <li id="btn-carrinho"><a href="./carrinho.html">${carrinho_icon} Carrinho</a></li>
                        <li><a href="../index.html">Home</a></li>
                    </ul>
                    <div class="acoes-login">
                        <a href="./login.html">Login</a>
                        <a href="./login.html">
                            <img src="../../src/Images/user-icon.png" width="149" alt="user-icon" />
                        </a>
                    </div>
                </div>
            </nav>
        `;

    const btn_carrinho = document.getElementById("btn-carrinho")
    if (isLog) {
        btn_carrinho.classList.add("show")
    }
    else{
        btn_carrinho.classList.add("disapear")
    }
}
gerarHeader();