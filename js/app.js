let i = 0;

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos').textContent;
    

    if(i == 0) {
    listaAmigos = listaAmigos + nomeAmigo;
    let arrayAmigos = listaAmigos.split(', ');
    document.getElementById('lista-amigos').textContent = listaAmigos;
    document.getElementById('nome-amigo').value = '';
    console.log(arrayAmigos);
    i++;
    } else {
    listaAmigos = listaAmigos + ', ' + nomeAmigo;
    arrayAmigos = listaAmigos.split(', ');
    document.getElementById('lista-amigos').textContent = listaAmigos;
    document.getElementById('nome-amigo').value = '';
    console.log(arrayAmigos);
    i++;
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    listaAmigos = document.getElementById('lista-amigos').textContent;
    arrayAmigos = listaAmigos.split(', ');
    embaralhar(arrayAmigos);
    console.log(arrayAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let j = 0; arrayAmigos.length > j; j++) {
        if(j !== (arrayAmigos.length - 1)) {
        listaSorteio.innerHTML = listaSorteio.innerHTML + arrayAmigos[j] + '-->' + arrayAmigos[j + 1] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + arrayAmigos[j] + '-->' + arrayAmigos[0];
        }
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    arrayAmigos = [];
    i = 0;
}