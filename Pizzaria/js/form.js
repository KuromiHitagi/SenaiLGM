function FormularioCliente1() {
    const form = document.getElementById("form")

    form.innerHTML = `
                    <div class="title">
                        <h2>Cadastro de Usuário: </h2>
                    </div>

                    <label class="Ccod" for="Ccod">Código</label>
                    <input class="Ccod" id="Ccod" type="text" size="10" value="1" readonly>

                    <br>

                    <div class="dados"> 
                        <div class="labelInput">
                            <p>Escreva seu nome:</p>
                            <label for="Cnome">Nome:</label>
                            <input id="Cnome" type="text" maxLength="45" size="50" >
                        </div>
                        
                        

                        <div class="labelInput">
                            <p>Digite seu email:</p>
                            <label for="Cemail">Email:</label>
                            <input id="Cemail" type="email" maxLength="45" size="50" >
                        </div>
                        
                        

                        <div class="labelInput">
                            <p>Envie sua senha:</p>
                            <label for="Cpassword">Senha:</label>
                            <input id="Cpassword" type="password" maxLength="45" size="50" >
                        </div>

                        
                        
                        <div class="labelInput">
                            <p>Confirme a senha enviada:</p>
                            <label for="CconfirmPassword">Confirmar Senha:</label>
                            <input id="CconfirmPassword" type="password" maxLength="45" size="50" >
                        </div>

                        <br>
                    </div>

                    <div class="Btns">

                        <div class="btnDiv C">
                            <p>Volta a página e apaga os dados</p>
                            <button class="Btn-Cancel" onclick="Cancelar()" type="reset">Cancelar</button>
                        </div>
                        
                        <div class="btnDiv A">
                            <p>Avança a página e salva os dados</p>
                            <button class="Btn-Approve" onclick="Prosseguir()" type="button">Prosseguir</button>
                        </div>
                        
                    </div>
                    `
}
FormularioCliente1();

function FormularioCliente2() {
    const form = document.getElementById("form")

    form.innerHTML = `
                    <div class="title">
                        <h2>Cadastro de Sla: </h2>
                    </div>

                    <label class="Ccod" for="Ccod">Código</label>
                    <input class="Ccod" id="Ccod" type="text" size="10" value="2" readonly>

                    <br>

                    <label for="Cnome">Nome do carro:</label>
                    <input id="Cnome" type="text" maxLength="45" size="50" required>

                    <br>

                    <select>
                        <option value="audi">Audi</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="fiat">Fiat</option>
                        <option value="volkswagen">Volkswagen</option>
                    </select>
                    
                    <br>

                    <div class="Btn">
                        
                        <button class="Btn-Cancel" onclick="Cancelar()" type="reset">Cancelar</button>
                        <button class="Btn-Approve" onclick="Prosseguir()" type="button">Prosseguir</button>
                    
                    </div>
                    `
}