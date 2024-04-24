const numeros = document.getElementById("numeros");
const btnVer = document.getElementById("btnVer");
const lista = document.getElementById("lista");

btnVer.addEventListener("click", e => {
    e.preventDefault();
    
    const limite = parseInt(numeros.value);
    lista.innerHTML = "";

    for (let num = 2; num <= limite; num++) {
        let sumaDivisores = 1;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                sumaDivisores += i;
                if (i !== num / i) {
                    sumaDivisores += num / i;
                }
            }
        }

        if (sumaDivisores === num) {
            const item = document.createElement("li");
            item.textContent = num;
            lista.appendChild(item);
        }
    }
});