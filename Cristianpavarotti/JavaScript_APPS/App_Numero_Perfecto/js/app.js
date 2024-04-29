const Perfecto = document.getElementById("Num_perfecto");
const Boton = document.getElementById("btnVer");
const Lista = document.getElementById("lista");

Boton.addEventListener("click",e => {
    e.preventDefault();
    Lista.innerHTML = '';
    let P = parseInt(Perfecto.value);
    for (let i = 2; i <= P; i++) {
        let sumaDivisores = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                sumaDivisores += j;
            }
        }
        if (sumaDivisores === i) {
            let item = document.createElement("li")
            item.innerHTML = i + " Es perfecto";
            Lista.appendChild(item);
        }
    }
});