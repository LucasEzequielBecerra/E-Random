let productoParaCarrito = obtenerDelLs("productos");

const actualizarCarrito = () => {
  const contenedorCarrito = document.querySelector(".item-venta");
  productoParaCarrito.forEach((prod) => {
    const article = document.createElement("article");
    article.className = "articulo-carrito row";
    article.innerHTML = `
      <div class="nombre-envio col-9">
      <span class="nombre-item">${prod.nombre}</span>
      <p class="envio-item">Envio gratis</p>
      <div class="botones-item">
          <ul class="lista-botones">
              <li id="boton-eliminar${prod.id}">Eliminar</li>
              <li>Comprar ahora</li>
              <li>Guardar para despues</li>
          </ul>
      </div>
  </div>
  <div class="precio-carrito col-3">
      <span class="precio-numero">
          ${prod.precio}
      </span>
  </div>
      `;
    contenedorCarrito.appendChild(article);

    const botonEliminar = document.getElementById(`boton-eliminar${prod.id}`);

    botonEliminar.onclick = () => {
      location.reload();
      localStorage.removeItem("productos");
      eliminarDelCarrito();
    };
  });
};

const eliminarDelCarrito = (prodId) => {
  const item = productoParaCarrito.find((prod) => prod.id === prodId);
  const index = productoParaCarrito.indexOf(item);
  productoParaCarrito.splice(index, 1);
};

actualizarCarrito();

console.log(productoParaCarrito);
