const botonEnviar = document.querySelector("#boton-enviar");

const form = document.querySelector("#form-mensaje");
const inputNombre = document.querySelector(".input-nombre");
const inputEmail = document.querySelector(".input-email");
const inputMensaje = document.querySelector(".input-mensaje");

const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

const datosForm = [];

const nombreValido = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
const emailValido = `/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/`;

form.onsubmit = (event) => {
  event.preventDefault();
  if (inputNombre.value.match(nombreValido) != null) {
    datosForm.push(inputNombre.value, inputEmail.value, inputMensaje.value);
    console.log(datosForm);
    subirAlLs("Nuevo Mensaje", datosForm);
  }
};
