function FormularioCliente() {
    const form = document.getElementById("form")

    form.innerHTML = `
                    <div class="title">
                        <h2>Cadastre-se</h2>
                    </div>


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
                            <p>Informe seu endereço:</p>
                            <label for="Cendereco">Endereço:</label>
                            <input id="Cendereco" type="text" maxLength="45" size="50" >
                        </div>



                        <div class="labelInput">
                            <p>Coloque seu CPF sem pontos e traço:</p>
                            <label for="Ccpf">CPF:</label>
                            <input id="Ccpf" type="text" maxLength="11" size="50" >
                        </div>



                        <div class="labelInput">
                            <p>Insira seu Telefone sem traço:</p>
                            <label for="Ctelefone">Telefone:</label>
                            <input id="Ctelefone" type="text" maxLength="11" size="50" >
                        </div>
                        
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
FormularioCliente();