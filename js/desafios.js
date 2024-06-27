let minhaLista = [1, 2, 3];
let outraLista = [4, 5, 6];
let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);
novaLista.pop();
console.log(novaLista);

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

embaralhar(novaLista);
console.log(novaLista);

function removerDuplicatas(array) {
    //console.log([...new Set(array)]);
    console.log(Array.from(new Set(array)));
}
let listaComDuplicatas = [1, 1, 2, 3, 3, 4];
removerDuplicatas(listaComDuplicatas);