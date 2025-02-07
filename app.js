//Essa aplicação permite aos usuários inserir nomes de amigos em um lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".
let amigos = [];

function limparCampo(){
    novoAmigo = document.querySelector('input');
    novoAmigo.value ='';
}

function adicionarAmigo(){
    let novoAmigo = document.querySelector('input').value;
    if (novoAmigo == ''){
        alert('Insira um nome válido!');
        return;
    }
    if (amigos.includes(novoAmigo)){
        alert('Esse nome já está na lista de amigos!');
        limparCampo();
    } else {
        amigos.push(novoAmigo);
        imprimirLista();
        limparCampo();
    }
}

function imprimirLista(){
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    amigos.forEach((novoAmigo, index) => {
        const li = document.createElement('li');
        li.textContent = novoAmigo;
        ul.appendChild(li);
    });
}

function sortearAmigo(){
    document.getElementsByClassName("button-draw");
    if (amigos.length == 0){
        alert('A lista de amigos está vazia! Favor inserir os nomes!');
        limparCampo();
    } else {
        let amigoEscolhido = Math.floor(Math.random() * amigos.length);
        const ul = document.getElementById('resultado');
        ul.innerHTML = 'O amigo sorteado é ' + amigos[amigoEscolhido];
    }
}