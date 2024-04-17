const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const operacion = document.getElementById("Operacion")
const resultado = document.getElementById("Resultado")
const btnCalculo = document.getElementById("btnCalculo")

btnCalculo.addEventListener("click", (e) => {
    e.preventDefault();

    let num1 = parseInt (numero1.value);
    let num2 = parseInt (numero2.value);
    let op = operacion.value;

    if (op == "suma") {
        resultado.value = num1 + num2;
    }
    else if (op == "resta") {
        resultado.value = num1 - num2;
    }
    else if (op == "multiplicacion") {
        resultado.value = num1 * num2;
    }
    else if (op == "division") {
        resultado.value = num1 / num2;
    }
    else {
        resultado.value = "Operacion Equivocada"
    }

});