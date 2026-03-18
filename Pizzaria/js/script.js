let contador = 0;

function Prosseguir() {
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