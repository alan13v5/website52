/* El programa genera una serie de numeros pares que se encuentren en el rango. */

const inicio = document.getElementById("Inicio");
const fin = document.getElementById("Fin");
const serie = document.getElementById("Serie");
const btngenerar = document.getElementById("btnGenerar");

btngenerar.addEventListener("click", e => {
    e.preventDefault();

    let seriefinal = "";
    let inicioNum = parseInt(inicio.value);
    let finalNum = parseInt(fin.value);

    for (let i = inicioNum; i <= finalNum; i++) {
        if (i % 2 == 0) {
            seriefinal = seriefinal + i + ",";
        }
    }
    serie.value = seriefinal.slice(0, -1); 
});
