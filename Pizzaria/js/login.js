/*Parte realizada com ajuda do Gemini*/
function obterUsuarioLogado() {
    const dadosCriptografados = sessionStorage.getItem("usuario_sessao");

    if (!dadosCriptografados) return;

    try {
        // atob() faz o processo inverso, desembaralhando a string
        const textoOriginal = decodeURIComponent(atob(dadosCriptografados));

        // Transforma de volta em objeto JavaScript
        return JSON.parse(textoOriginal);
    } catch (error) {
        console.error("Erro ao ler os dados do usuário:", error);
        return null;
    }
}
/**/

function logar(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const senha = document.getElementById("password").value;

    console.log("passo 1 confere")

    if ((email == "admin" || name == "admin") && senha == "admin") {
        sessionStorage.setItem("isLog", true)
        sessionStorage.setItem("isLogAdmin", true)
        alert("You're Welcome Boss!")
        window.location.href = "../index.html";
        return;
    }

    const credenciais = obterUsuarioLogado()

    if (!credenciais) {
        sessionStorage.setItem("isLog", false)
        alert("Credenciais inválidas ou usuário inexistente!")
        return;
    }

    const trueEmail = credenciais.email || "Usuário sem email cadastrado"
    const trueNome = credenciais.nome || "Usuário sem nome cadastrado"
    const trueSenha = credenciais.senha || "Usuário sem senha cadastrada"

    if ((email == trueEmail || name == trueNome) && senha == trueSenha) {
        sessionStorage.setItem("isLog", true)
        alert("Logado com sucesso!")
        window.location.href = "../index.html";
    }
    else {
        sessionStorage.setItem("isLog", false)
        alert("Credenciais inválidas ou usuário inexistente!")
        window.location.reload();
    }
}

function deslogar() {
    sessionStorage.setItem("isLog", false)
    window.location.reload();
}

function alternarSenha() {
    const campoSenha = document.getElementById("password");
    const botaoOlho = document.getElementById("btn-olho");

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        botaoOlho.textContent = "Esconder";
    } else {
        campoSenha.type = "password";
        botaoOlho.textContent = "Mostrar";
    }
}