/* El programa genera una serie de numeros pares que se encuentren en el rango */

const ini = document.getElementById ("inicio");
const fin = document.getElementById ("final");
const serie = document.getElementById ("serie");
const btnCalcular = document.getElementById ("btnCalcular");

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let seriefinal = "";
    let inicio = parseInt(ini.value);
    let final = parseInt(fin.value);

    for(let i = inicio; i <= final; i++){
        if(i % 2 == 0){
            seriefinal = seriefinal + i + ",";
        }
    }
    serie.value = seriefinal;
});