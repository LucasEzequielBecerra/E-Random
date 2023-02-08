const botonModos = document.querySelector("#claro-oscuro");
const body = document.querySelector("body");

// Creo las funciones subirAlLs y obtenerDelLS que voy a estar usando en mis otros archivos tipo JS

const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

const obtenerDelLs = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};

// Anteriormente se creo estilados propios de la clase "oscuro"
// Hago un evento que vaya agregando al body la clase "oscuro" para cambiar el bg y colores de fuentes dentro de la pagina

botonModos.onclick = () => {
  body.classList.toggle("oscuro");

  if (body.className === "oscuro") {
    botonModos.textContent = "Modo claro";
  } else {
    botonModos.textContent = "Modo Oscuro";
  }

  // Guardo esta informacion en el localStorage para que no se me actualize la informacion que genero el evento al actualizar la pagina

  if (body.classList.contains("oscuro")) {
    subirAlLs("modo-oscuro", "true");
  } else {
    subirAlLs("modo-oscuro", "false");
  }
};

// Por ultimo creo la funcion que verifique lo seteado en el localStorage

function cambiarModo() {
  if (obtenerDelLs("modo-oscuro") === "true") {
    body.classList.add("oscuro");
  } else {
    body.classList.remove("oscuro");
  }
}
cambiarModo();
