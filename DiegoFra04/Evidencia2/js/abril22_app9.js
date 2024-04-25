/*-------------------------------------------------Problema 9----------------------------------------------------- */
/* Tablas de multiplicacion */
const tabla = document.getElementById("tabla");
const boton = document.getElementById("btnVer");
const Lista = document.getElementById("Lista");

boton.addEventListener("click", e => {
    e.preventDefault();
    let t = parseInt(tabla.value);
    Lista.innerHTML = "";
    let i = 1;
    do{
        let item = document.createElement("li");
        item.innerHTML = t + "X" + i + "=" + t * i;

        Lista.appendChild(item);
         i++;
    }while(i <= 10);


});