const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operador = document.getElementById("operador");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click", e => {
    e.preventDefault();

    let number1 = parseInt(num1.value);
    let number2 = parseInt(num2.value);
    let op = operador.value;
    let result;

    if (op === "+") {
        result = number1 + number2;
    } 
    if (op === "-") {
        result = number1 - number2;
    } 
    if (op === "*") {
        result = number1 * number2;
    } 
    if (op === "/") {
        result = number1 / number2;
    }
    
    resultado.value = result;

});