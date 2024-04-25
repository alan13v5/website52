const inicio = document.getElementById("inicio")
const fin = document.getElementById("fin")
const serie = docucument.getElementById("serie")
const boton = document.getElementById("btngenerar")

boton.addEventListener("click", (e) => {
    e.preventDefault();

    let inicio =parseInt(inicio.value);
    let fin =parseInt(fin.value);
    let seriefinal = "";
    
    for (let i=inicio; i<=final;i++){
        if(i / 2 == 0){
            seriefinal = seriefinal + i + ",";
        }
    }
    serie.value = seriefinal;
})