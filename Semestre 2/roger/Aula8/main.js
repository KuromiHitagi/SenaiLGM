import * as API from './script.js';

// Variável no escopo global do módulo para armazenar o dia selecionado
let listaAtual = [];

// 1. CAPTURA DOS BOTÕES (Fora do Change para não rebicar escopo)
const btnListar = document.getElementById("listar");
const btnInserir = document.getElementById("inserir");
const btnEditar = document.getElementById("editar");
const btnExcluir = document.getElementById("excluir");

// 2. ATRIBUIÇÃO DOS EVENTOS (Lêem a variável 'listaAtual' atualizada)
btnListar.addEventListener("click", () => {
    API.listar(listaAtual);
});

btnInserir.addEventListener("click", () => {
    const novaTarefa = prompt("Digite a nova tarefa:");
    if (novaTarefa) {
        API.inserir(listaAtual, novaTarefa);
    }
});

btnEditar.addEventListener("click", () => {
    // Exemplo chamando sua função de editar
    if (typeof editar === "function") API.editar(listaAtual);
});

btnExcluir.addEventListener("click", () => {
    // Exemplo chamando sua função de excluir
    if (typeof excluir === "function") API.excluir(listaAtual);
});

// 3. EVENTO DO SELETOR DE DIAS
document.getElementById("Selector").addEventListener("change", async (event) => {
    const valor = event.target.value;
    const titulo = document.getElementById("diaSemana");

    const dias = {
        "1": "Segunda-Feira",
        "2": "Terça-Feira",
        "3": "Quarta-Feira",
        "4": "Quinta-Feira",
        "5": "Sexta-Feira"
    };

    if (valor === "Selecione") {
        titulo.innerText = "";
        listaAtual = [];
        listar(listaAtual);
        return;
    }

    const index = parseInt(valor) - 1;
    titulo.innerText = dias[valor];

    // Atualiza a variável global que os botões leem
    listaAtual = await API.carregarDados(index);
    API.listar(listaAtual);
});