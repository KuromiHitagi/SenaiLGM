let carrinho = JSON.parse(localStorage.getItem("MeuItem")) || []

function addCarrinho(nome, preco) {
    let novoItem = {nome, preco}

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
    tabela.innerHTML = '';
    let valorTotal = 0;

    for(let i = 0; i < carrinho.length; i++) {
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
            <td style="text-align: right;"> <strong style="border: none;">Total:</strong></td>
            <td colspan="2" style="color: #3f3f3f !important; text-shadow: none !important;">R$${valorTotal.toFixed(2)}</td>
        </tr>
    `;
}
showCarrinho();

function comprar() {
    for(let i in carrinho) {
        carrinho.pop();
    }
}