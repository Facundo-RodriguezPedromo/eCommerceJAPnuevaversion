document.addEventListener('DOMContentLoaded', () => {
    buscarArticulos(productos);
});

let search = document.getElementById('buscador')

function buscarArticulos(){
    search.addEventListener("input", e=> {
        //.trim() elimina espacios en blanco
        const inpuText = e.target.value.trim()

        const mostrarFiltrado = productos.filter(producto => producto.title.startsWith(inpuText));
        
        const divBusqueda = document.getElementById("resultadoBusqueda")

        mostrarFiltrado.forEach((product)=>{
                let contentBusqueda = document.createElement("div");
                
                contentBusqueda.innerHTML = `
                <div class="shop-item" id="${product.id}">
                    <span class="shop-item-title">${product.title}</span>
                    <img class="shop-item-image" src="${product.image}" style="width: 100px; height: 100px;">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$${product.price}</span>
                    </div>
                </div> 
                `;
            
                divBusqueda.append(contentBusqueda);
            
                
            
            
            });
        
        

    })
}