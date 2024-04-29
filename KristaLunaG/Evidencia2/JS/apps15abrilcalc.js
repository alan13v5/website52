const num1=document.getElementById("num1");
const simbolo=document.getElementById("simbolo");
const num2=document.getElementById("num2");
const resultado=document.getElementById("resultado");
const btnCalcular=document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (e)=>{
    e.preventDefault();

    let n1 = Number(num1.value);
    let sim = simbolo.value;
    let n2 = Number(num2.value);

    if (sim=="+"){resultado.value=n1+n2}
    else if(sim=="-"){resultado.value=n1-n2}
    else if(sim=="*"){resultado.value=n1*n2}
    else if(sim=="/"){resultado.value=n1/n2}
    else{resultado.value="Operacion no valida"}

});