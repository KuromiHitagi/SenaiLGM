const xValues = ["Spawn", "Máscara", "Invencível", "Ben 10", "Supercão"];
const yValues = xValues.map(() => Math.floor(Math.random() * 100) + 1);
const barColors = ["#222222", "#2e8b57", "#ffffff", "#2878d0", "#d93636"];
const chaveHistorico = "historicoValues";
const historico = JSON.parse(localStorage.getItem(chaveHistorico) || "[]");
const lineCanvas = document.getElementById("grafico03");

if (!Array.isArray(historico)) {
    throw new Error("Os dados salvos do histórico não estão em um formato válido.");
}

historico.push({
    geracao: `Geração ${historico.length + 1}`,
    valores: [...yValues]
});

localStorage.setItem(chaveHistorico, JSON.stringify(historico));

const canvas = document.getElementById("grafico01");

if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('Não foi possível encontrar o canvas "grafico01".');
}

new Chart(canvas, {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            label: "Pontuação",
            data: yValues,
            backgroundColor: barColors,
            borderColor: ["#222222", "#246b43", "#777777", "#1e5da3", "#b52b2b"],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 100
                },
                scaleLabel: {
                    display: true,
                    labelString: "Pontuação"
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

const pieCanvas = document.getElementById("grafico02");

if (!(pieCanvas instanceof HTMLCanvasElement)) {
    throw new Error('Não foi possível encontrar o canvas "grafico02".');
}

if (!(lineCanvas instanceof HTMLCanvasElement)) {
    throw new Error('Não foi possível encontrar o canvas "grafico03".');
}

new Chart(pieCanvas, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            label: "Pontuação",
            data: yValues,
            backgroundColor: barColors,
            borderColor: ["#222222", "#246b43", "#777777", "#1e5da3", "#b52b2b"],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: "bottom"
        }
    }
});

new Chart(lineCanvas, {
    type: "line",
    data: {
        labels: historico.map(registro => registro.geracao),
        datasets: xValues.map((personagem, index) => ({
            label: personagem,
            data: historico.map(registro => registro.valores[index]),
            borderColor: ["#222222", "#2e8b57", "#777777", "#2878d0", "#d93636"][index],
            fill: false
        }))
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }]
        }
    }
})
