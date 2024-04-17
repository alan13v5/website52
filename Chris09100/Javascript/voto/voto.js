const edad = document.getElementById("Edad")
const resultado = document.getElementById("Resultado")
const btnComprobar = document.getElementById("btnComprobar")


btnComprobar.addEventListener("click",(e) => {
    e.preventDefault();
    let age = parseInt(edad.value);
    if (age >= 18) {
        resultado.value = "Si puede votar";
    }
    else {
        resultado.value = "No puede votar"
    }
})