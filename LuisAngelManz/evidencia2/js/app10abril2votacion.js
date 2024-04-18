const edad =document.getElementById("edad");
const resultado =document.getElementById("resultado");
const btnverificar =document.getElementById("btnverificar");

btnverificar.addEventListener("click", e => {
    e.preventDefault();

    let age = parseInt(edad.value);

    if (age < 18){
        resultado.value = " no puede votar"
    }
    else{
        resultado.value = "Si puede votar"
    }

})