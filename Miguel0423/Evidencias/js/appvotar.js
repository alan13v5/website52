const edad = document.getElementById("edad");
const resultado = document.getElementById("resultado");
const btnvotar = document.getElementById("btnvotar");

btnvotar.addEventListener("click", e => {
    e.preventDefault();

    let age = parseInt(edad.value);
    
    if (age>18){
        resultado.value = "Puede votar";
    }
    else{
        resultado.value = "Aun no puede votar";
    }
});