let carrinho = JSON.parse(localStorage.getItem("MeuItem")) || [];

function adicionarCarrinho(nome, preco) {
    const isLog = sessionStorage.getItem("isLog");

    if (!isLog) {
        alert("Você precisa estar logado para comprar algo!")
        return
    }

    let novoItem = { nome, preco }

    carrinho.push(novoItem);
    localStorage.setItem("MeuItem", JSON.stringify(carrinho))

    alert(`${nome} foi adicionado ao carrinho!`)
}

function delCarrinho(id) {
    carrinho.splice(id, 1)

    localStorage.setItem("MeuItem", JSON.stringify(carrinho))
    showCarrinho();
}


const tabela = document.getElementById('cont')
const valor = document.getElementById('valor-total')
function showCarrinho() {
    if (!tabela || !valor) return;

    tabela.innerHTML = '';
    let valorTotal = 0;

    for (let i = 0; i < carrinho.length; i++) {
        tabela.innerHTML += `
            <tr>
                <td style="text-align: left;">${carrinho[i].nome}</td>
                <td style="text-align: center;">${carrinho[i].preco.toFixed(2)}</td>
                <td style="text-align: center;">
                    <button onclick="delCarrinho(${i})">X</button>
                </td>
            </tr>
        `
        valorTotal += carrinho[i].preco;
    }

    valor.innerHTML = `
        <tr>
            <td style="width: 50%; text-align: right;"> <strong style="border: none;">Total:</strong></td>
            <td colspan="2" style="color: #ebebeb !important; text-shadow: none !important;">R$${valorTotal.toFixed(2)}</td>
        </tr>
    `;
}
showCarrinho();

function decision(num) {
    if (num == 1) {
        carrinho.length = 0

        showCarrinho();
    }
    else if (num == 2) {
        if (carrinho && carrinho.length > 0) {
            carrinho.length = 0

            alert("Compra realizada com sucesso!")
            showCarrinho();
        }
        else {
            alert("Você precisa ter algo no carrinho para comprar!")
        }
    }
}