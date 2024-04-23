/* El programa genera una serie de numeros pares  */

const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const serie = document.getElementById("serie");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let seriefinal ="";
    let start = parseInt(inicio.value);
    let end = parseInt(fin.value);

    for(let i = start; i <= end; i++){
        if (i % 2 == 0){  
            seriefinal = seriefinal + i + ",";
        }
    }
    serie.value = seriefinal;

});