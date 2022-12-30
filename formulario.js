const botonEnviar = document.querySelector("#boton-enviar");

const form = document.querySelector("#form-mensaje");
const inputNombre = document.querySelector(".input-nombre");
const inputEmail = document.querySelector(".input-email");
const inputMensaje = document.querySelector(".input-mensaje");

const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

const datosForm = [];

form.onsubmit = (event) => {
  event.preventDefault();
  datosForm.push(inputNombre.value, inputEmail.value, inputMensaje.value);
  console.log(datosForm);
  subirAlLs("Nuevo Mensaje", datosForm);
};
