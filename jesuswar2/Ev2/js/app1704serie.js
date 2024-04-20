const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const serie = document.getElementById("serie")
const btngenerar = document.getElementById("btngenerar");

btngenerar.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let f = parseInt(fin.value);
    let serief = "";

    for(let i = ini; i<=f; i++){
        if(i%2 == 0){
            serief = serief + i+",";
        }
    }
    serie.value = serief;
});