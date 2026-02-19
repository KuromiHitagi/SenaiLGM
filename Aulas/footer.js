const footer = document.createElement('footer');
footer.innerHTML = `
    <div>
        <h4>Entre em Contato</h4>
        <p>
            Email: <a href="#">contato@techsolucoes.com.br</a>
        </p>
        <p>
            Visite nosso <a href="#" target="_blank">LinkedIn</a> e siga-nos! <img width="20px" height="20px" src="../Images/icon-linkedin.png" alt="LinkedIn"/>
        </p>
        <p>
            <a href="#">Preencha nosso formulário de contato</a>
        </p>
    </div>
    <div class="footer-link">
        <a href="../Aulas/index.html">Ir para o Repositório de Aulas</a>
    </div>
    <div>
        <p>
            Made By: <br>Nicolas Freitas <br>16/02/2026
        </p>
    </div>
`;
document.body.appendChild(footer);