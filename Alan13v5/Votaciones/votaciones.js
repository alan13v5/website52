function checkVotingEligibility() {
    var age = parseInt(document.getElementById('age').value);
  
    if (age >= 18) {
      document.getElementById('resultado').value = "Puedes votar";
    } else if (age >= 0 && age <= 17) {
      document.getElementById('resultado').value = "No puedes votar";
    } else {
      alert('Por favor ingrese una edad válida.');
    }
  }
  
