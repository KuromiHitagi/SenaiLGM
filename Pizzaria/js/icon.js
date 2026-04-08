const divImage = document.getElementById("image");

function imagePizza() {
    const divImage = document.getElementById("image");
    divImage.innerHTML = `
                        <div class="tooltip">
                            <p>Bem-Vindo à Pizzaria Forno&Código</p>
                        </div>
                        <img class="imgPizza" src="../src/Images/pizza-icon.png" alt="Icon"/>
                        `;
}
imagePizza();