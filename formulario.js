const botonEnviar = document.querySelector("#boton-enviar");

const form = document.querySelector("#form-mensaje");
const inputNombre = document.querySelector(".input-nombre");
const inputEmail = document.querySelector(".input-email");
const inputMensaje = document.querySelector(".input-mensaje");

// const datosForm = [];

const nombreValido = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
const emailValido = `/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/`;

form.onsubmit = (event) => {
  event.preventDefault();

  if (inputNombre.value.match(nombreValido) != null) {
    fetch("https://63c703c14ebaa8028552407c.mockapi.io/Peoductos", {
      method: "POST",
      body: JSON.stringify({
        nombre: inputNombre.value,
        email: inputEmail.value,
        mensaje: inputMensaje.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch("no hay data");
  }
};
