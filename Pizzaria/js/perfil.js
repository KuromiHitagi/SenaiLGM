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



function exibirDados() {
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const endereco = document.getElementById("endereco")
    const telefone = document.getElementById("telefone")

    if (sessionStorage.getItem("isLogAdmin") == "true") {
        nome.innerText = `admin`
        email.innerText = `admin`
        endereco.innerText = `admin`
        telefone.innerText = `admin`
    } else {
        const credenciais = obterUsuarioLogado()

        nome.innerText = `${credenciais.nome}`
        email.innerText = `${credenciais.email}`
        endereco.innerText = `${credenciais.endereco}`
        telefone.innerText = `${credenciais.telefone}`
    }
}
exibirDados()



function deslogar() {
    sessionStorage.setItem("isLog", false)
    sessionStorage.removeItem("isLogAdmin")
    sessionStorage.removeItem("usuario_sessao")
    window.location.reload();
}
