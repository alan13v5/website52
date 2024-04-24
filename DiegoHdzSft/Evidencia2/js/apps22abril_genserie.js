const tabla=document.getElementById("tabla");
const lista=document.getElementById("lista");
const boton=document.getElementById("btnver");

boton.addEventListener("click", (e)=>{
  e.preventDefault();
  let t=Number(tabla.value);
  lista.innerHTML="";
  let i=1;
  do{
    let item=document.createElement("li")
    item.innerHTML= t+"x"+i+"="+t*i;

    lista.appendChild(item);
    i++;
  }while(i<=10);
});