    const offerProduct = document.getElementById('offerProduct');
    const verCarrito = document.getElementById('carrito');
    const modalContainer = document.getElementById('modalContainer');
    const cantidadCarrito = document.getElementById('cantidadCarrito');

    //Presento productos en el DOM
    let carrito = [];

    let url = 'https://fakestoreapi.com/products'
    fetch(url)
    .then(response => response.json())
    .then(products => { 
        console.log(products)

   //Agrego la cantidad con que inicia cada producto, modifico la lista entera agregando cantidad
    const productosConCantidad = products.map(producto => {
    return {
        ...producto,
        cantidad: 1
    };
});

    let body=''
        for(let i = 0; i < productosConCantidad.length; i++){
            body += `
            <div class="card offer-product" id="${productosConCantidad[i].id}">
                <img class="card-img-top offer-product-image" src="${productosConCantidad[i].image}" style="width: 100px; height: 100px;" alt="Imagen del producto">
                <div class="card-body">
                    <h5 class="card-title offer-product-title">${productosConCantidad[i].title}</h5>
                    <p class="card-text offer-product-price">$${productosConCantidad[i].price}</p>
                    <button class="btn btn-primary offer-product-button" id="btnComprar${productosConCantidad[i].id}">Comprar</button>
                </div>
            </div>
            `}
            offerProduct.innerHTML = body
    
    // Obtener el botón de compra por su id generado dinámicamente 🔼 en el for de arriba
        for (let i = 0; i < productosConCantidad.length; i++){
        const comprar = document.getElementById('btnComprar' + productosConCantidad[i].id);

        comprar.addEventListener("click", () => {
            
            // Establece un color de fondo por 100 mili, avisa en cada click de compra
            document.body.style.background = 'blue';
            setTimeout(() => document.body.style.background = '', 100);

            //con cada producto separado luego armo el objeto dentro del carrito
            const product = productosConCantidad[i];
    
            //.some buscamos el producto repetido dentro de carrito
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++
                    }
                });
            } else {
                carrito.push({
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    cantidad: product.cantidad,
                });
            }
            //console.log(carrito)
            carritoCounter();
        });
        
    }//for del click
        
    })
    .catch(error => {
        console.error('Error al obtener los productos:', error);
    }); 
    
///////////////////////////////////////////////////////////////////////////////
    
const pintarCarrito = () => {
        modalContainer.innerHTML = " ";
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
    
        modalButton.addEventListener("click", () => {
            modalContainer.style.display = "none";
        });
    
        modalHeader.append(modalButton);
    
        carrito.forEach((product, index) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-content";
            
            carritoContent.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <img src="${product.image}" class="img-fluid" alt="${product.title}">
                </div>
                <div class="col-md-9">
                    <h3>${product.title}</h3>
                    <p>Precio: $ ${product.price}</p>
                    <p>Cantidad: ${product.cantidad}</p>
                    <p>Total: $ ${product.cantidad * product.price}</p>
                </div>
            </div>
            `;
    
            modalContainer.append(carritoContent);
            
        let eliminar = document.createElement("span");
            eliminar.innerText = "❌"
            eliminar.className = "delete-product";
            eliminar.dataset.index = index;
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
    
    ////////////////////////////////////////////////////////////////////////
    verCarrito.addEventListener("click", pintarCarrito)

    /*Con dataset capturo cada cruz de cada elemento para eliminar el articulo correspondiente a cada cruz*/
    const eliminarProducto = (e) => {
        const index = e.target.dataset.index;
        carrito.splice(index, 1);
        carritoCounter();
        pintarCarrito();
    }
    
    // Funcion para contar la cantidad de objetos dentro del carrito, dibuja globito en span de carrito
    const carritoCounter = () => {
        cantidadCarrito.style.display = "block";
        cantidadCarrito.innerText = carrito.length;
    };
    


