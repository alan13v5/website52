/*--------------------------------------------Generador de pares+-------------------------------------------------- */
/* El programa genere una serie de numeros pares que se encuentra en el rango */

const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const serie = document.getElementById("serie");
const generarbtn = document.getElementById("generarbtn");

generarbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let seriefinal="";
    let ini = parseInt (inicio.value);
    let fi = parseInt (fin.value);

    for(let i=ini; i<=fi ; i++){
        if (i%2==0){
            seriefinal=seriefinal + i + ",";
        }
    }
    serie.value=seriefinal;
});