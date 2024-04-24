
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const oper = document.getElementById("operacion");
const result = document.getElementById("resultado");
const btnoperacion = document.getElementById("btnoperacion");

btnoperacion.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let o = oper.value; let r;

    switch(o){
        case "+" : r = n1 + n2;
                   result.value = r;
                   break;
        case "-" : r = n1 - n2;
                   result.value = r;
                   break;
        case "*" : r = n1 * n2;
                   result.value = r;
                   break;
        case "/" : r = n1 / n2;
                   result.value = r;
                   break;
        default:
            result.value = "Operación no valida";
    }
});