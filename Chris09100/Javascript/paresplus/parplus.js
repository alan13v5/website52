const Inicio = document.getElementById("inicio")
const Fin = document.getElementById("fin")
const Serie = document.getElementById("serie")
const Generar = document.getElementById("btnGenerar")

Generar.addEventListener("click", e => {
    e.preventDefault();
    let inicio = parseInt(Inicio.value);
    let final = parseInt(Fin.value);
    let seriefinal = "";
    for (let i=inicio; i<=final;i++){
        S = Serie.value
        if (i % 2 == 0){
            seriefinal = seriefinal + i + ","
        }
    }
    Serie.value = seriefinal
});
