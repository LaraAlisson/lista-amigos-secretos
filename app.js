//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomesAmigos = [];

function adicionarAmigo() {

    //recebe o valor do campo input.
    const inputNome = document.querySelector('#amigo');

    if (inputNome) {
        //Retira os espaços do inicio e do fim da variavel.
        let nome = inputNome.value.trim();

        //Compara se a string não está vazia.
        if (nome === '') {
            alert('Por favor, preencha o campo nome para adicionar um item na lista.');
            return;
        }

        //verefica se o nome já existe na lista
        if(listaNomesAmigos.includes(nome)){
            alert('Este nome já existe na sua lista de amigos.');
            return;
        
        }
        //Adiciona o elemento no array
        listaNomesAmigos.push(nome);

        //Limpa o campo input 
        inputNome.value = '';
        console.log(listaNomesAmigos);
    } else {
        //console.error('Elemento input não encontrado');
    }
}

