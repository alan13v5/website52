/*------------------------------------------------- Problema 8 -------------------------------------------------------*/
/* Ciclos Con Listas */

const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const salida = document.getElementById("salida");
const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", e => {
    e.preventDefault();

    let ini = parseInt(inicio.value);
    let fi = parseInt(fin.value);

    let result = 0;

    let i = ini
    while(i <= fi ){
        result += i;
        i++;

    }
    salida.innerHTML= "La suma es: " + result;



});
