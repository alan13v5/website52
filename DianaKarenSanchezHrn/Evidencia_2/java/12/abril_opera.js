const number1 = document.getElementById("num1")
const number2 = document.getElementById("num2")
const suma = document.getElementById("sum")

suma.addEventListener ("click", (e) => {e.preventDefault});

let n1 = number1.value;
let n2 = number2.value;
let sumar = n1 + n2

sum.value = sumar