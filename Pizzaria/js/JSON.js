let pizzas = [

    /*
    id: ,
        nome: '',
        preco: ,
        imagem: '',
        ingredientes: ``,
        titulos: {
            1: "",
            2: "",
            3: ""
        },
        descricoes: {
            1: "",
            2: "",
            3: {
                1: "Dependencies: > * Núcleo: Massa de Pizza e Molho de Tomate",
                2: "",
                3: "",
                4: ""
            }
        }
    */

    {
        id: 1,
        nome: 'Margherita',
        preco: 45.5,
        imagem: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita.webp',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`,
        titulos: {
            1: "Margherita Standard",
            2: "Margherita.js (A Clássica)",
            3: "Margherita v1.0"
        },
        descricoes: {
            1: "A base de todo grande sistema. Molho de tomate artesanal, muçarela de alta qualidade e manjericão fresco. Simples, funcional e sem erros de execução.",
            2: "O Hello World das pizzas. Criada com uma arquitetura leve de massa italiana, camadas de queijo derretido e finalizada com folhas de manjericão orgânico. O clássico que nunca sai de moda (e nunca quebra o build).",
            3: {
                1: "Dependencies: > * Núcleo: Massa de Pizza e Molho de Tomate. ",
                2: "Mussarela, ",
                3: "Manjericão,",
                4: "Azeite;"
            }
        }
    },

    {
        id: 2,
        nome: 'Calabresa',
        preco: 40.0,
        imagem: 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_orig.jpg',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`,
        titulos: {
            1: "Calabresa Hotfix",
            2: "Calabresa.cpp (Robusta)",
            3: "sudo apt-get install calabresa"
        },
        descricoes: {
            1: "A solução rápida e eficiente para qualquer nível de fome. Calabresa fatiada premium. Um clássico que roda liso em qualquer ambiente, sem necessidade de configuração.",
            2: "Para quem precisa de performance e sustância. Base sólida de molho de tomate, camada generosa de calabresa selecionada e um toque de orégano. Uma pizza de baixo nível (direto ao ponto) e alta satisfação.",
            3: {
                1: "Dependencies: > * Núcleo: Massa de Pizza e Molho de Tomate",
                2: "Calabresa,",
                3: "Mussarela,",
                4: "Orégano;"
            }
        }
    },

    {
        id: 3,
        nome: 'Mussarela',
        preco: 50.0,
        imagem: 'https://superpizzapan.com.br/wp-content/uploads/2025/10/a-vida-e-massa.jpg',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`,
        titulos: {
            1: "Mussarela: Standard Lib",
            2: "Mussarela: Kernel",
            3: "CMD"
        },
        descricoes: {
            1: "A biblioteca padrão que todo sistema precisa ter. Combinamos a cremosidade do queijo selecionado com um molho artesanal sobre uma massa de longa fermentação. Sem erros de execução.",
            2: "O núcleo estável de tudo o que fazemos. Selecionamos os melhores laticínios para um derretimento uniforme e o sabor autêntico de uma pizzaria italiana. Simples, impecável e sem bugs de sabor.",
            3: {
                1: "Dependencies: > * Núcleo: Massa de Pizza e Molho de Tomate",
                2: "",
                3: "",
                4: ""
            }
        }
    },

    {
        id: 4,
        nome: 'Frango com Catupiry',
        preco: 50.0,
        imagem: 'https://receitasdepesos.com.br/wp-content/uploads/2023/09/pizza-de-frango.jpg',
        ingredientes: `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`,
        titulos: {
            1: "Frango_com_Catupiry.zip",
            2: "Frango_com_Catupiry.rar",
            3: "Frango_com_Catupiry.iso"
        },
        descricoes: {
            1: "",
            2: "",
            3: {
                1: "Dependencies: > * Núcleo: Massa de Pizza e Molho de Tomate",
                2: "",
                3: "",
                4: ""
            }
        }
    }
]

const swiperWrapper = document.getElementById('swiper-wrapper')
function gerarCard() {
    swiperWrapper.innerHTML = '';

    for (let i in pizzas) {
        swiperWrapper.innerHTML += `
            <div class="swiper-slide">
                <div class="card-pizza">
                    <div class="pizza-img-wrapper grow">
                        <img src="${pizzas[i].imagem}" alt="${pizzas[i].nome}">
                    </div>
                    <h3 class="grow">${pizzas[i].nome}</h3>
                    <p class="desc-log grow">Log: Sabor estável detectado...</p>
                    <button class="btn-detalhes" onclick="abrirModal(${pizzas[i].id})">Ver Detalhes</button>
                </div>
            </div>
        `
    }
}
gerarCard();

const X = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="18" y1="6" x2="6" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>`;
const modal = document.getElementById('modal')
const body = document.querySelector('body')
function abrirModal(id) {
    alert("Abrindo log de sabor...");
    body.classList.add('occult')

    switch (id) {
        case 1:
            gerarModal(1)
            break;

        case 2:
            gerarModal(2)
            break;

        case 3:
            gerarModal(3)
            break;

        case 4:
            gerarModal(4)
            break;

        default:
            return;
    }
}

function gerarModal(id) {
    const pizza = pizzas.find(e => e.id === id);
    const error = 'Pizza não encontrada no servidor'

    if (!pizza) {
        console.error(error)
        alert(error)
        return
    }

    modal.innerHTML = `
        <div class="conteiner-window">

            <div class="container-max">

                <div class="imgX-div">

                    <div class="close-div">
                        <button onclick="fecharModal()" class="btn-close">${X}</button>
                    </div>
                    
                    <div class="img-div">
                        <img src="${pizza.imagem}"/>
                        <p><span>R$</span>${pizza.preco.toFixed(2)}</p>
                    </div>

                </div>

                <div class="content-div">

                    <article>
                        <h3>${pizza.titulos[1]}</h3>
                        <p>${pizza.descricoes[1]}</p>
                    </article>

                    <article>
                        <h3>${pizza.titulos[2]}</h3>
                        <p>${pizza.descricoes[2]}</p>
                    </article>

                    <article>
                        <h3>${pizza.titulos[3]}</h3>
                        <p>${pizza.descricoes[3][1]}</p>
                        <p>${pizza.descricoes[3][2]}</p>
                        <p>${pizza.descricoes[3][3]}</p>
                        <p>${pizza.descricoes[3][4]}</p>
                    </article>
                </div>

            </div>

        </div>
    `;
}

function fecharModal() {
    modal.innerHTML = '';
    body.classList.remove('occult')
    location.reload();
}