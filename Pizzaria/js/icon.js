const divImage = document.getElementById("image");

function imagePizza() {
    const divImage = document.getElementById("image");
    divImage.innerHTML = `
                        <div class="tooltip">
                            <p>Bem-Vindo(a) à Pizzaria Forno&Código</p>
                        </div>
                        <img class="imgPizza" src="./images/pizza-icon.png" alt="Pizza-icon"/>
                        `;
}

imagePizza();