document.addEventListener('keyup', e=> {
    if (e.target.matches('#buscador')){
        document.querySelectorAll('.offer-product').forEach(articulo=>{
            articulo.textContent.toLowerCase().includes(e.target.value)
            ? articulo.classList.remove('filtro')
            
            : articulo.classList.add('filtro')
            
        })
    }
    
})