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
                            <p>Escreva seu nome:</p>
                            <label for="Cnome">Nome:</label>
                            
                            <div class="input">
                                <input id="Cnome" type="text" maxLength="45" size="50" required>
                            </div>
                        </div>
                        


                        <div class="labelInput">
                            <p>Digite seu email:</p>
                            <label for="Cemail">Email:</label>
                            
                            <div class="input">
                                <input id="Cemail" type="email" maxLength="45" size="50" required>
                            </div>
                        </div>
                        
                        

                        <div class="labelInput">
                            <p>Envie sua senha:</p>
                            <label for="Cpassword">Senha:</label>
                            
                            <div class="input">
                                <input id="Cpassword" type="password" maxLength="45" size="50" required>
                            </div>
                        </div>

                        
                        
                        <div class="labelInput">
                            <p>Informe seu endereço:</p>
                            <label for="Cendereco">Endereço:</label>
                            
                            <div class="input">
                                <input id="Cendereco" type="text" maxLength="45" size="50" required>
                            </div>
                        </div>



                        <div class="labelInput">
                            <p>Coloque seu CPF <br> sem pontos e traço:</p>
                            <label for="Ccpf">CPF:</label>
                            
                            <div class="input">
                                <input id="Ccpf" type="text" maxLength="11" size="50" required>
                            </div>
                        </div>



                        <div class="labelInput">
                            <p>Insira seu Telefone <br> sem traço:</p>
                            <label for="Ctelefone">Telefone:</label>
                            
                            <div class="input">
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