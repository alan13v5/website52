const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("opr");
const res = document.getElementById("res");
const btn = document.getElementById("btn");

btn.addEventListener("click", e => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let o = op.value;
    let r;

    switch(o) {
        case "+":
            r = n1 + n2;
            res.value = r;
            break;
        case "-":
            r = n1 - n2;
            res.value = r;
            break;
        case "*":
            r = n1 * n2;
            res.value = r;
            break;
        case "/":
            if (n2 !== 0) {
                r = n1 / n2;
                res.value = r;
            } else {
                res.value = "No se puede dividir por cero";
            }
            break;
        default:
            res.value = "Operación no válida";
            break;
    }
});