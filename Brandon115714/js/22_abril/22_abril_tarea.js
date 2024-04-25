const numeros = document.getElementById("numeros");
const lista = document.getElementById("lista");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();
    
    const limite = parseInt(numeros.value);
    lista.innerHTML = "";

    for (let num = 2; num <= limite; num++) {
        let divisores = 1;

        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                divisores += i;
            }
        }

        if (divisores === num) {
            const item = document.createElement("li");
            item.textContent = num;
            lista.appendChild(item);
        }
    }
});