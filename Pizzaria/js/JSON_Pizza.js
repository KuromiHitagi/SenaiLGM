class Pizza {

    constructor(id, nome, preco, imagem, ingredientes, titulos, descricoes) {

        this.id = id;

        this.nome = nome;

        this.preco = preco;

        this.imagem = imagem;

        this.ingredientes = ingredientes;

        this.titulos = titulos;

        this.descricoes = descricoes;

    }

}



let listaPizzas = [
    /*

        new Pizza(,
            "",
            ,
            "",
            "",
            {
                1: "",
                2: "",
                3: ""
            },
            {
                1: "",
                2: "",
                3: {
                    1: ",",
                    2: ",",
                    3: ",",
                    4: ";"
                }
            }
        )

    */



    new Pizza(1,
        "Margherita",
        45.5,
        "https://cdn.casaeculinaria.com/wp-content/uploads/2023/11/21140713/Pizza-marguerita.webp",
        `Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;`,
        {
            1: "Margherita Standard",
            2: "Margherita.js (A Clássica)",
            3: "Margherita v1.0"
        },
        {
            1: "A base de todo grande sistema. Molho de tomate artesanal, mussarela de alta qualidade e manjericão fresco. Simples, funcional e sem erros de execução.",
            2: "O Hello World das pizzas. Criada com uma arquitetura leve de massa italiana, camadas de queijo derretido e finalizada com folhas de manjericão orgânico. O clássico que nunca sai de moda (e nunca quebra o build).",
            3: {
                1: "Dependencies > *Massa de Pizza e Molho de Tomate.",
                2: "Mussarela, ",
                3: "Manjericão,",
                4: "Azeite;"
            }
        }
    ),



    new Pizza(2,
        "Calabresa",
        40.0,
        "https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_orig.jpg",
        "Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;",
        {
            1: "Calabresa Hotfix",
            2: "Calabresa.cpp (Robusta)",
            3: "sudo apt-get install calabresa"
        },
        {
            1: "A solução rápida e eficiente para qualquer nível de fome. Calabresa fatiada premium. Um clássico que roda liso em qualquer ambiente, sem necessidade de configuração.",
            2: "Para quem precisa de performance e sustância. Base sólida de molho de tomate, camada generosa de calabresa selecionada e um toque de orégano. Uma pizza de baixo nível (direto ao ponto) e alta satisfação.",
            3: {
                1: "Dependencies: > *Massa de Pizza e Molho de Tomate.",
                2: "Calabresa,",
                3: "Mussarela,",
                4: "Orégano;"
            }
        }
    ),



    new Pizza(3,
        "Mussarela",
        50.0,
        "https://superpizzapan.com.br/wp-content/uploads/2025/10/a-vida-e-massa.jpg",
        "Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;",
        {
            1: "Mussarela: Standard Lib",
            2: "Mussarela: Kernel",
            3: "CMD"
        },
        {
            1: "A biblioteca padrão que todo sistema precisa ter. Combinamos a cremosidade do queijo selecionado com um molho artesanal sobre uma massa de longa fermentação. Sem erros de execução.",
            2: "O núcleo estável de tudo o que fazemos. Selecionamos os melhores laticínios para um derretimento uniforme e o sabor autêntico de uma pizzaria italiana. Simples, impecável e sem bugs de sabor.",
            3: {
                1: "Dependencies: > *Massa de Pizza e Molho de Tomate.",
                2: "Mussarela,",
                3: "Manjericão,",
                4: "Azeite;"
            }
        }
    ),



    new Pizza(4,
        "Frango com Catupiry",
        50.0,
        "https://receitasdepesos.com.br/wp-content/uploads/2023/09/pizza-de-frango.jpg",
        "Massa de Pizza, Molho de Tomate, Mussarela, Manjericão, Azeite;",
        {
            1: "Frango_com_Catupiry.zip",
            2: "Frango_com_Catupiry.rar",
            3: "Frango_com_Catupiry.iso"
        },
        {
            1: "Uma receita que passou por vários testes até chegar na estabilidade perfeita. Combinamos frango desfiado premium com o framework original do Catupiry. É aquele que você sabe que sempre pode confiar para um jantar sem erros.",
            2: "Feita para quem gosta de um sistema aberto de sabores. Nossa base sólida de massa artesanal suporta uma camada generosa de frango temperado e requeijão cremoso.",
            3: {
                1: "Dependencies: > *Massa de Pizza e Molho de Tomate.",
                2: "Frango desfiado e Mussarela,",
                3: "Requeijão tipo Catupiry,",
                4: "Orégano e Azeitonas;"
            }
        }
    )
]

const swiperWrapperPizza = document.getElementById('swiper-pizza');
function gerarCardPizza() {
    if (!swiperWrapperPizza) return;
    swiperWrapperPizza.innerHTML = '';

    const carrinho_icon = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    `;

    for (let i in listaPizzas) {
        swiperWrapperPizza.innerHTML += `
            <div class="swiper-slide">
                <div class="card">
                    <div class="grow">
                        <img src="${listaPizzas[i].imagem}" alt="${listaPizzas[i].nome}">
                    </div>
                    <h3 class="grow">${listaPizzas[i].nome}</h3>
                    <p class="desc-log grow">Log: Sabor estável detectado...</p>

                    <div class="btns">
                        <button class="btn" onclick="gerarModalPizza(${listaPizzas[i].id})">Detalhes</button>
                        <button class="btn" onclick="adicionarCarrinho('${listaPizzas[i].nome}', ${listaPizzas[i].preco})">${carrinho_icon} Adicionar</button>
                    </div>
                </div>
            </div>
        `;
    }
}
gerarCardPizza();



const X = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
                <line x1="18" y1="6" x2="6" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
           </svg>`;

function gerarModalPizza(id) {
    const modalElement = document.getElementById('modal');
    if(!modalElement) return;
    void modalElement.offsetWidth;
    modalElement.classList.add('modal-enter');

    // id pode vir como string via onclick
    const pizza = listaPizzas.find(e => e.id === id);
    const error = 'Pizza não encontrada no servidor';

    if (!pizza) {
        console.error(error, { id, listaPizzasIds: listaPizzas.map(p=>p.id) });
        alert(error);
        return;
    }


    modalElement.innerHTML = `
        <div class="conteiner-window">
            <div class="conteiner-max">
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
                        <ul>
                            <li>${pizza.descricoes[3][1]}</li>
                            <li>${pizza.descricoes[3][2]}</li>
                            <li>${pizza.descricoes[3][3]}</li>
                            <li>${pizza.descricoes[3][4]}</li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    `;
}



function fecharModal() {
    const modalElement = document.getElementById('modal');
    modalElement.classList.remove('modal-enter');
    void modalElement.offsetWidth;
    modalElement.classList.add('exit');

    setTimeout(() => {
        modalElement.innerHTML = '';
        modalElement.classList.remove('exit');
    }, 400);
}