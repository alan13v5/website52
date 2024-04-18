const ini = document.getElementById("inicio");
const fn = document.getElementById("fin");
const serie = document.getElementById("serie");

const boton = document.getElementById("btngenerar");
boton.addEventListener("click", e => {
    e.preventDefault();

    let seriefinal="";
    let inicio=parseInt(ini.value);
    let final=parseInt(fn.value);

    for(let i=inicio; i<=final; i++){
        if(i%2==0){
            seriefinal=seriefinal + i + ",";
        }
    }
    serie.value=seriefinal;
}); 