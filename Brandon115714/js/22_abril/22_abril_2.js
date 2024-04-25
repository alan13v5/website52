const tabla = document.getElementById("tabla");
const lista = document.getElementById("li");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let t = parseInt(tabla.value);

    lista.innerHTML = "";
    let i = 1;
    do {
        let item = document.createElement("li");
        item.innerHTML = t + "X" + i + "=" + t*i;
    
        lista.appendChild(item);
        i++;
    }while( i <= 10);

});
