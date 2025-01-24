//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
const listaDeAmigos = [];

function adicionarAmigo() {

    const ulElement = getElemento('resultado')
    ulElement.innerHTML = '';

    //recebe o valor do campo input.
    const inputNome = getElemento('amigo');

    //Verifica se o elemento de input foi encontrado.
    if (!inputNome) {
        console.error('Elemento input não encotrado');
        return;
    }
    //Retira os espaços do início e do fim da variavel.
    let nome = inputNome.value.trim();

    //Verifica  se o nome está vazio.
    if (nome === '') {
        alert('Por favor, preencha o campo nome para adicionar um item na lista.');
        inputNome.value = '';
        return;
    }

    //Verifica se o nome já existe na lista
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
}//Fim adicionar amigo



function renderizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');

    //limpa a lista antes de atualizar
    listaAmigosElement.innerHTML = '';

    //Adiciona cada amigo à lista
    listaDeAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigosElement.appendChild(li);
    });

}//Fim renderizarListaAmigo

//Função chamada pelo button sortear amigo
function sortearAmigo() {

    const nomeSorteado = listaDeAmigos.length ? `O amigo secreto sorteado é: ${listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)] }`:
        "Não é possível realizar o sorteio. A lista de nomes está vazia.";
    // alert(` ${nomeSorteado}`);

    exibirNomeSorteado(nomeSorteado);
}//Fim sortearAmigo


//Exibe o nome do amigo sorteado.
function exibirNomeSorteado(nomeSorteado) {
    const ulElement = getElemento('resultado');
    if (ulElement) {
        ulElement.innerHTML =  nomeSorteado;
    }
    listaDeAmigos.length = 0;
    renderizarListaAmigos();
}


//Busca elemento html
function getElemento(id) {
    return document.getElementById(id);
}