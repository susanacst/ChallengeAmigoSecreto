let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Ingresa un nombre para continuar.");
    }
    else {
        amigos.push(nombre);
        alert("Nombre agregado a la lista.");
        document.getElementById("amigo").value = "";
    }
}