const respostasCertas = {
    "q1": 3.92,
    "q2": "Brasilia",
    "q3": "Deodoro",
    "q4": "c6h12o6",
    "q5": "1888"
}
const gabarito = Object.values(respostasCertas)

function verify(id) {
    switch (id) {
        case 1:
            window.location.href = "./quizzesHTML/quiz1.html"
            break

        case 2:
            window.location.href = "./quiz2.html"
            break

        case 3:
            window.location.href = "./quiz3.html"
            break

        case 4:
            window.location.href = "./quiz4.html"
            break

        case 5:
            window.location.href = "./quiz5.html"
            break

        case 6:
            window.location.href = "../index.html"
            break
    }
}

function register(quizNum, resposta) {
    sessionStorage.setItem(quizNum, resposta)
    verify(quizNum + 1)
}

function mostrarResultados() {
    document.getElementById("butao").style.display = "none"
    const div = document.getElementById("show")
    div.style.display = "block"

    let arrayRespostas = []
    let acertos = 0

    alert("Teste concluído")

    for (let i = 1; i < 6; i++) {
        arrayRespostas.push(sessionStorage.getItem(i))
    }

    arrayRespostas.forEach((respostasUsuario, i) => {
        if (String(respostasUsuario) === String(gabarito[i])) {
            acertos++
        }
    })

    div.innerHTML = `
        <p>Suas respostas ${arrayRespostas.join(', ')}</p>
        <p>Respostas certas: ${gabarito.join(', ')}</p>
        <p>Quantidade de acertos: ${acertos}</p>
        <button onclick="sessionStorage.clear(); window.location.reload();">Reiniciar Quiz</button>
    `
}

window.onload = function () {
    if (sessionStorage.getItem("5")) {
        mostrarResultados();
    }
};