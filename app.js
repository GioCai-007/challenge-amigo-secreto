// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let amigos = [];
let amigoSorteado = false; // Bandera para saber si ya se sorteó un amigo

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim(); // Eliminar espacios extra

    // Verificar si el nombre no está vacío y no se repite en la lista
    if (nombreAmigo !== "" && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo); // Añadir el amigo a la lista
        input.value = ''; // Limpiar el campo de texto

        actualizarLista(); // Actualizar la lista en la interfaz
    } else {
        alert("Por favor ingrese un nombre válido o único.");
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto de la lista
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Debe haber al menos 2 amigos para realizar el sorteo!");
        return;
    }

    if (!amigoSorteado) {
        // Elegir un amigo aleatorio de la lista
        const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];

        // Mostrar el resultado en la interfaz
        mostrarResultado([`El amigo secreto es: ${amigoAleatorio}`]);

        // Cambiar la bandera para que no se vuelva a sortear
        amigoSorteado = true;
    } else {
        // Reiniciar el juego (vaciar la lista y los resultados)
        reiniciarJuego();
    }
}

// Función para mostrar los resultados del sorteo
function mostrarResultado(resultado) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = ''; // Limpiar el resultado anterior

    resultado.forEach((asignacion) => {
        const li = document.createElement('li');
        li.textContent = asignacion;
        resultadoList.appendChild(li);
    });
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Vaciar la lista de amigos
    amigos = [];
    amigoSorteado = false; // Resetear la bandera

    // Limpiar la lista de amigos y los resultados
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    // Habilitar de nuevo la posibilidad de agregar amigos (se podría mostrar un mensaje si quieres)
    alert("El juego ha sido reiniciado. ¡Agrega nuevos amigos y vuelve a sortear!");
}