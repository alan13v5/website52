const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    let o = operacion.value;
    
    switch(o) {
        case '+':
            let sum = n1 + n2;
            resultado.value = sum;
            break
        case '-':
            let res = n1 - n2;
            resultado.value = res;
            break
        case '*':
            let mul = n1 * n2;
            resultado.value = mul;
            break
        case '/':
            let div = n1 / n2;
            resultado.value = div;
            break
        default:
            resultado.value = 'Operacion no valida';
    }

});