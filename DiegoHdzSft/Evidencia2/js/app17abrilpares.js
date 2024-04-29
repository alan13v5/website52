const inicio=document.getElementById("inicio");
const fin=document.getElementById("fin");
const serie=document.getElementById("serie");
const gen=document.getElementById("generar")

gen.addEventListener("click", (e)=>{
    e.preventDefault();
    let serie_f="";
    let ini=Number(inicio.value);
    let f=Number(fin.value);

    for(let i=ini; i<=f; i++){
        if(i%2==0){serie_f=serie_f+i+", "}
    };
    serie.value=serie_f;
});