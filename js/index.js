let contenedorProductos = document.getElementById("productosContenedor");


// Creo el carrito

let carrito = [];

// Tomo los ids de los elementos en html para
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    }
})

// Utilizo el boton para vaciar el carrito y igualo la cantidad que tiene a 0 
const botonVaciar = document.getElementById('vaciar-carrito');
// Cuando presionan este boton la longitud del carrito se pone en 0
botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})


// Muestro dinamicamente los productos
productos.forEach(producto => {
    const div = document.createElement('div');
    div.className = ('producto');
    div.innerHTML = `
    <img src="${producto.imagen}" alt = "">
    <h5> ${producto.nombre} </h5>
    <p> $ ${producto.precio} </p>
    <button id="agregar${producto.id}"  "class="boton-agregar"> Agregar al carrito <i class="fa-solid fa-cart-shopping"></i></button>
    `
    contenedorProductos.append(div);
    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    })
});

// Funciones para agregar, eliminar y actualizar los elementos

const agregarAlCarrito = (productoId) => {
    // Quiero armar un condicional para que cuando se quede sin stock un producto le aparezca en la tarjeta
    // que ese producto no tiene stock

    const item = productos.find((producto) => producto.id === productoId);
    carrito.push(item);
    item.cantidad--;
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se agrego al carrito correctamente',
        showConfirmButton: false,
        timer: 1500
    })
    actualizarCarrito();
}




const eliminarDelCarrito = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId);
    // Busco el elemento y luego me devuelve su item
    const indice = carrito.indexOf(item);
    // Aca lo borro
    carrito.splice(indice, 1);
    actualizarCarrito();
}

const actualizarCarrito = () => {
    // Esta linea la uso para eliminar el nodo asi se va actualizando con la info nueva
    contenedorCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML += `
            <p> ${producto.nombre} </p>
            <p> Precio : ${producto.precio} </p>
            <p> Cantidad Disponible : ${producto.cantidad}</p>
            <button onclick = "eliminarDelCarrito(${producto.id})" class="boton-eliminar"> <i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.append(div);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    })
    contadorCarrito.innerText = carrito.length;
    // Utilizo el innerText para ir mostrando el valor del total de mi carrito
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio, 0);
}
