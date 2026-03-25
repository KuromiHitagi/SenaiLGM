let contador = 0;
let User = [];

function Prosseguir() {
    const newUser = {
        cod: document.getElementById("Ccod").ariaValueMax,
        nome: document.getElementById("Cnome").ariaValueMax,
        email: document.getElementById("Cemail").ariaValueMax,
        senha: document.getElementById("Csenha").ariaValueMax,
    }

    User.push(newUser);
    console.log("Lista Atualizada" + User);

    contador += 1;
    Decidir();
}

function Cancelar() {
    contador -= 1;
    if (contador < 0) contador = 0;
    Decidir();
}

function Decidir() {
    if (contador == 0) {
        FormularioCliente1();
    } else if (contador == 1) {
        FormularioCliente2();
    } 
}
Decidir();