const botonEnviar = document.querySelector("#boton-enviar");

const form = document.querySelector("#form-mensaje");
const inputNombre = document.querySelector(".input-nombre");
const inputEmail = document.querySelector(".input-email");
const inputMensaje = document.querySelector(".input-mensaje");

const nombreValido = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

form.onsubmit = (event) => {
  event.preventDefault();

  // Dentro de mi evento onsubmit creo la condicion, en la que si se cumple la expresion regular almacenada en mi variable "nombreValido" en el inputNimbre, se genere un fetch de tipo POST a la API mockapi
  // En este POST envio la informacion de contacto y el mensaje que envie el usuario

  if (
    inputNombre.value.match(nombreValido) != null &&
    inputMensaje.value != ""
  ) {
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

    // Uso la libreria SweetAlert para avisarle al usuario que su mensaje ha sido enviado con exito

    swal("El mensaje ha sido enviado con éxito", {
      icon: "success",
      buttons: false,
      timer: 2000,
    });
  }
};
