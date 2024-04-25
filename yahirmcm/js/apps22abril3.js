const numeros = document.getElementById("numeros");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();
    
    const limite = parseInt(numeros.value);
    lista.innerHTML = "";

    for (let num = 2; num <= limite; num++) {
        let sumaDivisores = 1;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                sumaDivisores += i;
            }
        }

        if (sumaDivisores === num) {
            const item = document.createElement("li");
            item.innerHTML = num;
            lista.appendChild(item);
        }
    }
});