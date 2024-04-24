const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const oper = document.getElementById("opera");
const reslt = document.getElementById("result");
const boton = document.getElementById("encontrar");

boton.addEventListener("click", e =>{
    e.preventDefault();

    let n1 = parseInt(num1.value)
    let n2 = parseInt(num2.value)
    let o = oper.value
    let r ;

    switch(o){
        case "+" : r = n1 + n2
        reslt.value =r;
        break;
        case "-" : r = n1-n2
        reslt.value = r;
        break;
        case "*" : r = n1*n2
        reslt.value = r;
        break;
        case "/" : r = n1/n2
        reslt.value = r;
        break;
        
        default: reslt.value = "operacion no valida";

    } 
})
