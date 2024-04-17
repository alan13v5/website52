const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const opr = document.getElementById("opr");
const res = document.getElementById("res");
const btn = document.getElementById("btn");

btn.addEventListener("click", e => {
    e.preventDefault();

    if (opr.value === "+") {
        let n1 = parseInt(num1.value);
        let n2 = parseInt(num2.value);
        let sum = n1 + n2;

        res.value = sum;
    }

    else if (opr.value === "-") {
        let n1 = parseInt(num1.value);
        let n2 = parseInt(num2.value);
        let resta = n1 - n2;

        res.value = resta;
    }

    else if (opr.value === "/") {
        let n1 = parseInt(num1.value);
        let n2 = parseInt(num2.value);
        let div = n1 / n2;

        res.value = div;
    }

    else if (opr.value === "*") {
        let n1 = parseInt(num1.value);
        let n2 = parseInt(num2.value);
        let mul = n1 * n2;

        res.value = mul;
    }
});
