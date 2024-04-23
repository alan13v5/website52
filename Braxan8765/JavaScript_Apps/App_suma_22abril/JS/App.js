const Inicio = document.getElementById("inicio");
const Fin = document.getElementById("fin");
const Salida = document.getElementById("salida");
const Boton = document.getElementById("btnCalcular");

Boton.addEventListener("click", e => {
    e.preventDefault();
    let ini = parseInt(Inicio.value);
    let fn = parseInt(Fin.value);
    let resul = 0;
    let i = ini
    while (i <= fn){
        resul +=i;
        i++;
    }
    Salida.innerHTML = "La suma es: " + resul;
});