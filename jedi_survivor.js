window.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const userOptions = document.querySelector(".user-options");

    if (loggedInUser) {
        // Si el usuario ha iniciado sesión, muestra su nombre y un enlace para cerrar sesión
        userOptions.innerHTML = `<span>Bienvenido, ${loggedInUser}</span> | <a href="#" onclick="logout()">Cerrar sesión</a>`;
    }
});

function logout() {
    localStorage.removeItem("loggedInUser"); // Elimina el estado de la sesión

    // Vuelve a mostrar los enlaces "Iniciar sesión" y "Registrarse"
    const userOptions = document.querySelector(".user-options");
    userOptions.innerHTML = `<a href="iniciosesion.html">Iniciar Sesión</a> | <a href="#">Registrarse</a>`;
}

