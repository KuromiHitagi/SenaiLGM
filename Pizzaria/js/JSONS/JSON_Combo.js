// 
//  ESTÁ COMENTADO PORQUE TENHO QUE FOCAR EM OUTRAS PARTES
//

// class Combo {
//     constructor(id, nome, preco, imagem, titulos, descricoes) {
//         this.id = id;
//         this.nome = nome;
//         this.preco = preco;
//         this.imagem = imagem;
//         this.titulos = titulos;
//         this.descricoes = descricoes;
//     }
// }



// let listaCombos = [
//     new Combo(1,
//         "Combo Individual",
//         42.0,
//         "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500",
//         {
//             1: "Perfeito para sua fome",
//             2: "Praticidade e Sabor",
//             3: "O que vem no combo:"
//         },
//         {
//             1: "A escolha ideal para quem quer uma refeição completa e rápida. Nossa pizza brotinho feita na hora com ingredientes selecionados.",
//             2: "Acompanha uma bebida gelada de 220ml à sua escolha. É a medida certa para matar a fome sozinho com muita qualidade.",
//             3: {
//                 1: "1 Pizza Brotinho (4 fatias)",
//                 2: "1 Refrigerante 220ml",
//                 3: "Embalagem reforçada",
//                 4: "Entrega prioritária"
//             }
//         }
//     ),

//     new Combo(2,
//         "Combo Dupla",
//         85.0,
//         "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500",
//         {
//             1: "Feito para compartilhar",
//             2: "O melhor custo-benefício",
//             3: "O que vem no combo:"
//         },
//         {
//             1: "Ideal para casais ou amigos. Duas pizzas médias de qualquer sabor tradicional com aquela massa fininha e crocante.",
//             2: "Neste combo a bebida de 600ml sai com desconto especial. É a combinação favorita dos nossos clientes.",
//             3: {
//                 1: "2 Pizzas Médias (6 fatias)",
//                 2: "1 Refrigerante 600ml",
//                 3: "Borda de requeijão grátis",
//                 4: "Sachês de ketchup e mostarda"
//             }
//         }
//     ),

//     new Combo(3,
//         "Combo Família",
//         130.0,
//         "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500",
//         {
//             1: "Alegria da Casa",
//             2: "Serve até 5 pessoas",
//             3: "O que vem no combo:"
//         },
//         {
//             1: "Reuna a família para uma noite especial com duas de nossas melhores pizzas grandes. Muita cobertura e sabor garantido.",
//             2: "Acompanha um refrigerante de 2 litros para ninguém ficar com sede. Economia real para o seu jantar.",
//             3: {
//                 1: "2 Pizzas Grandes (8 fatias)",
//                 2: "1 Refrigerante 2 Litros",
//                 3: "1 Pizza Doce Pequena",
//                 4: "Combo econômico"
//             }
//         }
//     ),

//     new Combo(4,
//         "Combo Super Galera",
//         175.0,
//         "https://images.unsplash.com/photo-1594000199163-247904ca6751?q=80&w=500",
//         {
//             1: "Modo Festa Ativado",
//             2: "Para os famintos",
//             3: "O que vem no combo:"
//         },
//         {
//             1: "O maior combo do nosso cardápio. Três pizzas gigantes com sabores variados para agradar todo mundo da festa.",
//             2: "Bebida em dobro e acompanhamentos extras. É abrir a caixa e começar a diversão com os amigos.",
//             3: {
//                 1: "3 Pizzas Gigantes (10 fatias)",
//                 2: "2 Refrigerantes 2 Litros",
//                 3: "2 Porções de Batata Frita",
//                 4: "Bordas recheadas inclusas"
//             }
//         }
//     )
// ];

// const swiperWrapperCombo = document.getElementById('swiper-combo');
// function gerarCardCombo() {
//     if (!swiperWrapperCombo) return;
//     swiperWrapperCombo.innerHTML = '';

//     const carrinho_icon = `
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;">
//         <circle cx="9" cy="21" r="1"></circle>
//         <circle cx="20" cy="21" r="1"></circle>
//         <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//     </svg>
//     `;

//     for (let i in listaCombos) {
//         swiperWrapperCombo.innerHTML += `
//             <div class="swiper-slide">
//                 <div class="card">
//                     <div class="grow">
//                         <img src="${listaCombos[i].imagem}" alt="${listaCombos[i].nome}">
//                     </div>
//                     <h3 class="grow">${listaCombos[i].nome}</h3>
//                     <p class="desc-log grow">Log: Sabor estável detectado...</p>

//                     <div class="btns">
//                         <button class="btn" onclick="gerarModalPizza(${listaCombos[i].id})">Detalhes</button>
//                         <button class="btn" onclick="adicionarCarrinho('Pizza ${listaCombos[i].nome}', ${listaCombos[i].preco})">${carrinho_icon} Adicionar</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
// }
// gerarCardCombo();



// const X = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
//                 <line x1="18" y1="6" x2="6" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
//                 <line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
//            </svg>`;

// function gerarModalCombo(id) {
//     const modalElement = document.getElementById('modal');
//     if(!modalElement) return;
//     void modalElement.offsetWidth;
//     modalElement.classList.add('modal-enter');

//     // id pode vir como string via onclick
//     const combo = listaCombos.find(e => e.id === id);
//     const error = 'Combo não encontrada no servidor';

//     if (!combo) {
//         console.error(error, { id, listaCombosIds: listaCombos.map(p=>p.id) });
//         alert(error);
//         return;
//     }


//     modalElement.innerHTML = `
//         <div class="conteiner-window">
//             <div class="conteiner-max">
//                 <div class="imgX-div">
//                     <div class="close-div">
//                         <button onclick="fecharModal()" class="btn-close">${X}</button>
//                     </div>
//                     <div class="img-div">
//                         <img src="${combo.imagem}"/>
//                         <p><span>R$</span>${combo.preco.toFixed(2)}</p>
//                     </div>
//                 </div>
//                 <div class="content-div">
//                     <article>
//                         <h3>${combo.titulos[1]}</h3>
//                         <p>${combo.descricoes[1]}</p>
//                     </article>
//                     <article>
//                         <h3>${combo.titulos[2]}</h3>
//                         <p>${combo.descricoes[2]}</p>
//                     </article>
//                     <article>
//                         <h3>${combo.titulos[3]}</h3>
//                         <ul>
//                             <li>${combo.descricoes[3][1]}</li>
//                             <li>${combo.descricoes[3][2]}</li>
//                             <li>${combo.descricoes[3][3]}</li>
//                             <li>${combo.descricoes[3][4]}</li>
//                         </ul>
//                     </article>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// function fecharModal() {
//     const modalElement = document.getElementById('modal');
//     modalElement.classList.remove('modal-enter');
//     void modalElement.offsetWidth;
//     modalElement.classList.add('exit');

//     setTimeout(() => {
//         modalElement.innerHTML = '';
//         modalElement.classList.remove('exit');
//     }, 400);
// }