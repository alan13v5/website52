const inicio = document.getElementById("inicio")
const fin = document.getElementById("fin")
const salida = document.getElementById("salida")
const boton = document.getElementById("btncalcular")

boton.addEventListener("click", e =>{
    e.preventDefault();

    let ini= parseInt(inicio.value);
    let f = parseInt(fin.value);

    let result = 0;

    let i = ini
    while(i <= f){
        result += i;
        i++;
    }

    salida.innerHTML = "La suma es:" + result;
});
