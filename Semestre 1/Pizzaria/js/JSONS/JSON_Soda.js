class Soda {
    constructor(id, nome, preco, imagem) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.imagem = imagem;
    }
}

let listaSoda = [
    new Soda(1,
        "Coca-cola 220ml",
        7.0,
        "https://acdn-us.mitiendanube.com/stores/001/043/122/products/3564_secundario-1f4e401c2eae39bf1117746283093531-1024-1024.webp"
    ),

    new Soda(2,
        "Pepsi 220ml",
        7.0,
        "https://previews.123rf.com/images/cookelma/cookelma1501/cookelma150100161/35584249-moscow-russia-april-4-2014-can-of-pepsi-cola-on-ice-pepsi-is-a-carbonated-soft-drink-that-is.jpg"
    ),

    new Soda(3,
        "Monster Pacific Punch",
        13.0,
        "../images/pacific-punch.png"
    ),

    new Soda(4,
        "Monster Mango Loco",
        13.0,
        "../images/mango-loco.png"
    )
];

const swiperWrapperSoda = document.getElementById('swiper-soda');
function gerarCardSoda() {
    if (!swiperWrapperSoda) return;

    swiperWrapperSoda.innerHTML = '';

    const carrinho_icon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
    `;

    for (let i in listaSoda) {
        swiperWrapperSoda.innerHTML += `
            <div class="swiper-slide">
                <div class="card">
                    <div class="grow">
                        <img class="soda-img" src="${listaSoda[i].imagem}" alt="${listaSoda[i].nome}">
                    </div>
                    <h3 class="grow">${listaSoda[i].nome}</h3>
                    <p class="desc-log grow">Log: Sabor estável detectado...</p>
                    <button class="btn" onclick="adicionarCarrinho('${listaSoda[i].nome}', ${listaSoda[i].preco})">${carrinho_icon} Adicionar</button>
                </div>
            </div>
        `;
    }
}
gerarCardSoda();