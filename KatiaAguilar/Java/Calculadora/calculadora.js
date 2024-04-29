const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operacion = document.getElementById("operacion")
const resultado = document.getElementById("resultado")
const btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", e => {
    e.preventDefault();
    const n1 = parseInt(num1.value);
    const n2 = parseInt(num2.value);
    const oper = operacion.value.trim();

    if (oper == "+" ) {
        res = n1 + n2
        resultado.value = res
    }
    else if (oper == "-" ) {
        res = n1 - n2
        resultado.value = res
    }
    else if (oper == "*" ) {
        res = n1 * n2
        resultado.value = res
    }
    else if (oper == "/" ) {
        res = n1 / n2
        resultado.value = res
    }
    else {
        alert("Operador no Registrado o no Valido")
    }
    

})