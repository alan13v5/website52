const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const btncalcular = document.getElementById("btncalcular"); 

btncalcular.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt (num1.value); 
    let n2 = parseInt (num2.value);
    let sum = n1 + n2;
    let rest = n1 - n2;
    let mult = n1 * n2;
    let div = n1 / n2; 
    let op = operacion.value; 
    
    if (op == "suma") {
        resultado.value = sum;
    } else if (op == "resta") {
        resultado.value = rest;
    } else if (op == "multiplicacion") {
        resultado.value = mult;
    } else if (op == "division") {
        resultado.value = div;
    }

});