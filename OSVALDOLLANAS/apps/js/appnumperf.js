const numper = document.getElementById("numPerfectos");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    const np = parseInt(numper.value);
    let num=1;
    let veces=0;
    
    while(veces<np){
        if(veces==0){
            lista.innerHTML="";
        }
        let suma=0;
        for(let i =1; i< num; i++){
            if(num%i==0){
                suma += i;
            }
        }
    
        if(suma===num){
            const item = document.createElement('li');
            item.textContent=num;
            lista.appendChild(item);
            veces++;
        }
        num++;
    }
});