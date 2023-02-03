// Obtengo mis productos del localStorage y lo almaceno en una variable

let productoParaCarrito = obtenerDelLs("carrito");

const contenedorCarrito = document.querySelector(".item-venta");
const contenedorTotal = document.querySelector(".tabla-contenedora");
const volverTienda = document.querySelector(".volver-tienda");

// Creo una funcion que genere nodos en mi html usando la informacion de la variable "productoParaCarrito"

const actualizarCarrito = (array) => {
  const generarCards = array.reduce((acc, prod) => {
    return (
      acc +
      `
    <article class="articulo-carrito row">
        <div class="nombre-envio col-7">
          <span class="nombre-item">${prod.title}</span>
          <p class="envio-item">Envio gratis</p>
          <div class="botones-item">
            <ul class="lista-botones">
                <li class="boton-eliminar" id="boton-${prod.id}">Eliminar</li>
                <li>Comprar ahora</li>
                <li>Guardar para despues</li>
            </ul>
          </div>
        </div>
        <div class="cantidad-contenedor col-2">
        <div class="cantidad-compra">
            <button class="suma-resta">
                <i class="fa-solid fa-minus"></i>

            </button>
            <div class="cantidad-numero">
                <span>
                    ${prod.cantidad}
                </span>
            </div>
            <button class="suma-resta">
                <i class="fa-regular fa-plus"></i>

            </button>
        </div>
        <p class="cantidad-disponible">
            99 disponibles
        </p>
    </div>
        <div class="precio-carrito col-3">
          <span class="precio-numero">
            $${(prod.totalPrice = prod.price * prod.cantidad)}
          </span>
        </div>
    </article>
    `
    );
  }, "");
  contenedorCarrito.innerHTML = generarCards;

  const precioTotal = document.querySelector(".total-precio");

  if (productoParaCarrito.length === 0) {
    volverTienda.style.display = "flex";
    precioTotal.innerHTML = "";
  } else {
    const totalPrice = productoParaCarrito.reduce(
      (acc, { totalPrice }) => acc + totalPrice,
      0
    );
    precioTotal.innerHTML = `

    <p>Precio total  $${totalPrice}</p>
    `;
  }
};

console.log(productoParaCarrito);

actualizarCarrito(productoParaCarrito);

// Creo una funcion para eliminar los productos del carrito iterando en los botones "Eliminar" y diferenciandolos por su numero de ID

function eliminarDelCarrito(array) {
  const botonEliminar = document.querySelectorAll(`.boton-eliminar`);
  botonEliminar.forEach((boton) => {
    boton.onclick = () => {
      const id = boton.id.slice(6);
      const filtrarProducto = array.filter((element) => {
        return element.id != Number(id);
      });

      // Actualizo la informacion de mi carrito y la seteo en el localStorage

      productoParaCarrito = filtrarProducto;
      localStorage.setItem("carrito", JSON.stringify(productoParaCarrito));

      actualizarCarrito(productoParaCarrito);
      eliminarDelCarrito(productoParaCarrito);

      // Implemento el uso de la libreria Toastify(), para enviarle un mensaje al usuario al eliminar un producto del carrito

      Toastify({
        text: `Hemos eliminado tu producto del carrito`,
        duration: 3000,
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #0c2c33, #93b9d4)",
        },
        onClick: function () {},
      }).showToast();
    };
  });
}

eliminarDelCarrito(productoParaCarrito);
