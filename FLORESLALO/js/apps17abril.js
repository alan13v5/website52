
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const oper = document.getElementById("Operacion")
const resul = document.getElementById("Resultado")
const btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let ope = oper.value;
    let r;

    switch (ope) {
    case "+" :  r = n1 + n2;
        resul.value = r;
        break;
    

    case "-" :  r = n1 - n2;
        resul.value = r;
        break;
    

    case "*" :  r = n1 * n2;
        resul.value = r;
        break;
    

    case "/" :  r = n1 / n2;
        resul.value = r;
        break;
    

    default : resul.value = "Operacion no valida"
    

}});