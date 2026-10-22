const ruaBox = document.getElementById("ruaBox")
const bairroBox = document.getElementById("bairroBox")
const cidadeBox = document.getElementById("cidadeBox")
const estadoBox = document.getElementById("estadoBox")

async function searchCEP() {
    const inputCEP = document.getElementById("inputCEP").value.replace(/\D/)

    try {
        const resp = await fetch(`https://viacep.com.br/ws/${inputCEP}/json/`)
        const dados = await resp.json()

        if (dados.erro) {
            alert("CEP não encontrado!")
            cleanForm()
            return;
        }

        showData(dados)
    } catch (error) {
        console.error("Erro ao puxar CEP: ", error)
        alert("Não possível buscar o CEP, verifique sua conexão")
    }

    showData()
    alert('funcao n funfa ainda ')
}

function cleanForm() {
    ruaBox.innerText = ''
    bairroBox.innerText = ''
    cidadeBox.innerText = ''
    estadoBox.innerText = ''
}

function showData(dados) {
    const dataBox = document.querySelectorAll(".dataBox")

    dataBox.forEach(box => {
        box.classList.add("active")
    })

    ruaBox.innerText = `${dados.logradouro}`
    bairroBox.innerText = `${dados.bairro}`
    cidadeBox.innerText = `${dados.localidade}`
    estadoBox.innerText = `${dados.uf}`
}