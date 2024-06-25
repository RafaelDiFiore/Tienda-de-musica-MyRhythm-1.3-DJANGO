function validarFormulario() {
    var rut = document.getElementById("rut").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;

    // Validar que todos los campos estén completos
    if (rut === "" || apellidoPaterno === "" || apellidoMaterno === "" || nombre === "" || fechaNacimiento === "" || edad === "" || genero === "" || email === "" || celular === "" || motivacion === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    }

    // Validar que el rut tenga el largo adecuado
    const rut = "123456789012";

    if (rut.length === 12) {
    console.log("El RUT tiene el largo correcto.");
    } else {
    console.log("El RUT no tiene el largo correcto.");
    }


    // Validar formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return false;
    }

    // Validar que la edad sea un número
    if (isNaN(edad)) {
        alert("Por favor, ingresa una edad válida.");
        return false;
    }

    // Validar que la edad sea mayor o igual a 18
    if (parseInt(edad) < 18) {
        alert("Debes tener al menos 18 años para postularte.");
        return false;
    }

    return true;
}