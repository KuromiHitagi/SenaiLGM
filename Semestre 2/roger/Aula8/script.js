export async function carregarDados(id) {
    try {
        const resp = await fetch('http://localhost:5500/senailgm/Semestre%202/roger/Aula8/JSON.json')
        const data = await resp.json()
        return data[id];
    } catch (error) {
        console.error("ERROR: ", error)
    }
}

export function listar(lista) {
    const afazeres = document.getElementById("afazeres")
    afazeres.innerHTML = "";

    if (!lista) return;

    lista.forEach((e, i) => {
        afazeres.innerHTML += `
            <li>${i + 1} - ${e.Tarefa}</li>
        `
    });
}

export function inserir(lista, tarefa) {
    try {
        lista.push({ "Tarefa": tarefa })
        alert("Dados inseridos com sucesso!")
        listar(lista)
        return lista;
    } catch (error) {
        alert("ERROR: visite o console para mais detalhes.")
        console.log("ERROR: ", error)
    }
}

export function editar(lista) {

}

export function excluir(lista) {
    
}