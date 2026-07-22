const header = document.querySelector('header')
const headerIndex = document.getElementById('header') || null

function gerarHeader() {
    let isLog = sessionStorage.getItem("isLog") === "true"
    let defaultImg = "../../src/Images/user-icon.png"
    let btnEstiloCarrinho = "display: none;"
    let btnLogin = "<p>Login</p>"
    let alert = `onclick="alert('Você deve estar logado para acessar o carrinho!')"`
    let rotaCarrinho = ""
    let rotaCardapio = "./menu.html"
    let rotaHome = "../index.html"
    let rotaLogin = "./login.html"

    if (isLog) {
        defaultImg = "../images/imagem_Logado.jpg"
        btnEstiloCarrinho = "display: inline-block;"
        btnLogin = ""
        alert = null
        rotaCarrinho = "./carrinho.html"
    }

    const carrinho_icon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
    `;

    header.innerHTML = '';

    if (headerIndex != null) {
        defaultImg = "../src/Images/user-icon.png"
        rotaHome = "#start"
        rotaCardapio = "./html/menu.html"
        rotaLogin = "./html/login.html"

        if (isLog) {
            defaultImg = "./images/imagem_Logado.jpg"
            rotaCarrinho = "./html/carrinho.html"
        }
    }

    header.innerHTML =
        `
            <nav>
                <div class="logotipo">
                    <p>Forno&Código</p>
                </div>

                <div class="acoes">
                    <ul>
                        <li><a style="${btnEstiloCarrinho}" ${alert} href="${rotaCarrinho}">${carrinho_icon}Carrinho</a></li>
                        <li><a href="${rotaCardapio}">Cardápio</a></li>
                        <li><a href="${rotaHome}">Home</a></li>
                    </ul>
                    <div class="acoes-login">
                        <a href="${rotaLogin}">
                            ${btnLogin}
                            <img src="${defaultImg}" width="130" style="border-radius: 50%; margin-top: 10px;" alt="user-icon" />
                        </a>
                    </div>
                </div>
            </nav>
        `;

}
gerarHeader();