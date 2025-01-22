//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
const listaDeAmigos = [];

function adicionarAmigo() {

    //recebe o valor do campo input.
    const inputNome = document.querySelector('#amigo');

    //Verifica se o elemento de input foi encontrado.
    if (!inputNome) {
        console.error('Elemento input não encotrado');
        return;
    }
    //Retira os espaços do inicio e do fim da variavel.
    let nome = inputNome.value.trim();

    //Verefica  se o nome está vazio.
    if (nome === '') {
        alert('Por favor, preencha o campo nome para adicionar um item na lista.');
        inputNome.value = '';
        return;
    }

    //verefica se o nome já existe na lista
    if (listaDeAmigos.includes(nome)) {
        alert('Este nome já existe na sua lista de amigos.');
        inputNome.value = '';
        return;
    }

    //Adiciona o elemento no array
    listaDeAmigos.push(nome);

    //Atualiza a lista exibida na tela
    renderizarListaAmigos();

    //Limpa o campo input 
    inputNome.value = '';
    console.log(listaDeAmigos);
}


function renderizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');

    //limpa a lista antes de atualizar
    listaAmigosElement.innerHTML = '';

    //Adiciona cada amigo à lista
    listaDeAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        document.getElementById('listaAmigos').appendChild(li);
    });
    
}
