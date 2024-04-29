const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const salida = document.getElementById("salida");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let ini = parseInt(inicio.value);
    let end = parseInt(fin.value);

    let result = 0;

    let i = ini
    while(i <= end){
        result += i;
        i++;
    }
    salida.innerHTML = "la suma es: " + result;
});