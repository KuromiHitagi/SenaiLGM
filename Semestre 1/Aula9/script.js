class Aluno {
    constructor(userName, userCurso, userNota1, userNota2, userNota3, userMedia, userStatus, statusStyle) {
        this.nome = userName;
        this.curso = userCurso;
        this.nota1 = userNota1;
        this.nota2 = userNota2;
        this.nota3 = userNota3;
        this.media = userMedia;
        this.status = userStatus; 
        this.statusStyle = statusStyle; 
    }
}

let userLista = []
let statusStyle = ""

function cadastrar(event) {
    event.preventDefault()

    const userName = document.getElementById('nome').value
    const userCurso = document.getElementById('curso').value
    const userNota1 = parseInt(document.getElementById('nota1').value)
    const userNota2 = parseInt(document.getElementById('nota2').value)
    const userNota3 = parseInt(document.getElementById('nota3').value)
    let statusStyle = ""
    let userStatus = ""
    let userStatusMsg = ""

    const userMedia = (userNota1 + userNota2 + userNota3) / 3
    
    if(userMedia >= 6) {
        userStatus = "Aprovado"
        statusStyle = "background-color: green;"
        userStatusMsg = "Parabéns, continue assim!"
    } else if(userMedia >= 4) {
        userStatus = "Recuperação"
        statusStyle = "background-color: yellow;"
        userStatusMsg = "Eu entendo o quão difícil as coisas podem ser mas, eu acredito em você!"
    } else {
        userStatus = "Reprovado"
        statusStyle = "background-color: red;"
        userStatusMsg = "Rapaiz... Acho que alguém vai apanhar da mãe.."
    }

    const userNew = new Aluno(userName, userCurso, userNota1, userNota2, userNota3, userMedia, userStatus, statusStyle)

    userLista.push(userNew)

    alert(`Aluno ${userName} está ${userStatus}!`)
    alert(userStatusMsg)

    event.target.reset()
}

const table1 = document.getElementById('table1')
function exibir(event) {
    event.preventDefault()

    table1.innerHTML = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>Curso</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Media</th>
                <th>Status</th>
            </tr>
        </thead>

        <tbody id="tbody1">
            <tr>

            </tr>
        </tbody>
    `

    const tbody = document.getElementById('tbody1')

    tbody.innerHTML = "";

    for (let i in userLista) {
        tbody.innerHTML += `
            <tr>
                <td>${userLista[i].nome}</td>
                <td>${userLista[i].curso}</td>
                <td>${userLista[i].nota1}</td>
                <td>${userLista[i].nota2}</td>
                <td>${userLista[i].nota3}</td>
                <td>${userLista[i].media.toFixed(1)}</td>
                <td style="${userLista[i].statusStyle}">${userLista[i].status}</td>
            </tr>
        `
    }
}

function fechar(event) {
    event.preventDefault()

    table1.innerHTML = "";
}

function limpar(event) {

    if(userLista.length == 0) {
        alert("Você deve inserir algo antes de tentar apagar...")
        return
    }

    userLista = [];

    alert("Os usuários foram neutralizados!")
    exibir(event)
}