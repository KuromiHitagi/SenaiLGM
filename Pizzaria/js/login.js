function logar(nome, senha) {
    if((nome != null && senha != null) || (nome != '' && senha != '')) {
        sessionStorage.setItem("isLog", true)
        alert("Logado com sucesso!")
    } 
    else {
        sessionStorage.setItem("isLog", false)
        alert("Login mal sucedido!")
    }
}