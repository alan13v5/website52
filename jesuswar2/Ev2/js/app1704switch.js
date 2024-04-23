const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const signo = document.getElementById("signo")
const resul = document.getElementById("resul");
const btnsumar = document.getElementById("btnsumar");

btnsumar.addEventListener("click", (e) => {
    e.preventDefault();
    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let sig = signo.value; let r;

    switch(sig){
        case "+":r = n1 + n2;
                    resul.value = r;
                    break;
        case "-" : r = n1 - n2;
                    resul.value = r;
                    break;
        case "/" : r = n1 / n2;
                    resul.value = r;
                    break;
        case "*" : r = n1 * n2;
                    resul.value = r;
                    break;
        default:
            resul.value="Operacion no valida";

    }
});