const Num1 = document.getElementById("num1")
const Num2 = document.getElementById("num2")
const Operador = document.getElementById("operador")
const Resultado = document.getElementById("resultado")
const Operacion = document.getElementById("btnOperacion")

Operacion.addEventListener("click", e => {
    e.preventDefault();
    let valor1 = parseInt(Num1.value);
    let valor2 = parseInt(Num2.value);
    let oper = Operador.value.trim();
    let resul;
    switch (oper) {
        case "+":
            resul = valor1 + valor2
            Resultado.value = resul
            break;
        case "-":
            resul = valor1 - valor2
            Resultado.value = resul
            break;
        case "*":
            resul = valor1 * valor2
            Resultado.value = resul
            break;
        case "/":
            resul = valor1 / valor2
            Resultado.value = resul
            break;
        case "**":
            resul = valor1 ** valor2
            Resultado.value = resul
            break;
        default:
            Resultado.value = "Operacion no valida";
            break;
    }
});