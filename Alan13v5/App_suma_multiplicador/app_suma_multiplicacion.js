const Tabla = document.getElementById("tabla");
const Boton = document.getElementById("btnVer");
const Lista = document.getElementById("lista");

Boton.addEventListener("click", e => {
    e.preventDefault();
    let T = parseInt(Tabla.value);
    let i = 1;
    Lista.innerHTML = "";
    do {
        let item = document.createElement("li");
        item.textContent = T + " x " + i + " = " + T * i;
        Lista.appendChild(item);
        i++;
    } while (i < 11);
});
