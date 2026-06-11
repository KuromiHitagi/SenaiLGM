/*Parte realizada com ajuda do Gemini*/
function obterUsuarioLogado() {
    const dadosCriptografados = sessionStorage.getItem("usuario_sessao");

    if (!dadosCriptografados) return null;

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
    const emailName = document.getElementById("emailName").value;
    const senha = document.getElementById("password").value;

    if(emailName == "admin" && senha == "admin") {
        sessionStorage.setItem("isLog", true)
        sessionStorage.setItem("isLogAdmin", true)
        alert("You're Welcome Boss!")
        window.location.href = "../index.html";
    }
    
    event.preventDefault(); 
    const credenciais = obterUsuarioLogado()
    
    const trueEmail = credenciais.email
    const trueNome = credenciais.nome
    const trueSenha = credenciais.senha

    if((emailName == trueEmail || emailName == trueNome) && senha == trueSenha) {
        sessionStorage.setItem("isLog", true)
        alert("Logado com sucesso!")
        window.location.href = "../index.html";
    }
    else {
        sessionStorage.setItem("isLog", false)
        alert("Login mal sucedido!")
        window.location.reload();
    }
}

function deslogar() {
    sessionStorage.setItem("isLog", false)
    window.location.reload();
}