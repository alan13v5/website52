const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const oper = document.getElementById("operacion");
const result = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  let n1 = parseFloat(num1.value);
  let n2 = parseFloat(num2.value);
  let op = operacion.value;

  let res;

  switch (op) {
    case "+":
      res = n1 + n2;
      result.value = res;
      break;
    case "-":
      res = n1 - n2;
      result.value = res;
      break;
    case "*":
      res = n1 * n2;
      result.value = res;
      break;
    case "/":
      if (n2 !== 0) {
        res = n1 / n2;
        result.value = res;
      } else {
        res = "Error: No se puede dividir por cero";
      }
      break;
    default:
      res = "Operación no válida";
  }

  result.value = res;
});