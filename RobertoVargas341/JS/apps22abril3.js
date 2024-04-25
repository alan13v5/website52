const verBtn = document.getElementById("verBtn");
const numerosPerfectosList = document.getElementById("np");
const limiteInput = document.getElementById("limite");

verBtn.addEventListener("click", e => {
    e.preventDefault();

    const limite = parseInt(limiteInput.value);
    

    numerosPerfectosList.innerHTML = "";

    let contador = 0;

    let i = 1;
    while (i <= limite) {
        let suma = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                suma += j;
            }
        }

        if (suma === i && suma !== 0) {
            const listItem = document.createElement("li");
            listItem.textContent = i;
            numerosPerfectosList.appendChild(listItem);
            contador++;
        }

        i++;
    }
});