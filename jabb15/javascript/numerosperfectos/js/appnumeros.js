const numeros = document.getElementById("numeros");
const lista = document.getElementById("lista");
const boton = document.getElementById("btnGenerar");

boton.addEventListener("click", e => {
    e.preventDefault();

    const np = parseInt(numeros.value);
    let num = 1;
    let rep = 0;

    while(rep < np){
        if(rep == 0){
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
            rep++;
        }
        num++;
    }
});