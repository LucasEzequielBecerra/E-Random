// Esta es  mi variable global donde voy a pushear los productos solicitados

let carrito = [];

// Llamo a la API fakestoreapi, para hacerle un get y obtener informacion de sus productos

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const arrProd = data;

    arrProd.forEach((prod) => {
      prod.cantidad = 1;
    });

    // Creo una funcion que inserte nodos en mi html con el metodo forEach(), usando la informacion de mi API

    function cardsHtml(array) {
      array.forEach((element) => {
        const card = document.createElement("div");
        card.className = "col-12 col-md-4";
        card.innerHTML = `
              <div class="card">
                <div class="card-personalizada">
                  <img src="${element.image}" class="card-img-top " alt="imagen demostrativa">
                </div>
                <div class="card-body">
                  <h5 class="card-tittle d-flex justify-content-center nombre-de-producto">${element.title}</h5>
                  <p class="card-text d-flex justify-content-center precio-de-producto">$ ${element.price}</p>
                  <a> <div class="btn btn-primary d-flex justify-content-center" id="agregar${element.id}">Agregar al carrito </div></a>
                </div>
              </div>
              `;
        contenedor.appendChild(card);
        const botonAgregar = document.getElementById(`agregar${element.id}`);

        // Creo un evento al hacerle click al boton "agregar al carrito", para que pushee los items a mi variable "Carrito", diferenciandolos por su numero de ID y a su vez pushee la informacion de esta variable al localStorage  con la key "carrito"

        botonAgregar.onclick = () => {
          carritoLogo.style.color = "orange";
          agregoAlCarrito(element.id);
          subirAlLs("carrito", carrito);
          console.log(carrito);

          // Implemento el uso de la libreria Toastify(), para enviarle un mensaje al usuario al enviar un producto al carrito

          Toastify({
            text: "Buena eleccion, ya se agrego al carrito",
            duration: 3000,
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #0c2c33, #93b9d4)",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
        };
        const agregoAlCarrito = (prodId) => {
          const item = arrProd.find((prod) => prod.id === prodId);
          const productoExiste = carrito.find(
            (producto) => producto.id === prodId
          );
          if (productoExiste) {
            element.cantidad++;
            // element.price = element.price * element.cantidad;
          } else {
            carrito.push(item);
          }
        };
      });
    }
    const productosElegidos = obtenerDelLs("carrito");
    carrito = productosElegidos || [];

    cardsHtml(arrProd);
  });

const contenedor = document.querySelector(".fila-productos");
const carritoLogo = document.querySelector("#carrito-logo");

// Uso de la libreria Swiper, para crear un carrusel de imagenes en mi Index.html

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
