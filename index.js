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
  {
    id: 3,
    nombre: "Puff con Baul Doble",
    precio: "$12100",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/puff-doble-11-3af34d094c79df408816444075196184-1024-1024.jpg",
  },
  {
    id: 4,
    nombre: "Sofa Cama",
    precio: "$30100",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/muebles-cuadr-3771-55d6a498300c6916ab16496938229364-1024-1024.jpeg",
  },
  {
    id: 5,
    nombre: "Sillon Cabecero",
    precio: "$20100",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/matera-con-cabezal1-1a37a5fd6227c5d44316600762901717-1024-1024.png",
  },
  {
    id: 6,
    nombre: "Mesa Comedor",
    precio: "$40100",
    imagen:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/mesa-comedor-de-140x1401-08b8106bc78e15ac5e16648498778436-1024-1024.png",
  },
];

const contenedor = document.querySelector(".fila-productos");
const carritoLogo = document.querySelector("#carrito-logo");

const subirAlLs = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

let carrito = [];

// generador de cards

productos.forEach((element) => {
  const card = document.createElement("div");
  card.className = "col-4";
  card.innerHTML = `
    <div class="card ">
      <div class="card-personalizada">
        <img src="${element.imagen}" class="card-img-top img-fluid" alt="imagen demostrativa">
      </div>
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

  console.log(carrito);
};

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
