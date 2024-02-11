const shopContent = document.getElementById('shop-content');
const verCarrito = document.getElementById('carrito');
const modalContainer = document.getElementById('modal-container');
//Agrego la cantidad con que inicia cada producto
const productosConCantidad = productos.map(producto => {
    return {
        ...producto,
        cantidad: 1
    };
});

console.log(productosConCantidad)
let carrito = [];
//Selecciono solo 4 productos para ser mas practico
productosConCantidad.slice(0,4).forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <div class="shop-item" id="${product.id}">
        <span class="shop-item-title">${product.title}</span>
        <img class="shop-item-image" src="${product.image}" style="width: 100px; height: 100px;">
        <div class="shop-item-details">
            <span class="shop-item-price">$${product.price}</span>
        </div>
    </div> 
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            cantidad: product.cantidad,
        });
        console.log(carrito)
    });
});

///////////////////////////////////////////////////////////////////////////////

