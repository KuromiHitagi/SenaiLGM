const footer = document.getElementById("footer");

function avisar(num) {
    if (num == 0) {
        alert("Erro 404: Whatsapp não encontrado no servidor. (Este é um projeto de demonstração!)");
    } else if (num == 1) {
        alert("Erro 404: Instagram não encontrado no servidor. (Este é um projeto de demonstração!)");
    } else if (num == 2) {
        alert("Erro 404: Endereço não encontrado no servidor. (Este é um projeto de demonstração!)");
    } else if (num == 3) {
        alert("Este é o horário de funcionamento..");
    }
}

function gerarFooter() {
    footer.innerHTML = `
        <div class="social-media grow">
            <div class="whatsapp grow">
                <a href="#footer" onclick="avisar(0)">
                    <img id="socialImg" src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"
                        alt="whatsapp-icon">
                </a>

                <p>(11) 4002-8922</p>
            </div>

            <div class="instagram grow">
                <a href="#footer" onclick="avisar(1)">
                    <img id="socialImg" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                        alt="instagram-icon">
                </a>

                <p>@forno&codigo</p>
            </div>
            </div>

            <div class="address">
                <div class="content grow">
                    <a href="#footer" onclick="avisar(2)">
                        <p>endereço/ rua: 8gb ram - número: 128</p>
                    </a>
                </div>

                <div class="copyright grow">
                    <p>© 2026 Forno&Código - Feito com muita cafeína por [Nicolas Freitas]. </p>
                    <p>// Todos os direitos reservados.</p>
                </div>
            </div>

            <div class="time grow">
                <a href="#footer" onclick="avisar(3)">
                    <p>uptime: 18:00 - 23:59</p>
                </a>
        </div>
                    `;
}
gerarFooter();