const Num1 = document.getElementById("num1")
const Num2 = document.getElementById("num2")
const Operador = document.getElementById("operador")
const Resultado = document.getElementById("resultado")
const Operacion = document.getElementById("btnOperacion")

Operacion.addEventListener("click", e => {
    e.preventDefault();
    const valor1 = parseInt(Num1.value);
    const valor2 = parseInt(Num2.value);
    const oper = Operador.value.trim();
    /* SUMA */
    if (oper == "+" ) {
        res = valor1 + valor2
        Resultado.value = res
    }
    /* RESTA */
    else if (oper == "-" ) {
        res = valor1 - valor2
        Resultado.value = res
    }
    /* MULTIPLICACION */
    else if (oper == "*" ) {
        res = valor1 * valor2
        Resultado.value = res
    }
    /* DIVISION */
    else if (oper == "/" ) {
        res = valor1 / valor2
        Resultado.value = res
    }
    /* POTENCIA */
    else if (oper == "**" ) {
        res = valor1 ** valor2
        Resultado.value = res
    }
    else {
        alert("Operador no Registrado o no Valido")
    }
    

})