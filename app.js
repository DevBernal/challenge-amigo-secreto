//crear lista para almacenar amigos
let amigos = [];

function agregarAmigo() {
  //obtener el nombre del amigo
  let nombreAmigo = document.getElementById("amigo").value;
  //agregar el amigo a la lista
  if (nombreAmigo != "") {
    amigos.push(nombreAmigo);
    //mostrar la lista de amigos
    mostrarAmigos();
    //limpiar el input
    limpiarcampo();
  }else{
    alert("Por favor, inserte un nombre.");
  }
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function limpiarcampo(){
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    // verificar que el arreglo de amigos no esté vacío
    if (amigos.length > 0) {
      //sortear un amigo aleatorio
      let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
      //mostrar el amigo sorteado
      document.getElementById("resultado").innerHTML = amigoSorteado;
    } else {
      alert("No hay amigos para sortear");
    }
}

