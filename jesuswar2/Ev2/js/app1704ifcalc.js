
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const signo = document.getElementById("signo")
const resul = document.getElementById("resul");
const btnsumar = document.getElementById("btnsumar");

/* Calcular con dos numeros  "Tarea" */

btnsumar.addEventListener("click", (e) => {
    e.preventDefault();
    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let sig = signo.value;

    if(sig == "+"){
        resul.value = n1 + n2;
    }
    else if(sig == "-"){
        resul.value = n1 - n2
    }
    else if(sig == "/"){
        resul.value = n1 / n2
    }
    else if(sig == "*"){
        resul.value = n1 * n2
    }
    else{
        resul.value="Ingrese un signo"
    }
});

