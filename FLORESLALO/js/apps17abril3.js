const ini = document.getElementById("Inicio");
const fin = document.getElementById("Fin");
const serie = document.getElementById("Serie");
const btngenerar = document.getElementById("btnGenerar");

btngenerar.addEventListener("click", e => {
    e.preventDefault();

    let seriefinal = "";
    let inicioNum = parseInt(ini.value);
    let finalNum = parseInt(fin.value);

    for (let i = inicioNum; i <= finalNum; i++) {
        if (i % 2 == 0) {
            seriefinal = seriefinal + i + ",";
        }
    }
    serie.value = seriefinal.slice(0, -1); 
});