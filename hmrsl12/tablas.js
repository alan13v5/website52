const tabla = document.getElementById("tabla");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    let t=parseInt(tabla.value);
    lista.innerHTML="";
    let i=1;
    
    do{
        let item=document.createElement("li");
        item.innerHTML=t+"x"+i+"="+t*i;
        lista.appendChild(item);
        i++;
    }while(i <=10)
});