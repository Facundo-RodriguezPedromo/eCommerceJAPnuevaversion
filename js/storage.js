//Muestro el usuario actual en el nav
var username = localStorage.getItem('username');

document.getElementById('username').innerText = username;



    // ver si hay algo en el carrito al recargar la pagina o iniciarla
    window.addEventListener('DOMContentLoaded', () => {
        const carritoGuardado = localStorage.getItem('carrito');
            if (carritoGuardado) {
                carrito = JSON.parse(carritoGuardado);
                carritoCounter();
        }
    });
    