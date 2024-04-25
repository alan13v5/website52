const edad = document.getElementById("edad");
const resultado = document.getElementById("resultado");
const boton_verificacion = document.getElementById("boton_verificacion");

boton_verificacion.addEventListener("click", e => {
    e.preventDefault();

    let age = parseInt(edad.value);

    if (age < 18) {
        resultado.value = "No puede votar";
    }
    else{
        resultado.value = "Puede votar";
    }
});