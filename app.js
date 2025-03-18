let amigos = [];
let sorteados = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    nomeAmigo = nomeAmigo.charAt(0).toUpperCase() + nomeAmigo.slice(1).toLowerCase();

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibir nome sorteado
    resultado.innerHTML = `<li>Seu amigo(a) secreto é? ${amigoSorteado} 🎉</li>`;

    // Adicionar o amigo sorteado à lista de sorteados
    sorteados.push(amigoSorteado);

    // Remover o amigo sorteado da lista original
    amigos.splice(indiceSorteado, 1);

    // Aguardar 3 segundos antes de limpar a tela e mostrar a próxima mensagem
    setTimeout(() => {
        resultado.innerHTML = '<li>Carregando para o próximo sorteio...</li>';

        // Aguardar 4 segundos para que a próxima pessoa possa sortear
        setTimeout(() => {
            // Após o intervalo, a próxima pessoa pode sortear
            resultado.innerHTML = '';
        }, 1500);
    }, 1500);
}

// Adicionar evento para o campo de input
document.getElementById('amigo').addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada foi "Enter" (código 13)
    if (event.key === 'Enter') {
        adicionarAmigo(); // Chama a função para adicionar o amigo
    }
});
