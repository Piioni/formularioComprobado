function validarPrompt(form, campo, mensaje, valid) {
    alert(mensaje);
    const campo_x = document.getElementById(campo);
    if (!valid) {
        campo_x.style.borderColor = "darksalmon";
    } else campo_x.style.borderColor = "darkseagreen";
}

function validarEmail(form) {
    const campo_x = document.getElementById("email");
    campo_x.style.borderColor = "";
    const email = form.email.value.trim();
    if (email === "" || email.length === 0 || email.indexOf("@") === -1) {
        validarPrompt(form, "email", "Introduce un email correcto", false)
        return false;
    } else {
        validarPrompt(form, "email", "Email Correcto!", true)
        return true;
    }
}

function validarPasswd(form) {
    const campo_x = document.getElementById("passwd");
    campo_x.style.borderColor = "";
    const password = form.passwd.value.trim();
    if (password.length < 5 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        validarPrompt(form, "passwd", "Introduce una contraseña que tenga al menos 5 caracteres, 1 May, 1 Min y un Numero!", false)
        return false;
    } else {
        validarPrompt(form, "passwd", "Contraseña Valida!", true)
        return true;
    }
}

function validarUsername(form) {
    const campo_x = document.getElementById("username");
    campo_x.style.borderColor = "";
    const username = form.username.value;
    if (username.length < 3 || username === "") {
        validarPrompt(form, "username", "Introduce un Username mayor a 3 caracteres.", false)
        return false;
    } else {
        validarPrompt(form, "username", "UserName Valido!", true)
        return true;
    }
}

function validarNombre(form) {
    const campo_x = document.getElementById("nombre_apellidos");
    campo_x.style.borderColor = "";
    const nombre = form.nombre_apellidos.value;
    if (nombre.length === 0 || nombre === "") {
        validarPrompt(form, "nombre_apellidos", "Introduce un nombre", false)
        return false;
    } else {
        validarPrompt(form, "nombre_apellidos", "Nombre y apellidos valido!", true)
        return true;
    }
}

function enviarForm(form, button) {
    let form_valido = true;
    if (!validarEmail(form)) form_valido = false;
    if (!validarPasswd(form)) form_valido = false;
    if (!validarUsername(form)) form_valido = false;
    if (!validarNombre(form)) form_valido = false;

    if (form_valido) {
        alert("Todo correcto, el formulario se enviara")
        button.document.enviar(form)
    } else{
        alert("Hay errores en el formulario!")
    }
}

function resetearBordes() {
    const campos = document.querySelectorAll("input[type='text'], input[type='password'], input[type='email']")
    campos.forEach(campo => {
        campo.style.borderColor = "beige";
    })
}

document.querySelector("form").addEventListener("submit", enviarForm);
document.querySelector("form").addEventListener("reset", resetearBordes);