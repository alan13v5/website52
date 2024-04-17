const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operacion = document.getElementById("Operacion")
const resultado = document.getElementById("Resultado")
const btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let ope = operacion.value;

    if (ope == "+") {
        resultado.value = n1 + n2;
    }
    else if (ope == "-") {
        resultado.value = n1 - n2;
    }
    else if (ope == "*") {
        resultado.value = n1 * n2;
    }
    else if (ope == "/") {
        resultado.value = n1 / n2;
    }
    else {
        resultado.value = "signo equivocado"
    }


});
