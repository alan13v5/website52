const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const salida = document.getElementById("salida");
const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(inicio.value);
    let finn = parseInt(fin.value);
    let resul = 0;
    let i = ini
    while(i <= finn){
     resul += i;
     i++;
    }
    salida.innerHTML = "La suma es: " + resul;
});
