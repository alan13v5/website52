/* El programa genera una serie de numeros pares 
que se encuentran en el rango */

const start = document.getElementById("inicio");
const end = document.getElementById("fin");
const serie = document.getElementById("serie");
const boton = document.getElementById("btngen");

boton.addEventListener("click", e => {
    e.preventDefault();

    let serie_final = "";
    let inicio = parseInt(start.value);
    let final = parseInt(end.value);

    for (let i=inicio; i<=final;i++) {
        if (i % 2 == 0) {
            serie_final = serie_final + i + ",";
        }
    }
    serie.value = serie_final;
});
