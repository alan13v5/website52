const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", e => {
    e.preventDefault();

    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);
    let o=(operacion.value);
    let r;

    switch (o){
        case "suma": r =n1 + n2;
            resultado.value=r;
            break;
        case "resta": r =n1 - n2;
            resultado.value=r;
            break;
        case "multiplicacion": r =n1 * n2;
            resultado.value=r;
            break;
        case "division": r =n1 / n2;
            resultado.value=r;
            break;
        default:resultado.value= "operacion no valida";
    }
});