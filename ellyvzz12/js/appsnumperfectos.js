const num = document.getElementById("num");
const btnVer = document.getElementById("btnVer");
const lista = document.getElementById("lista");

btnVer.addEventListener("click", e => {
    e.preventDefault();

    let numero = Number(num.value);
    let numPer = [];
    let cant = 2;
    while (numPer.length < numero){
        let sumaDivisores = 1;
        for (let i=2; i<= Math.sqrt(cant); i++) {
            if (cant % i === 0){
                sumaDivisores += i;
                if (i !== cant / i){
                    sumaDivisores += cant / i;
                }
            }
        }
        if(sumaDivisores === cant){
            numPer.push(cant);
        }
        cant++;
    };

    lista.innerHTML = "";
    for (let i = 0; i<numPer.length; i++){
        let item = document.createElement("li");
        item.textContent = numPer[i];
        lista.appendChild(item);
    };
});
