let campoNota;
let campoNome;
let campoCurso;
let campoBimestre;
let btnSalvar;
let btnApagar;
let Lista = [];

function CriarForm() {
    campoNome = document.getElementById("CampoNome");
    campoNota = document.getElementById("CampoNota");
    campoCurso = document.getElementById("CampoCurso");
    campoBimestre = document.getElementById("CampoBimestre");

    campoNome.innerHTML = `<input class="campoNome campo" type="text" id="NomeInput" placeholder="Digite o nome do aluno">`;
    campoNota.innerHTML = `<input class="campoNota campo" type="number" id="NotaInput" placeholder="Digite a nota do aluno" step="0.1" min="0" max="10">`;
    campoCurso.innerHTML = `
        <select id="CursoSelect" class="campoCurso">
            <option value="">Selecione o curso</option>
            <option value="Técnico em Desenvolvimento de Sistemas">Técnico em Desenvolvimento de Sistemas</option>
            <option value="Técnico em Informática">Técnico em Informática</option>
            <option value="Técnico em Redes de Computadores">Técnico em Redes de Computadores</option>
        </select>
    `;
    campoBimestre.innerHTML = `
    <select id="BimestreSelect" class="campoBimestre">
        <option value="">Selecione o bimestre</option>
        <option value="1º Bimestre">1º Bimestre</option>
        <option value="2º Bimestre">2º Bimestre</option>
        <option value="3º Bimestre">3º Bimestre</option>
        <option value="4º Bimestre">4º Bimestre</option>
    </select>`;

    btnSalvar = document.getElementById("CampoButtonSave");
    btnSalvar.innerHTML = `<button class="btnSalvar" onclick="SalvarPersona()">Salvar</button>`;

    btnApagar = document.getElementById("CampoButtonApagar");
    btnApagar.innerHTML = `<button class="btnApagar" onclick="LimparTabela()">Limpar Tabela</button>`;
}

function SalvarPersona() {
    let nomeDigitado = document.getElementById("NomeInput").value;
    let notaDigitada = document.getElementById("NotaInput").value;
    let cursoSelecionado = document.getElementById("CursoSelect").value;
    let bimestreSelecionado = document.getElementById("BimestreSelect").value;

    if (nomeDigitado === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if (notaDigitada === "") {
        alert("Por favor, insira uma nota.");
        return;
    }
    if (cursoSelecionado === "") {
        alert("Por favor, selecione um curso.");
        return;
    }
    if (bimestreSelecionado === "") {
        alert("Por favor, selecione um bimestre.");
        return;
    }

    Lista.push(notaDigitada);
    let mediaGeral = CalcularMediaGeral();

    // Aqui pegamos o corpo da tabela para adicionar a nova linha
    let tbody = document.querySelector("table tbody");

    console.log("AAAAAA", campoNota);
    console.log("AAAAAA", campoCurso);
    console.log("AAAAAA", campoNome);
    console.log("AAAAAA", campoBimestre);

    // Criamos uma nova linha (tr)
    let novaLinha = document.createElement("tr");

    // Preenchemos com dados fictícios + a nota que você digitou
    novaLinha.innerHTML = `
        <td>2026-02</td>
        <td>${nomeDigitado}</td>
        <td>${cursoSelecionado}</td>
        <td>${bimestreSelecionado}</td>
        <td>${parseFloat(notaDigitada).toFixed(1)}</td>
    `;

    // Adiciona a linha na tabela
    tbody.appendChild(novaLinha);

    // Limpa o campo de input após salvar
    document.getElementById("CampoNome").innerHTML = "";
    document.getElementById("CampoNota").innerHTML = "";
    document.getElementById("CampoCurso").innerHTML = "";
    document.getElementById("CampoBimestre").innerHTML = "";
    document.getElementById("CampoButtonSave").innerHTML = "";

    let tfoot = document.getElementById("mediaGeral");
    if (mediaGeral !== 6.7) {
        tfoot.innerHTML = `
            <td>${mediaGeral.toFixed(1)}</td>
        `;
    }
    else {
        tfoot.innerHTML = `
            <td><img src="../Images/RatoTwister.png" alt="RatoBacana" width="100" height="100"/>67 lol</td>
        `;
    }
}

function CalcularMediaGeral() {
    let media = 0;
    if (Lista.length === 0) {
        alert("Nenhuma nota foi inserida para calcular a média.");
        return;
    }

    Lista.forEach(nota => {
        media += parseFloat(nota);
    });

    return media / Lista.length;
}

function LimparTabela() {
    let tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";
}