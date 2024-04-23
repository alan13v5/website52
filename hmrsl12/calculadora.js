const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operacion = document.getElementById("Operacion")
const resultado = document.getElementById("Resultado")
const btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let num1 = parseInt (num1.value);
    let num2 = parseInt (num2.value);
    let o = operacion.value;

    if (o == "suma") {
        resultado.value = num1 + num2;
    }
    else if (o == "resta") {
        resultado.value = num1 - num2;
    }
    else if (o == "multiplicacion") {
        resultado.value = num1 * num2;
    }
    else if (o == "division") {
        resultado.value = num1 % num2;
    }
    else {
        resultado.value = "No se puede realizar la operacion"
    }

});