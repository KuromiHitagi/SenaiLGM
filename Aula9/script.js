class Aluno {
    constructor(userName, userIdade, userCurso, userNota, userStatus) {
        this.nome = userName;
        this.idade = userIdade;
        this.curso = userCurso;
        this.nota = userNota;
        this.status = userStatus; 
    }
}

let userLista = []

function cadastrar(event) {
    event.preventDefault()

    const userName = document.getElementById('nome').value
    const userIdade = document.getElementById('idade').value
    const userCurso = document.getElementById('curso').value
    const userNota = document.getElementById('nota').value
    let userStatus = ""
    
    if(userNota >= 7) {
        userStatus = "Aprovado"
    } else if(userNota >= 4) {
        userStatus = "Recuperação"
    } else {
        userStatus = "Reprovado"
    }

    const userNew = new Aluno(userName, userIdade, userCurso, userNota, userStatus)

    userLista.push(userNew)

    alert("Aluno " + userName + " cadastrado!")

    event.target.reset()
}

const table1 = document.getElementById('table1')
function exibir(event) {
    event.preventDefault()

    table1.innerHTML = `
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Curso</th>
                <th>Nota</th>
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
                <td>${userLista[i].idade}</td>
                <td>${userLista[i].curso}</td>
                <td>${userLista[i].nota}</td>
                <td>${userLista[i].status}</td>
            </tr>
        `
    }
}

function fechar(event) {
    event.preventDefault()

    table1.innerHTML = "";
}