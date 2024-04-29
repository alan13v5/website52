const num = document.getElementById("numperf");
const btn = document.getElementById("btn");
const salida = document.getElementById("salida");

btn.addEventListener("click", e => {
    e.preventDefault();
    
    let n = parseInt(num.value);
    
    salida.innerHTML = "";
    let perfectos = [];
    for (let i = 2; perfectos.length < n; i++) {
        let acumulador = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j == 0) {
                acumulador += j;
            }
        }
        if (acumulador != 0 && acumulador == i) {
            perfectos.push(i);
        }
    }


    perfectos.forEach(perfecto => {
        let item = document.createElement("li");
        item.textContent = perfecto;
        salida.appendChild(item);
    });

    
});

