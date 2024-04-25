const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const oper = document.getElementById("operacion");
const result = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let o = oper.value;
    let r;

    switch(o){
        case "+": r = n1 + n2;
        result.value= r;
        break;
        case "-": r = n1 - n2;
        result.value= r;
        break;
        case "*": r = n1 * n2;
        result.value= r;
        break;
        case "/": r = n1 / n2;
        result.value= r;
        break;
        default: result.value = "Operación no valida";
    }
});