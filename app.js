// Crear una lista vacía para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
  // Obtener el nombre ingresado por el usuario desde el input
  let nombreAmigo = document.getElementById("amigo").value;

  // Verificar que el campo no esté vacío antes de agregar el amigo
  if (nombreAmigo != "") {
    // Agregar el nombre del amigo al arreglo 'amigos'
    amigos.push(nombreAmigo);
    
    // Actualizar la lista de amigos mostrada en pantalla
    mostrarAmigos();
    
    // Limpiar el campo de entrada después de agregar un amigo
    document.getElementById("amigo").value = "";
  } else {
    // Mostrar una alerta si el usuario intenta agregar un campo vacío
    alert("Por favor, inserte un nombre.");
  }
}

/**
 * Función para mostrar la lista de amigos en pantalla
 */
function mostrarAmigos() {
  // Obtener el elemento HTML donde se mostrará la lista de amigos
  let listaAmigos = document.getElementById("listaAmigos");
  
  // Limpiar el contenido anterior para evitar duplicados
  listaAmigos.innerHTML = "";

  // Recorrer el arreglo de amigos y agregarlos como elementos de lista
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

/**
 * Función para sortear un amigo al azar de la lista
 */
function sortearAmigo() {
  // Verificar que haya al menos un amigo en la lista antes de sortear
  if (amigos.length > 0) {
    // Seleccionar un amigo aleatorio del arreglo 'amigos'
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Limpiar la lista de amigos en pantalla (opcional)
    document.getElementById("listaAmigos").innerHTML = "";
    
    // Mostrar el nombre del amigo sorteado en el elemento 'resultado'
    document.getElementById("resultado").innerHTML = `Su amigo secreto es: ${amigoSorteado}`;
  } else {
    // Mostrar una alerta si no hay amigos para sortear
    alert("No hay amigos para sortear");
  }
}
