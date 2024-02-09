//* Variables de inicio *//    
let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector('.shop-items');
let totalElement = document.querySelector('.cart-total-title');

    //* Peticion de productos al servidor *// 
    fetch('https://fakestoreapi.com/products') 
    .then(res => res.json())
    .then(data => {

    //* Solo muestro 2 productos *//
    let productsArray = data.slice(1,3);

    //* imprimir productos en pantalla *//
    productsArray.forEach(product => {
        productContainer.innerHTML += `
            <div class="shop-item" id="${product.id}">
                <span class="shop-item-title">${product.title}</span>
                <img class="shop-item-image" src="${product.image}" style="width: 100px; height: 100px;">
                <div class="shop-item-details">
                    <span class="shop-item-price">$${product.price}</span>
                    <button class="btn btn-primary shop-item-button" type="button">Agregar al carrito</button>
                </div>
            </div> `
        });

    //* Click en un boton de agregar al carrito *//
    let addBtns = document.querySelectorAll('.shop-item-button');
    let cartContainer = document.querySelector('.cart-items');
    addBtns.forEach(btn=>{
        btn.addEventListener('click', event=>{
            
            //* Buscar el id del producto *//
            let actualID = parseInt(event.target.parentNode.parentNode.id);
            
            //* Con el id encontrar objeto actual *//
            let actualProduct = productsArray.find(item => item.id == actualID)
            if(actualProduct.quantity === undefined){
                actualProduct.quantity = 1;
            }
            
            //* Preguntar si el producto que estoy agregando ya existe *//
            let existe = false
            shoppingCartArray.forEach(producto =>{
                if(actualID == producto.id){
                    existe = true
                }
            });

            if(existe){
                actualProduct.quantity++
            }else{
                shoppingCartArray.push(actualProduct)
            }

            //* Dibujar en el dom compras actualizadas *//
            drawItems()
            
            //* Actualizar el valor total *//
            getTotal()
        });
    });

    function  getTotal(){
        let sumTotal 
        let total = shoppingCartArray.reduce( (sum, item)=>{
            sumTotal = sum + item.quantity*item.price
            return sumTotal
        } , 0);
        totalElement.innerText = `$${total}`
    }

    function drawItems(){
        cartContainer.innerHTML = '';
        shoppingCartArray.forEach(item => {
            cartContainer.innerHTML += `
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${item.image}" width="100" height="100">
                        <span class="cart-item-title">${item.title}</span>
                    </div>
                    <span class="cart-price cart-column">$${item.price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="${item.quantity}">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div> `
        });
    }
}); //* Termina el Fetch *//









