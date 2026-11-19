
const campologradouro = document.getElementById('logradouro');
const campobairro = document.getElementById('bairro');
const campocidade = document.getElementById('cidade');
const campouf = document.getElementById('uf');
let requisicaoCidades = 0;

async function buscar1() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    limparformulario();

    if (cep.length !== 8) {
        alert('CEP inválido');
        return;
    }

    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Falha na consulta do CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            alert('CEP não encontrado');
            return;
        }

        campologradouro.value = dados.logradouro || '';
        campobairro.value = dados.bairro || '';
        campocidade.value = dados.localidade || '';
        campouf.value = dados.uf || '';
    } catch (erro) {
        console.error('Erro ao buscar CEP:', erro);
        alert('Erro ao buscar CEP');
    }
}

async function buscar2() {
    const uf = document.getElementById('estadoinsira').value;
    const cidade = document.getElementById('cidadeinsira').value.trim();
    const logradouro = document.getElementById('logradouroinsira').value.trim();
    const campoCepResultado = document.getElementById('cepResultado');
    campoCepResultado.value = '';

    if (!uf || !cidade || !logradouro) {
        alert('Preencha o estado, a cidade e o logradouro.');
        return;
    }

    try {
        const url =
            `https://viacep.com.br/ws/${uf}/` +
            `${encodeURIComponent(cidade)}/` +
            `${encodeURIComponent(logradouro)}/json/`;
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Falha na consulta: ${resposta.status}`);
        }

        const enderecos = await resposta.json();

        if (!Array.isArray(enderecos) || enderecos.length === 0) {
            alert('Nenhum endereço encontrado.');
            return;
        }

        campoCepResultado.value = enderecos
            .map(endereco => endereco.cep)
            .filter(Boolean)
            .join(', ');
    } catch (erro) {
        console.error('Erro ao buscar endereço:', erro);
        alert('Erro ao buscar endereço.');
    }
}

async function carregarEstados() {
    const campoEstado = document.getElementById('estadoinsira');
    campoEstado.disabled = true;

    try {
        const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Falha ao carregar estados: ${resposta.status}`);
        }

        const dados = await resposta.json();

        dados
            .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
            .forEach(dado => {
                const option = document.createElement('option');
                option.value = dado.sigla;
                option.textContent = `${dado.sigla} - ${dado.nome}`;
                campoEstado.appendChild(option);
            });
    } catch (erro) {
        console.error('Erro ao carregar estados:', erro);
        alert('Não foi possível carregar a lista de estados.');
    } finally {
        campoEstado.disabled = false;
    }
}

async function carregarCidades() {
    const campoEstado = document.getElementById('estadoinsira');
    const campoCidade = document.getElementById('cidadeinsira');
    const estadoSelecionado = campoEstado.value;
    const requisicaoAtual = ++requisicaoCidades;

    campoCidade.replaceChildren(new Option('Selecione uma cidade', ''));
    campoCidade.disabled = true;

    if (!estadoSelecionado) {
        return;
    }

    try {
        const url = `https://brasilapi.com.br/api/ibge/municipios/v1/${estadoSelecionado}`;
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`A API respondeu com HTTP ${resposta.status}.`);
        }

        const dados = await resposta.json();

        if (requisicaoAtual !== requisicaoCidades) {
            return;
        }

        if (!Array.isArray(dados)) {
            throw new Error('A resposta da API não contém uma lista de cidades.');
        }

        dados
            .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
            .forEach(dado => {
                const option = document.createElement('option');
                option.value = dado.nome;
                option.textContent = dado.nome;
                campoCidade.appendChild(option);
            });

        campoCidade.disabled = false;
    } catch (erro) {
        if (requisicaoAtual !== requisicaoCidades) {
            return;
        }

        console.error('Erro ao carregar cidades:', erro);
        const detalhe = erro instanceof Error ? erro.message : String(erro);
        alert(`Não foi possível carregar a lista de cidades.\nDetalhe: ${detalhe}`);
    }
}

carregarEstados();


function limparformulario() {
    campologradouro.value = '';
    campobairro.value = '';
    campocidade.value = '';
    campouf.value = '';
}
