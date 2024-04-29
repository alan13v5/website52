const numerop = document.getElementById("numerop");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

btnver.addEventListener("click", e => {
    e.preventDefault();

    const par = parseInt(numerop.value);
    let num=1;
    let encontrado=0;
    while(encontrado<par){
        if(encontrado==0){
            item.innerHTML="";
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
            encontrado++;
        }
        num++;
    }
});