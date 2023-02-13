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

  body.className === "oscuro"
    ? (botonModos.textContent = "Modo claro") &&
      localStorage.setItem("modo-oscuro", JSON.stringify("true"))
    : (botonModos.textContent = "Modo Oscuro") &&
      localStorage.setItem("modo-oscuro", JSON.stringify("false"));

  // Guardo esta informacion en el localStorage para que no se me actualize la informacion que genero el evento al actualizar la pagina
};

// Por ultimo creo la funcion que verifique lo seteado en el localStorage

function cambiarModo() {
  obtenerDelLs("modo-oscuro") === "true"
    ? (botonModos.textContent = "Modo claro") && body.classList.add("oscuro")
    : body.classList.remove("oscuro");
}
cambiarModo();
