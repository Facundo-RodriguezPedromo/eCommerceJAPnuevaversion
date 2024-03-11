/*Validacion para loguearse*/
document.getElementById('login-form').addEventListener('submit', 

function (event) {
    event.preventDefault();
    
    let user = document.getElementById('user').value
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '' || user.trim() === '') {
        //libreria sweet2 para alerta
        Swal.fire({
            title: 'Debes completar todos los campos para ingresar',
            icon: 'warning',
            confirmButtonText: 'intenta denuevo'
        })
        return;
    } else {
        // Guardo el nombre del usuario en el Local Storage
        localStorage.setItem('username', user);
        window.location.href = '/html/ofertas.html';
    }
});

/*Validacion para registrarse*/
document.getElementById('register-form').addEventListener('submit', 

function (event) {
    event.preventDefault();
    
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;

    if (fullname.trim() === '' || email.trim() === '' || password.trim() === '') {
        Swal.fire({
            title: 'Debes completar todos los campos para registrarte',
            icon: 'warning',
            confirmButtonText: 'intenta denuevo'
        })
        return;
    } else {
        localStorage.setItem('username', fullname);
        window.location.href = '/html/ofertas.html';
    }
});


/*
Funcion para buscar un usuario, puedo hacer una lista de usuarios y que solo esos puedan entrar por ejemplo:

function buscarUsuario(arr, filtro){
    const encontrado= arr.find((el) => {
        return el.nombre.includes(filtro);
    })
    return encontrado;
}



*/

