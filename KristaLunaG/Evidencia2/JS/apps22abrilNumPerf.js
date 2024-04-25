const numeros = document.getElementById("numeros");
const lista = document.getElementById("lista");
const boton = document.getElementById("btnver");

boton.addEventListener("click", (e) => {
    e.preventDefault();

    let cantidad = parseInt(numeros.value);
    let perfectos = [];

    let n = 2;

    while (perfectos.length < cantidad) {
        let op = 1;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {op += i; 
                if (i !== n / i) {op += n / i}
            }
        }
        if (op === n) {perfectos.push(n)}
        n++;
    };

    lista.innerHTML = "";

    for (let i = 0; i < perfectos.length; i++) {
        let item = document.createElement("li");
        item.textContent = perfectos[i];
        lista.appendChild(item);
    };
});