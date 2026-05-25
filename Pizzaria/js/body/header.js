const header = document.querySelector('header')

function gerarHeader() {
    let isLog = sessionStorage.getItem("isLog") === "true"
    const defaultImg = "../../src/Images/user-icon.png"
    const logadoImg = "../images/imagem_Logado.jpg"

    const carrinho_icon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
    `;

    if(isLog == true) {
        header.innerHTML = '';
        
        header.innerHTML =
        `
            <nav>
                <div class="logotipo">
                    <p>Forno&Código</p>
                </div>

                <div class="acoes">
                    <ul>
                        <li><a href="./carrinho.html">${carrinho_icon}Carrinho</a></li>
                        <li><a href="../index.html">Home</a></li>
                    </ul>
                    <div class="acoes-login">
                        <a href="./login.html">
                            <img src="${logadoImg}" width="130" style="border-radius: 50%; margin-top: 10px;" alt="user-icon" />
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
    else {
        header.innerHTML = '';

        header.innerHTML =
        `
            <nav>
                <div class="logotipo">
                    <p>Forno&Código</p>
                </div>

                <div class="acoes">
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                    </ul>
                    <div class="acoes-login">
                        <a href="./login.html">Login</a>
                        <a href="./login.html">
                            <img src="${defaultImg}" width="149" alt="user-icon" />
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}
gerarHeader();