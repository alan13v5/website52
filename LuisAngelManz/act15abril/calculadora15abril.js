const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado")
const btncalcular = document.getElementById("btncalcular");

btncalcular.addEventListener("click", e => {
    e.preventDefault();

   if(operacion.value =="+"){
    let n1 = parseInt (numero1.value);
    let n2 = parseInt (numero2.value);
    let sumatoria = n1 + n2
    resultado.value = sumatoria
    }
   else if(operacion.value =="-"){
    let n1 = parseInt (numero1.value);
    let n2 = parseInt (numero2.value);
    let resta = n1 - n2
    resultado.value = resta
    }
   else if(operacion.value =="*"){
    let n1 = parseInt (numero1.value);
    let n2 = parseInt (numero2.value);
    let multiplicacion = n1 * n2
    resultado.value = multiplicacion
    }
   else if(operacion.value =="/"){
    let n1 = parseInt (numero1.value);
    let n2 = parseInt (numero2.value);
    let division = n1 / n2
    resultado.value = division
    }
    else{
    resultado.value = "opcion no valida"
    }


    
    
  

})