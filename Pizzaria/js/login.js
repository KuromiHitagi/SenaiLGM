function logar(nome, senha) {
    if((nome != null && senha != null) || (nome != '' && senha != '')) {
        sessionStorage.setItem("isLog", true)
        alert("Logado com sucesso!")
        window.location.reload();
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