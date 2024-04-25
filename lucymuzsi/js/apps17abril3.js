const inicio = document.getElementById("inicio");
const final = document.getElementById("final");
const serie = document.getElementById("serie");
const boton = document.getElementById("btngenerar"); 

boton.addEventListener("click", e => {
    e.preventDefault(); 

    let ini = parseInt(inicio.value);
    let fin = parseInt(final.value); 
    let seriefinal= "";

    for (let i= ini; i<= fin; i ++){
        if (i%2 == 0){
            seriefinal=seriefinal + i + ",";
        }
    }

    serie.value=seriefinal;
})