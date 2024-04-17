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
    
    if (operacion == '+' || (operacion == 's' || operacion == 'S')){
        resultado.value = sum;
    }
    else if (operacion == '-' || (operacion == 'r' || operacion == 'R')){
        resultado.value = res;
    }
    else if (operacion == '*' || (operacion == 'm' || operacion == 'M')){
        resultado.value = mult;
    }
    else if (operacion == '/' || (operacion == 'd' || operacion == 'D')){
        resultado.value = div;
    }
    else{
        resultado.value = "Operación NO válida";
    }
    
});