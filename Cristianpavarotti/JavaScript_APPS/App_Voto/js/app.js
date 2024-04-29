const edad = document.getElementById("edad")
const resultado = document.getElementById("resultado")
const btnComprobar = document.getElementById("btnComprobar")


btnComprobar.addEventListener("click",(e) => {
    e.preventDefault();
    let age = parseInt(edad.value);
    if (age >= 18) {
        resultado.value = "Puede votar";
    }
    else {
        resultado.value = "No puede votar"
    }
})