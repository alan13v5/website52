const edad=document.getElementById("edad")
const resultado=document.getElementById("resultado")
const btnVotar=document.getElementById("btnVotar")

btnVotar.addEventListener("click", (e)=>{
    e.preventDefault();
    let ed=Number(edad.value);
    if(ed>=18){resultado.value="Puede votar"}
    else{resultado.value="No puede Votar"};
});