let amigos = [];// array para almacenar los nombres 

function agregarAmigo() {// se obtiene el valor del dato ingresado con el campo id "amigo" y se eliminan los campos vacios con el trim
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {//verifica que no este vacio el campo de id "nombre"
        alert("Ingresa un nombre para continuar.");
    } else {
        amigos.push(nombre);//agregamos el dato al arreglo amigos
        actualizarLista();//llamamos a la funcion que actualiza el html 
        alert("Nombre agregado a la lista.");//mensajito para el usuario vea que el proceso termino
        document.getElementById("amigo").value = "";//limpiamos el input de id "amigo"
    }
}

function actualizarLista() {//obtenemos el elemento ul de id "listaAmigos"
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";//se limpia la lista para evitar duplicados
    //se recorre la lista para ir pintando los nombres 
    amigos.forEach((amigo) => {
        let li = document.createElement("li");//crea un nuevo elemento li
        li.textContent = amigo;//se le asigna el nombre del amigo al li creado
        listaAmigos.appendChild(li);//se agrega el li a la lista en el html
    });
}
function sortearAmigo() {
    if (amigos.length <= 0) {//se verifica que haya items en la lista
        alert("Primero ingresa al menos dos nombres.");
    }
    else if (amigos.length == 1) {
        alert("No hay suficientes nombres en la lista para comenzar el sorteo.");
    }
    else {//se crea un indice aleatorio en base al numero de items de la lista amigos
        let indiceRandom = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceRandom];//se obtiene amigo seleccionado en base al indice creado anteriormente

        let resultadoAmigoSorteo = document.getElementById("resultado");//obtenemos el elemento por el id "resultado"
        resultadoAmigoSorteo.innerHTML = `<li>${amigoSorteado} es el amigo secreto!</li>`;//se muestra el resultado en el elemento seleccionado

    }
}