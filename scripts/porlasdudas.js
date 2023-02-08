// fetch("https://63c703c14ebaa8028552407c.mockapi.io/Productos", {
//     method: "POST",
//     body: JSON.stringify([
//       {
//         id: 1,
//         nombre: "Sillon con baul",
//         precio: "$8400",
//         imagen:
//           "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/puff-baul1-022286d861a52d5d4816445170827841-1024-1024.png",
//       },
//       {
//         id: 2,
//         nombre: "Matera con brazos",
//         precio: "$10100",
//         imagen:
//           "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/black-121-78909eedb5103ddff916578234719635-1024-1024.jpg",
//       },
//       {
//         id: 3,
//         nombre: "Puff con Baul Doble",
//         precio: "$12100",
//         imagen:
//           "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/puff-doble-11-3af34d094c79df408816444075196184-1024-1024.jpg",
//       },
//       {
//         id: 4,
//         nombre: "Sofa Cama",
//         precio: "$30100",
//         imagen:
//           "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/muebles-cuadr-3771-55d6a498300c6916ab16496938229364-1024-1024.jpeg",
//       },
//       {
//         id: 5,
//         nombre: "Sillon Cabecero",
//         precio: "$20100",
//         imagen:
//           "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/matera-con-cabezal1-1a37a5fd6227c5d44316600762901717-1024-1024.png",
//       },
//       {
//         id: 6,
//         nombre: "Mesa Comedor",
//         precio: "$40100",
//         imagen:
//           "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/120/603/products/mesa-comedor-de-140x1401-08b8106bc78e15ac5e16648498778436-1024-1024.png",
//       },
//     ]),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });

// function eliminarDelCarrito(array) {
//     const botonEliminar = document.getElementById(`boton-eliminar${prod.id}`);
//     botonEliminar.forEach((boton) => {
//       boton.onclick = () => {
//         const item = productoParaCarrito.find((prod) => prod.id === prodId);
//         const index = productoParaCarrito.indexOf(item);
//         const filtrarProducto = array.filter((element) => {
//           return element.id != index;
//         });

//         productoParaCarrito = filtrarProducto;
//         console.log(filtrarProducto);

//         localStorage.setItem("carrito", JSON.stringify(productoParaCarrito));
//         actualizarCarrito(productoParaCarrito);
//         eliminarDelCarrito(productoParaCarrito);
//       };
//     });

//     actualizarCarrito(productoParaCarrito);
//   }

// {/* <div class="container d-flex flex-column align-items-center">
//             <p>Tu carrito esta vacio :(</p>
//             <button type="button" class="btn btn-secondary "><a href="index.html">Volver a la tienda</a> </button>

//         </div> */}

// let precioTotal = document.createElement("div");
//     precioTotal.className = "total-precio";
//     let total = 0;
//     array.forEach = () => {
//       total += prod.price;
//     };
//     precioTotal = `
//         <hr>

//         <div class="total-precio"> <p class="precio">Precio total</p> <p class="numero">${total}</p></div>
// `;

// function contador(array, productoAContar) {
//     let va = array.filter((producto) => producto == productoAContar).length;
//     console.log(productoAContar);
//   }

// array.forEach((producto) => contador(array, producto));

// const productoExiste = carrito.find((producto) => producto.id === pordId)
