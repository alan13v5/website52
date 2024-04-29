const numperfInput = document.getElementById("numperfectos");
const boton = document.getElementById("btnver");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    const nmp = parseInt(numperfInput.value);
    let num = 1;
    let encontrados = 0;

    lista.innerHTML = "";

    while (encontrados < nmp) {
        let suma = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                suma += i;
            }
        }

        if (suma === num) {
            const item = document.createElement('li');
            item.textContent = num;
            lista.appendChild(item);
            encontrados++;
        }
        num++;
    }
});


