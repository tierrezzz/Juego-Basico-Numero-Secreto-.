//cambiar titulo

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/

// variable para almacenar el numero aleatorio
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// usando funciones para cambiar texto de manera generica
function asignarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

// verifica si acierta o no acierta
function verificarIntento() {
  let numeroDeUsuario = parseInt(
    document.getElementById("numeroUsuario").value
  );

  if (numeroSecreto === numeroDeUsuario) {
    asignarTexto(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );

    // nuevo juego
    document.getElementById("reiniciar").removeAttribute("disabled");
  }

  // si no acerto
  else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTexto("p", "El numero secreto es menor");
    } else if (numeroDeUsuario < numeroSecreto) {
      asignarTexto("p", "El numero secreto es mayor");
    }
    intentos++;
    limpíarinput();
  }

  return;
}

// limpia el input
function limpíarinput() {
  document.querySelector("#numeroUsuario").value = "";
  /*let valorInput = document.querySelector('#numeroUsuario');
    valorInput.value = '';*/
}

// reiniciar el juego
function reiniciarJuego() {
  limpíarinput();

  condicionesIniciales();

  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

// condiciones iniciales
function condicionesIniciales() {
  asignarTexto("h1", "juego del numero secreto");
  asignarTexto("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

// genera un numero aleatorio entre 1 y 10;
function generarNumeroSecreto(params) {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(listaNumerosSorteados);
  console.log(numeroGenerado);
  // si ya soreteamos todos los numeros

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTexto('p', 'Ya se sortearon todos los numeros posibles!');
  } else {
    // si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      //recursividad
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

condicionesIniciales();
