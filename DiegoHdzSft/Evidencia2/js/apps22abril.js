const inicio=document.getElementById("inicio");
const fin=document.getElementById("fin");
const salida=document.getElementById("salida");
const boton=document.getElementById("btncalcular");

boton.addEventListener("click", (e)=>{
  e.preventDefault();
  let ini=Number(inicio.value);
  let f=Number(fin.value);

  let resul=0;
  
  let i=ini
  while(i<=f){
    resul +=i
    i++;
  };
  salida.innerHTML="La suma es: "+resul
});