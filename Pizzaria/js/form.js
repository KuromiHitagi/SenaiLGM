function FormularioCliente1() {
    const form = document.getElementById("form")

    form.innerHTML = `
                    <div class="title">
                        <h2>Cadastro de Usuário: </h2>
                    </div>

                    <label class="Ccod" for="Ccod">Código</label>
                    <input class="Ccod" id="Ccod" type="text" size="10" value="1" readonly>

                    <br>

                    <label for="Cnome">Nome:</label>
                    <input id="Cnome" type="text" maxLength="45" size="50" >

                    <br>

                    <label for="Cemail">Email:</label>
                    <input id="Cemail" type="email" maxLength="45" size="50" >

                    <br>

                    <label for="Cpassword">Senha:</label>
                    <input id="Cpassword" type="password" maxLength="45" size="50" >

                    <br>

                    <div class="dados">
                    
                        <div class="divisao1">

                            <div class="labelInput">
                        
                                <label for="Cidade">Idade:</label>
                                <input id="Cidade" type="number" min="18" max="100" >
                            
                            </div>
                            

                            <div class="labelInput">
                            
                                <label for="Cdata">Data de Nascimento:</label>
                                <input id="Cdata" type="date" >
                            
                            </div>
                            

                            <div class="labelInput">

                                <label for="Cfoto">Foto:</label>
                                <input id="Cfoto" type="file" accept="image/*"> 
                            
                                </div>
                            
                        </div>

                        <div class="divisao2">

                            <label for="Ccor">Cor:</label>
                            <input id="Ccor" type="color">

                            <br>

                            <label for="Cportugues">portugues:</label>
                            <input id="Cportugues" type="checkbox">

                            <label for="Cmatematica">matematica:</label>
                            <input id="Cmatematica" type="checkbox">
                            
                            <br>

                            <label for="Cmasc">Masculino:</label>
                            <input id="Cmasc" name="sexo" type="radio">

                            <label for="Cfemi">Feminino:</label>
                            <input id="Cfemi"name="sexo" type="radio">

                        </div>

                    </div>

                    <div class="Btn">
                        
                        <button class="Btn-Cancel" onclick="Cancelar()" type="reset">Cancelar</button>
                        <button class="Btn-Approve" onclick="Prosseguir()" type="button">Prosseguir</button>
                        
                    </div>
                    `
}

function FormularioCliente2() {
    const form = document.getElementById("form")

    form.innerHTML = `
                    <h2>Cadastro de Carro: </h2>

                    <label for="Ccod">Código</label>
                    <input id="Ccod" type="text" size="10" value="2" readonly>

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
                        
                        <button onclick="Cancelar()" type="reset">Cancelar</button>
                        <button onclick="Prosseguir()" type="submit">Prosseguir</button>
                    
                    </div>
                    `
}