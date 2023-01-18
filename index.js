const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

let carrito = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const arrProd = data;

    function cardsHtml(array) {
      array.forEach((element) => {
        const card = document.createElement("div");
        card.className = "col-4";
        card.innerHTML = `
            <div class="card ">
              <div class="card-personalizada">
                <img src="${element.image}" class="card-img-top" alt="imagen demostrativa">
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
        botonAgregar.onclick = () => {
          carritoLogo.style.color = "orange";
          agregoAlCarrito(element.id);
          subirAlLs("carrito", carrito);
          console.log(carrito);
        };
        const agregoAlCarrito = (pordId) => {
          const item = arrProd.find((prod) => prod.id === pordId);
          carrito.push(item);
        };
      });
    }
    const productosElegidos = obtenerDelLs("carrito");
    carrito = productosElegidos || [];

    cardsHtml(arrProd);
  });

const contenedor = document.querySelector(".fila-productos");
const carritoLogo = document.querySelector("#carrito-logo");

// generador de cards

// carrusel swiper

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
