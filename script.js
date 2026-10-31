
const formulario = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

const fecha = document.getElementById("fecha");

// Evitar fechas futuras
fecha.max = new Date().toISOString().split("T")[0];

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensaje.textContent = "";
    mensaje.className = "";

    // Obtener los datos
    const nombre = document.getElementById("nombre").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value;
    const nacimiento = fecha.value;
    const plataforma = document.getElementById("plataforma").value;

    const genero = document.querySelector(
        'input[name="genero"]:checked'
    );

    const juegos = document.querySelectorAll(
        'input[name="juegos"]:checked'
    );

    const terminos = document.getElementById("terminos").checked;

    // Validar nombre
    if (nombre.length < 3) {
        mostrarError("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    // Validar usuario
    if (!/^[A-Za-z0-9_]{3,20}$/.test(usuario)) {
        mostrarError("El usuario debe tener entre 3 y 20 caracteres y solo puede contener letras, números y guion bajo.");
        return;
    }

    // Validar contraseña
    if (password.length < 8) {
        mostrarError("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Validar fecha
    if (!nacimiento || nacimiento > fecha.max) {
        mostrarError("Ingresa una fecha de nacimiento válida.");
        return;
    }

    // Validar género
    if (!genero) {
        mostrarError("Selecciona una opción de género.");
        return;
    }

    // Validar plataforma
    if (!plataforma) {
        mostrarError("Selecciona una plataforma.");
        return;
    }

    // Validar términos
    if (!terminos) {
        mostrarError("Debes aceptar los términos y condiciones.");
        return;
    }

    // Registro exitoso
    mensaje.className = "exito";

    mensaje.textContent =
        "¡Registro exitoso, " + nombre +
        "! Bienvenido a GameZone. 🎮";

    console.log("Datos del registro:", {
        nombre: nombre,
        usuario: usuario,
        correo: correo,
        nacimiento: nacimiento,
        genero: genero.value,
        plataforma: plataforma,
        juegos: Array.from(juegos).map(juego => juego.value),
        descripcion: document.getElementById("descripcion").value
    });

    formulario.reset();

});

function mostrarError(texto) {
    mensaje.className = "error";
    mensaje.textContent = texto;
}
