const can1 = document.getElementById("can1");
const can2 = document.getElementById("can2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let c1 = parseInt(can1.value);
    let c2 = parseInt(can2.value);
    let opr = operacion.value;

    if (opr == "+"){
        resultado.value = c1 + c2;
    }
    else if (opr == "-"){
        resultado.value = c1 - c2;
    }
    else if (opr == "*"){
        resultado.value = c1 * c2;
    }
    else if (opr == "/"){
        resultado.value = c1 / c2;
    }
    else {
        resultado.value = "Operación no válida";
    }
});
