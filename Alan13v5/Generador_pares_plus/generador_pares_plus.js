function generarParesPlus() {
    var start = parseInt(document.getElementById('start').value);
    var end = parseInt(document.getElementById('end').value);
    
    if (isNaN(start) || isNaN(end)) {
      alert('Por favor, introduce números válidos.');
      return;
    }
  
    if (start >= end) {
      alert('El inicio del rango debe ser menor que el fin del rango.');
      return;
    }
  
    var paresPlus = [];
    for (var i = start; i <= end; i++) {
      if (i % 2 === 0) {
        paresPlus.push(i);
      }
    }
  
    mostrarSerie(paresPlus);
  }
  
  function mostrarSerie(serie) {
    var resultDiv = document.getElementById('result');
    if (serie.length === 0) {
      resultDiv.innerHTML = 'No hay pares plus en este rango.';
    } else {
      resultDiv.innerHTML = 'Serie de Pares Plus: ' + serie.join(', ');
    }
  }
  