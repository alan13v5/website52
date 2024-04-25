const numerosp = document.getElementById("numerosp");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", (e) => {
    e.preventDefault();

    let cant = parseInt(numerosp.value);
    let numper = [];

    let num = 2;

    while (numper.length < cant) {
        let op = 1;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {op += i; 
                if (i !== num / i) {op += num / i}
            }
        }
        if (op === num) {numper.push(num)}
        num++;
    };

    lista.innerHTML = "";

    for (let i = 0; i < numper.length; i++) {
        let item = document.createElement("li");
        item.textContent = numper[i];
        lista.appendChild(item);
    };
});
