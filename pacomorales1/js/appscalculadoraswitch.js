/* Switch */
/* La estructua condicional switch, se utiliza cuando se necesita ejecutar varios bloques de codigo
    dependiendo del valor que tenga una variable */

    const num1 = document.getElementById("numero1")
    const num2 = document.getElementById("numero2")
    const operacion = document.getElementById("Operacion")
    const resultado = document.getElementById("Resultado")
    const btnCalculo = document.getElementById("btnCalculo")
    
    btnCalculo.addEventListener("click", e => {
        e.preventDefault();
    
        let n1 = parseInt(num1.value);
        let n2 = parseInt(num2.value);
        let o = operacion.value;
        let r;
    
        switch(o){
            case "+": r= n1 + n2;
            resultado.value = r;
            break;
    
            case "-": r= n1 - n2;
            resultado.value = r;
            break;
    
            case "*": r= n1 * n2;
            resultado.value = r;
            break;
    
            case "/": r= n1 / n2;
            resultado.value = r;
            break;
    
        default:
            resultado.value= "Operacion no valida";
        }
    });