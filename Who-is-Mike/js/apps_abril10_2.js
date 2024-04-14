const edad = document.getElementById("age");
const resultado = document.getElementById("result");
const btnverificar = document.getElementById("btnverificar");

btnverificar.addEventListener("click", e => {
    e.preventDefault();

    let age =parseInt(age.value);
    if (age > 18){
        result.value = "No es apto para votar "
    }
    else{
        result.value = "Puede votar "
    }
});