/*---------------------------------------------------- problema 4------------------------------------------------- */
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");
const btnResult = document.getElementById("btnResult");

btnResult.addEventListener("click", (e) => {
    e.preventDefault();
    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let ope = operacion.value; 
    
    if (ope == "+") {
        resultado.value = n1 + n2;
    } else if (ope == "-") {
        resultado.value = n1 - n2;
    } else if (ope == "*") {
        resultado.value = n1 * n2;
    } else if (ope == "/") {
        resultado.value = n1 / n2;
    }

    else{
        resultado.value = "Agregue un simbolo correcto"
    
    }

});