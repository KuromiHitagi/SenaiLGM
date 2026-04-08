let contador = 0;
let listaUsuarios = [];

/*
Função para salvar os dados básicos do usuário
*/
function SalvarNoSession(objetoUsuario) {
    // Transformamos o objeto em String para o SessionStorage aceitar
    const dadosEmString = JSON.stringify(objetoUsuario);
    sessionStorage.setItem("usuarioTemporario", dadosEmString);
}


function DeleteNoSession() {
    sessionStorage.clear()
}

/*
Função para carregar os dados básicos do usuário
*/
function CarregarDados() {
    const dadosSalvos = sessionStorage.getItem("usuarioTemporario");

    if(dadosSalvos) {
        const usuario = JSON.parse(dadosSalvos);

        if(document.getElementById("Cnome")) {
            document.getElementById("Ccod").value = usuario.cod || "";
            document.getElementById("Cnome").value = usuario.nome || "";
            document.getElementById("Cemail").value = usuario.email || "";
        }
    }
}

/*
Função para avançar o formulário
*/
function Prosseguir() {
    // 1. Captura os dados da tela
    const novoUsuario = {
        cod: document.getElementById("Ccod").value,
        nome: document.getElementById("Cnome").value,
        email: document.getElementById("Cemail").value,
    };

    // 2. Adiciona à lista na memória (Array)
    listaUsuarios.push(novoUsuario);
    console.log("Lista Atualizada:", listaUsuarios);

    // 3. Salva apenas o usuário atual no SessionStorage (Rascunho)
    SalvarNoSession(novoUsuario);

    // 4. Avança a tela
    contador += 1;
    Decidir();
}

/*
Função para retroceder o formulário
*/
function Cancelar() {
    contador -= 1;
    
    if (contador < 0) {
        contador = 0;
        DeleteNoSession();
    }
    
    Decidir();
}

/*
Função para decidir se Prossegue ou Retrocede o formulário
*/
function Decidir() {
    if (contador == 0) {
        imagePizza();
        FormularioCliente1();
        CarregarDados();
    } else if (contador == 1) {
        FormularioCliente2();
    } 
}