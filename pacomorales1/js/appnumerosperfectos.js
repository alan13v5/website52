const numeros1 = document.getElementById("numeros1");
const btnResult = document.getElementById("btnResult");
const resultado = document.getElementById("resultado");

btnResult.addEventListener("click", (e) => {
    e.preventDefault();

    let num = Number(numeros1.value);
    let numperfectos = [];

    let cantidad = 2;
    while (numperfectos.length < num) {
        let sumdiv = 1;
        for (let i = 2; i <= Math.sqrt(cantidad); i++) {
            if (cantidad % i === 0) {
                sumdiv += i;
                if (i !== cantidad / i) {
                    sumdiv += cantidad / i;
                }
            }
        }
        if (sumdiv === cantidad) {
            numperfectos.push(cantidad);
        }
        cantidad++;
    };

    resultado.innerHTML = "";
    for (let i = 0; i < numperfectos.length; i++) {
        let item = document.createElement("li");
        item.textContent = numperfectos[i];
        resultado.appendChild(item);
    };
});
