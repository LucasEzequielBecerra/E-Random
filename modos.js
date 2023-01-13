const botonModos = document.querySelector("#claro-oscuro");
const body = document.querySelector(".modo-claro");

botonModos.onclick = () => {
  if (modoObtenido !== null) {
    borrarModo();
  } else {
    subirAlLs("modo", "modo-oscuro");
  }

  location.reload();
};

const obtenerDelLs = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};
const modoObtenido = obtenerDelLs("modo");

function cambiarModo() {
  if (modoObtenido !== null) {
    body.classList.toggle(modoObtenido);
  }

  if (body.className === "modo-claro modo-oscuro") {
    botonModos.textContent = "Modo claro";
  } else {
    botonModos.textContent = "Modo oscuro";
  }
  console.log(modoObtenido);
}

cambiarModo();

function borrarModo() {
  localStorage.removeItem("modo");
}
