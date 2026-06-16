if (typeof CryptoJS === "undefined") {
    const scriptCrypto = document.createElement('script');
    scriptCrypto.src = "https://cdnjs.cloudflare.com/ajax/libs/cryptojs/4.1.1/crypto-js.min.js";
    document.head.appendChild(scriptCrypto);
}

const CHAVE_SECRETA = "MinhaPizzariaSecreta123";

class Cliente {
    constructor(nome, email, senha, endereco, cpf, telefone) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}


function FormularioCliente() {
    const form = document.getElementById("form")

    form.innerHTML = `
                    <div class="title">
                        <h2>Cadastre-se</h2>
                    </div>

                    <div class="dados"> 

                        <div class="labelInput">
                            <label for="Cnome">Nome:</label>
                            
                            <div class="input">
                                <div class="tooltip">
                                    <p>Escreva o seu Nome</p>
                                </div>

                                <input id="Cnome" type="text" maxLength="45" size="50" required>
                            </div>
                        </div>
                        


                        <div class="labelInput">
                            <label for="Cemail">Email:</label>
                            
                            <div class="input">
                                <div class="tooltip">
                                    <p>Digite seu email:</p>
                                </div>

                                <input id="Cemail" type="email" maxLength="45" size="50" required>
                            </div>
                        </div>
                        
                        

                        <div class="labelInput">
                            
                            <label for="Cpassword">Senha:</label>
                            
                            <div class="input">
                                <div class="tooltip">
                                    <p>Envie sua senha:</p>
                                </div>

                                <input id="Cpassword" type="password" maxLength="45" size="50" required>
                                <button type="button" style="color: black; letter-spacing: normal; font-size: 14px;" id="btn-olho" onclick="alternarSenha()">Mostrar</button>
                            </div>
                        </div>

                        
                        
                        <div class="labelInput">
                            <label for="Cendereco">Endereço:</label>
                            
                            <div class="input">
                                <div class="tooltip">
                                    <p>Informe seu endereço:</p>
                                </div>

                                <input id="Cendereco" type="text" maxLength="45" size="50" required>
                            </div>
                        </div>



                        <div class="labelInput">
                            <label for="Ccpf">CPF:</label>
                            
                            <div class="input">
                                <div class="tooltip">
                                    <p>Coloque seu CPF sem pontos e traço:</p>
                                </div>

                                <input id="Ccpf" type="text" maxLength="11" size="50" required>
                            </div>
                        </div>



                        <div class="labelInput">
                            <label for="Ctelefone">Telefone:</label>
                            
                            <div class="input">
                                <div class="tooltip">
                                    <p>Insira seu Telefone (ex: 11999997777):</p>
                                </div>

                                <input id="Ctelefone" type="text" maxLength="11" size="50" required>
                            </div>
                        </div>
                        
                    </div>

                    <div class="Btns">

                        <div class="btnDiv C">
                            <p>Volta a página e apaga os dados</p>
                            <button class="Btn-Cancel" onclick="cancelar(event)" type="reset">Cancelar</button>
                        </div>
                        
                        <div class="btnDiv A">
                            <p>Avança a página e salva os dados</p>
                            <button class="Btn-Approve" onclick="cadastrarCliente(event)" type="button">Cadastrar</button>
                        </div>
                        
                    </div>
                    `
}

function cancelar(event) {
    event.target.reset()
}

function alternarSenha() {
    const campoSenha = document.getElementById("Cpassword");
    const botaoOlho = document.getElementById("btn-olho");

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        botaoOlho.textContent = "Esconder";
    } else {
        campoSenha.type = "password";
        botaoOlho.textContent = "Mostrar";
    }
}

/*Essa parte foi realizada com ajuda do Gemini*/
function cadastrarCliente(event) {
    event.preventDefault(); // Impede a página de recarregar
    console.log("1. Chamei a função cadastrarCliente!");

    try {
        // Pegando os valores dos seus inputs
        const nome = document.getElementById("Cnome").value;
        const email = document.getElementById("Cemail").value;
        const senha = document.getElementById("Cpassword").value;
        const endereco = document.getElementById("Cendereco").value;
        const cpf = document.getElementById("Ccpf").value;
        const telefone = document.getElementById("Ctelefone").value;

        console.log("2. Consegui pegar os valores dos inputs:", { nome, email });

        // Criando o objeto do cliente
        const novoCliente = new Cliente(nome, email, senha, endereco, cpf, telefone);
        const clienteString = JSON.stringify(novoCliente);
        console.log("3. Objeto transformado em String:", clienteString);

        // --- NOSSA CRIPTOGRAFIA CASEIRA (Sem dependências!) ---
        // btoa() transforma o texto normal em uma string embaralhada (Base64)
        // Usamos encodeURIComponent para não quebrar com acentos ou caracteres especiais
        const dadosCriptografados = btoa(encodeURIComponent(clienteString));
        console.log("4. Dados camuflados com sucesso:", dadosCriptografados);

        // Salvando no sessionStorage
        sessionStorage.setItem("usuario_sessao", dadosCriptografados);
        console.log("5. Salvo no sessionStorage!");

        alert("Cadastrado com sucesso!");
        window.location.href = "login.html"

    } catch (erro) {
        console.error("Ocorreu um erro durante o processo:", erro);
        alert("Erro no código: " + erro.message);
    }
}
/**/