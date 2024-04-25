const numper = document.getElementById("numP");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();

    const np = parseInt(numP.value);
    let num=1;
    let encontrados=0;

    while(encontrados<np){
        if(encontrados==0){
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
            eoncontrados++;
        }
        num++;
    }
});