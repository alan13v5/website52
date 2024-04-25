const texto = document.getElementById("texto");
const salida = document.getElementById("salida");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let txt = texto.value;
    let letrasA = 0;

    for (i=0; i < txt.length; i++){
        if (txt[i] == "a"){
            letrasA++;
        }
    }

    salida.innerHTML = "Total de letras a " + letrasA;
});