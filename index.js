const productos = [
  {
    id: 1,
    nombre: "Sillon con baul",
    precio: "$8400",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/puff-baul1-022286d861a52d5d4816445170827841-1024-1024.png",
  },
  {
    id: 2,
    nombre: "Matera con brazos",
    precio: "$10100",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/black-121-78909eedb5103ddff916578234719635-1024-1024.jpg",
  },
];

const contenedorCarrito = document.querySelector(".item-venta");
const contenedor = document.querySelector(".fila-productos");
const carritoLogo = document.querySelector("#carrito-logo");

const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

const obtenerDelLs = (clave) => {
  return JSON.parse(localStorage.getItem(clave));
};

let carrito = [];

// generador de cards

productos.forEach((element) => {
  const card = document.createElement("div");
  card.className = "col-4";
  card.innerHTML = `
    <div class="card">
      <img src="${element.imagen}" class="card-img-top" alt="imagen demostrativa">
      <div class="card-body">
        <h5 class="card-tittle d-flex justify-content-center nombre-de-producto">${element.nombre}</h5>
        <p class="card-text d-flex justify-content-center precio-de-producto">${element.precio}</p>
        <a> <div class="btn btn-primary d-flex justify-content-center" id="agregar${element.id}">Agregar al carrito </div></a>
      </div>
    </div>
    `;
  contenedor.appendChild(card);

  const botonAgregar = document.getElementById(`agregar${element.id}`);

  botonAgregar.onclick = () => {
    carritoLogo.style.color = "orange";
    agregoAlCarrito(element.id);
    subirAlLs("productos", carrito);
  };
});

const agregoAlCarrito = (pordId) => {
  const item = productos.find((prod) => prod.id === pordId);
  carrito.push(item);
  // actualizarCarrito();

  console.log(carrito);
};

const productoParaCarrito = obtenerDelLs("producto");

console.log(productoParaCarrito);

// const actualizarCarrito = () => {
//   contenedorCarrito.innerHTML = "";

//   productoParaCarrito.forEach((prod) => {
//     const article = document.createElement("article");
//     article.className = "articulo-carrito row";
//     article.innerHTML = `
//     <div class="nombre-envio col-9">
//     <span class="nombre-item">${prod.nombre}</span>
//     <p class="envio-item">Envio gratis</p>
//     <div class="botones-item">
//         <ul class="lista-botones">
//             <li>Eliminar</li>
//             <li>Comprar ahora</li>
//             <li>Guardar para despues</li>
//         </ul>
//     </div>
// </div>
// <div class="precio-carrito col-3">
//     <span class="precio-numero">
//         ${prod.precio}
//     </span>
// </div>
//     `;
//     contenedorCarrito.appendChild(article);
//   });
// };

// funciones de subir y obtener del LocalStorage
