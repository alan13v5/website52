const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const oper = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", (e) => {
  e.preventDefault();
  
  let n1 = parseFloat(num1.value);
  let n2 = parseFloat(num2.value);
  let op = oper.value

  let res;
  
  if (op === '+') {
      res = n1 + n2;
  } else if (op === '-') {
      res = n1 - n2;
  } else if (op === '*') {
      res = n1 * n2;
  } else if (op === '/') {
      if (n2 !== 0) {
          res = n1 / n2;
        } else {
          res = 'Error: No se puede dividir por cero';
      }
  } else {
      res = 'Operación no válida';
  }
  
  resultado.value = res;
});