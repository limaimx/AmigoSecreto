// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignaTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === ''){
        alert('Por favor ingresa un nombre');
        return;
    }
    amigos.push(nombreAmigo);

    let listaAmigosHtml = document.querySelector('#listaAmigos');
    listaAmigosHtml.innerHTML += `<li>${nombreAmigo}</li>`;

    limpiarCaja();

    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indice];
    
    asignaTextoElemento('#resultado', `El amigo sorteado es: ${amigoSorteado}`);
}