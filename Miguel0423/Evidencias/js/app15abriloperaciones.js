const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", e => {
    e.preventDefault();

    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);
    let op=(operacion.value);

    if (op=="suma"){
        resultado.value = n1+n2;       
        }
    else if (op=="resta"){
        resultado.value = n1-n2;
        }
    else if (op=="multiplicacion"){
        resultado.value = n1*n2;
        }
    else if (op=="division"){
        resultado.value = n1/n2;
        }
    else {
        resultado.value = "operacion no valida"
    }
});
