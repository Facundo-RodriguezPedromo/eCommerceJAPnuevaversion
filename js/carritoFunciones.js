
const pintarCarrito = () => {
    modalContainer.innerHTML = " ";
    // establece un color de fondo por 1 segundos
    document.body.style.background = 'blue'; 
    setTimeout(() => document.body.style.background = '', 1000);

    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement("h1");
            modalButton.innerText = "x";
            modalButton.className = "modal-header-button";

            modalButton.addEventListener("click", ()=> {
                modalContainer.style.display = "none";
            });

    modalHeader.append(modalButton);

    
    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.image}" style="width: 100px; height: 100px;">
            <h3>${product.title}</h3>
            <p>$ ${product.price}</p>
            <p>Cantidad: ${product.cantidad}</p>
            <p>Total: ${product.cantidad * product.price}</p>
        `;
        
        modalContainer.append(carritoContent);
        //cuento la cantidad de objetos en el carrito
        console.log(carrito.length);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌"
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto)
    });

    //Funcion para sumar el total de todos los articulos seleccionados
    // "el.cantidad" suma el total de las cantidades de cada articulo
    const total = carrito.reduce((acc, el) => acc + el.price * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `
    total a pagar: $${total}
    `;
    modalContainer.append(totalBuying);
};
////////////////////////////////////////////////////////////

verCarrito.addEventListener("click", pintarCarrito)


const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });
    carritoCounter();
pintarCarrito();

}; 

// Funcion para contar la cantidad de objetos dentro del carrito
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;

};