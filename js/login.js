//* Validacion De Usuario *//
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("Entrar").addEventListener("click", function (evento) {
        evento.preventDefault();

        let usuario = document.getElementById('login-email').value;
        let clave = document.getElementById('login-password').value;

        if (usuario.length == 0 || clave.length == 0) {
            swal('Los datos Correo Electronico y Contraseña son obligatorios', '', 'error');
        }
        if (usuario.length >= 1 && clave.length >= 1) {
            localStorage.setItem("login-email", usuario)
            window.location.href = "./html/inicio.html";
        }
    });

//* Validacion De Registro e-commerce *//
    document.getElementById("Registrarse").addEventListener("click", function (evento) {
        evento.preventDefault();

        let register = document.getElementById('register-email').value;
        let registerPassword = document.getElementById('register-password').value;

        if (register.length == 0 || registerPassword == 0) {
            swal('Debe completar los datos', '', 'error')
        }
        if (register.length >= 1 && registerPassword.length >= 1) {
            localStorage.setItem("register-email", register)
            window.location.href = "./html/inicio.html";
        }
    });


});

/** Login registro efectos para las cajas **/
function showTab(tabName) {
    document.getElementById('login-form').style.display = (tabName === 'login') ? 'block' : 'none';
    document.getElementById('register-form').style.display = (tabName === 'register') ? 'block' : 'none';

    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('register-tab').classList.remove('active');

    document.getElementById(tabName + '-tab').classList.add('active');
}










