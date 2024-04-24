const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op =  document.getElementById("op");
const resultado =  document.getElementById("resultado");
const btnCalcular =  document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let operacion = op.value;

    let sum = n1 + n2;
    let res = n1 - n2;
    let mult = n1 * n2;
    let div = n1 / n2;

    switch (operacion){
        case "+": 
            resultado.value = sum;
            break;
        case "-": 
            resultado.value = res;
            break;
        case "*": 
            resultado.value = mult;
            break;
        case "/": 
            resultado.value = div;
            break;
        default:
            resultado.value = "Operacion no valida";   
    }
});