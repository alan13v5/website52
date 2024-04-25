const numeros = document.getElementById("numeros");
const numerosperfectos = document.getElementById("lista");
const boton = document.getElementById("generar");

boton.addEventListener("click", e => {
    e.preventDefault();
    let nums = parseInt(numeros.value);
    let iniperf = 2;
    let perfectos = [];

    const esperfecto = (numero) => {
        let sum = 1;
        for (let i = 2; i * i <= numero; i++) {
            if (numero % i === 0) {
                sum += i;
                if (i !== numero / i) {
                    sum += numero / i;
                }
            }
        }
        return sum === numero;
    };

    numerosperfectos.innerHTML = "";

    while (nums > 0) {
        if (esperfecto(iniperf)) {
            const listItem = document.createElement("li");
            listItem.textContent = iniperf;
            numerosperfectos.appendChild(listItem);
            nums--;
        }
        iniperf++;
    }

    if (numerosperfectos.children.length === 0) {
        const listItem = document.createElement("li");
        listItem.textContent = "No se encontraron números perfectos.";
        numerosperfectos.appendChild(listItem);
    }
});
