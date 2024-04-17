const edad = document.getElementById("edad");
const resultado = document.getElementById("resultado");
const btnVerificar = document.getElementById("btnVerificar");

btnVerificar.addEventListener("click", e => {
    e.preventDefault();

    let age= parseInt(edad.value);
    if (age>17) {
        resultado.value="Puedes votar";
    }
    else{
        resultado.value="No puedes votar";
    }
})