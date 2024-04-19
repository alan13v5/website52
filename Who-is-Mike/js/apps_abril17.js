const num1 = document.getElementById("Num1");
const num2 = document.getElementById("Num2");
const operacion = document.getElementById("Opr");
const resultado = document.getElementById("reslt");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let o = operacion.value; let r;
    switch (o) {
        case "+": r = n1 + n2;
                resultado.value = r;
                break;
        case "-" : r = n1 - n2;
                resultado.value = r;
                break;
        case "*" : r = n1 * n2;
                resultado.value = r;
                break;
        case "/" : r = n1 / n2;
                resultado.value = r;
                break;
        default:
            resultado.value = "Error en la operación";
    }
});
