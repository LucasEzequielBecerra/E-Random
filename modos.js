const botonModos = document.querySelector("#claro-oscuro");
const body = document.querySelector(".modo-claro");

botonModos.onclick = () => {
  body.classList.toggle("modo-oscuro");
  if (body.className === "modo-claro modo-oscuro") {
    botonModos.textContent = "Modo claro";
  } else {
    botonModos.textContent = "Modo oscuro";
  }
};
