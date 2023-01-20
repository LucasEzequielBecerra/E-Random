const botonModos = document.querySelector("#claro-oscuro");
const body = document.querySelector("body");
const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

// const modoObtenido = obtenerDelLs("modo-oscuro");

const obtenerDelLs = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};

botonModos.onclick = () => {
  body.classList.toggle("oscuro");

  if (body.className === "oscuro") {
    botonModos.textContent = "Modo claro";
  } else {
    botonModos.textContent = "Modo Oscuro";
  }

  if (body.classList.contains("oscuro")) {
    subirAlLs("modo-oscuro", "true");
  } else {
    subirAlLs("modo-oscuro", "false");
  }
};

function cambiarModo() {
  if (obtenerDelLs("modo-oscuro") === "true") {
    body.classList.add("oscuro");
  } else {
    body.classList.remove("oscuro");
  }
}
cambiarModo();
