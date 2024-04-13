const Edad = document.getElementById("Edad");
const resultado =document.getElementById("resultado");
const btnVerificar =document.getElementById("btnVerificar");

btnVerificar.addEventListener("click", e => {
    e.preventDefault();

    let age = parseInt (Edad.value);
    if (age<18){
        resultado.value = "no puede votar";
    }
    else{
        resultado.value= "puede votar";
    }
})

