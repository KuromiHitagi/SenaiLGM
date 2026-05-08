let pizzas = [
    {
        id: 1,
        nome: 'Margherita',
        preco: 45.5,
        imagem: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita.webp',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`
    },

    {
        id: 2,
        nome: 'Margherita',
        preco: 45.5,
        imagem: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita.webp',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`
    },

    {
        id: 3,
        nome: 'Margherita',
        preco: 45.5,
        imagem: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita.webp',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`
    },

    {
        id: 4,
        nome: 'Margherita',
        preco: 45.5,
        imagem: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita.webp',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`
    }
]

const swiperWrapper = document.getElementById('swiper-wrapper')
function gerarCard() {
    swiperWrapper.innerHTML = '';

    for(let i in pizzas) {
        swiperWrapper.innerHTML += `
            <div class="swiper-slide">
                <div class="card-pizza">
                    <div class="pizza-img-wrapper">
                        <img src="${pizzas[i].imagem}" width="30" alt="${pizzas[i].nome}">
                    </div>
                    <h3 class="fira-code">${pizzas[i].nome}.js</h3>
                    <p class="desc-log">Log: Sabor estável detectado...</p>
                    <button class="btn-detalhes" onclick="abrirModal()">Ver Detalhes</button>
                </div>
            </div>
        `
    }
}

gerarCard();