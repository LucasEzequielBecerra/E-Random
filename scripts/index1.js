let carrito = [];
if (localStorage.getItem("carrito") === null) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

const contenedor = document.getElementById("fila-productos");
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment();
const carritoLogo = document.querySelector("#carrito-logo");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const arrProd = data;

    agregoPropiedad(arrProd);

    cardsHtml(arrProd);
  })
  .catch = (error) =>{
    console.log(error)
  }

function agregoPropiedad(array) {
  array.forEach((element) => {
    element.cantidad = 1;
  });
}

function cardsHtml (arr) {
  arr.forEach((element) => {
    templateCard.querySelector("#img-card").setAttribute("src", element.image);
    templateCard.querySelector(".nombre-de-producto").textContent = element.title;
    templateCard.querySelector(".precio-de-producto").textContent = element.price;
    templateCard.querySelector(".boton-agrego").setAttribute("id", `agregar ${element.id}`);

    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  });
  contenedor.appendChild(fragment)
}
