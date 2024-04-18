
const num1=document.getElementById("num1");
const simbolo=document.getElementById("simbolo");
const num2=document.getElementById("num2");
const resultado=document.getElementById("resultado");
const btncalcular=document.getElementById("btncalcular");

btncalcular.addEventListener("click", (e)=>{
    e.preventDefault();
    simbolo.maxLength=1;
    let n1=Number(num1.value);
    let operacion=simbolo.value;
    let n2=Number(num2.value);
    if (operacion=="+"){resultado.value=n1+n2}
    else if(operacion=="-"){resultado.value=n1-n2}
    else if(operacion=="*"){resultado.value=n1*n2}
    else if(operacion=="/"){resultado.value=n1/n2}
    else{resultado.value="Operacion no valida :c"}

});