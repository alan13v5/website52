const num1 = document.getElementById("Num1");
const num2 = document.getElementById("Num2");
const operacion = document.getElementById("Opr");
const resultado = document.getElementById("reslt");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();
    
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let result;

    if (operacion.value == "+") {
        result = n1 + n2;
    } 
    else if (operacion.value == "-") {
        result = n1 - n2;
    } 
    else if (operacion.value == "*") {
        result = n1 * n2;
    } 
    else if (operacion.value == "/") {
        if (n2 !== 0) {
            result = n1 / n2;
        } 
        else {
            result = "Error: La división por cero";
        }
    } 
    else {
        result = "Operación no válida";
    }

    resultado.value = result;
});
