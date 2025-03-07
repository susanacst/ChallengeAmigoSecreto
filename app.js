let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre para continuar.");
    } else {
        amigos.push(nombre);
        actualizarLista();
        alert("Nombre agregado a la lista.");
        document.getElementById("amigo").value = "";
    }
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length <= 0) {
        alert("Primero ingresa al menos dos nombres.");
    }
    else if (amigos.length == 1) {
        alert("No hay suficientes nombres en la lista para comenzar el sorteo.");
    }
    else {
        let indiceRandom = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceRandom];

        let resultadoAmigoSorteo = document.getElementById("resultado");
        resultadoAmigoSorteo.innerHTML = `<li>${amigoSorteado} es el amigo secreto!</li>`;

    }
}