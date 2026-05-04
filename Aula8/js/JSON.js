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
                <td>${carrinho[i].nome}</td>
                <td>${carrinho[i].preco.toFixed(2)}</td>
                <td>
                    <button onclick="delCarrinho(${i})">X</button>
                </td>
            </tr>
        `
        valorTotal += carrinho[i].preco;
    }
    

    valor.innerHTML = `
        <tr>
            <td colspan="3" style="text-align: right;"> <strong>Total:</strong></td>
            <td colspan="2">R$${valorTotal.toFixed(2)}</td>
        </tr>
    `;
}
showCarrinho();