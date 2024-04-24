const cantidad = document.getElementById("cantidad");
const btn = document.getElementById("btngenerar");
const lista = document.getElementById("lista");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let cant = Number(cantidad.value);
    let encontrados = [];

    let numero = 2;
    while (encontrados.length < cant) {
        let sumdiv = 1;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                sumdiv += i;
                if (i !== numero / i) {
                    sumdiv += numero / i;
                }
            }
        }
        if (sumdiv === numero) {
            encontrados.push(numero);
        }
        numero++;
    };

    lista.innerHTML = "";
    for (let i = 0; i < encontrados.length; i++) {
        let item = document.createElement("li");
        item.textContent = encontrados[i];
        lista.appendChild(item);
    };
});

