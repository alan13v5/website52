function sumar() {
    // Obtener los valores de los números ingresados por el usuario
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
  
    // Comprobar si los valores ingresados son números
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor ingrese dos números válidos.');
      return;
    }
  
    // Realizar la suma
    var resultado = num1 + num2;
  
    // Mostrar el resultado en el campo de resultado
    document.getElementById('resultado').value = resultado;
  }
  