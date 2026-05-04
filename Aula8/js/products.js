let produtos = [
    {
        id: 1,
        nome: "Castanha do Pará", 
        preco: 45.90,
        imagem: "https://image.tuasaude.com/media/article/ti/ih/castanha-do-para_40499.jpg?width=686&height=487"
    },

    {
        id: 2,
        nome: "Amendoim",
        preco: 7.50,
        imagem: "https://royalcerealista.com.br/wp-content/uploads/2023/08/amendoim-hanner-granel.webp"
    },

    {
        id: 3,
        nome: "Cacau em Pó",
        preco: 22.50,
        imagem: "https://images.tcdn.com.br/img/img_prod/1002447/cacau_em_po_alcalino_socau_1kg_1762_1_df85f5614d4142fd52e9c87f41efb1ef.jpg"
    },

    {
        id: 4,
        nome: "Lichia",
        preco: 30.00,
        imagem: "https://www.jardineiro.net/wp-content/uploads/2018/05/Litchi_chinensis.jpg"
    },

    {
        id: 5,
        nome: "Matcha Puro",
        preco: 75.90,
        imagem: "https://cdn.awsli.com.br/2/2987/produto/183198726/f882f9bbb1.jpg"
    },

    {
        id: 6,
        nome: "Feijão com Farinha",
        preco: 13.58,
        imagem: "https://www.receiteria.com.br/wp-content/uploads/farofa-de-feijao-de-corda.jpeg"
    }
]


const carrossel = document.getElementById('track')

function gerarProdutos() {
    carrossel.innerHTML = '';

    for(let i = 0; i < produtos.length; i++) {
        carrossel.innerHTML += `
            <div class="card">

                <div class="cardImg">
                    <img src="${produtos[i].imagem}"
                        alt="${produtos[i].nome}">
                </div>

                <div class="cardCont">
                    <h3>${produtos[i].nome}</h3>

                    <div class="action">

                        <h3 class="cardPreco">R$${produtos[i].preco.toFixed(2)}</h3>
                        <button onclick="addCarrinho('${produtos[i].nome}', ${produtos[i].preco.toFixed(2)})">Comprar</button>
                        
                    </div>
                </div>

            </div>
        `
    }
}

gerarProdutos();