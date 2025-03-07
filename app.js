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
