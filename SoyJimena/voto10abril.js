const edad = document.getElementById("edad");
const resultado = document.getElementById("resultado")
const btnverificar = document.getElementById("btnverificar")

btnverificar.addEventListener("click", (e) => {
    e.preventDefault();
    let ed = parseInt(edad.value);
    if (ed > 17) {
        resultado.value = "Puede votar";
    }

    else if (ed <18){
        resultado.value = "No puede votar"
    }
})