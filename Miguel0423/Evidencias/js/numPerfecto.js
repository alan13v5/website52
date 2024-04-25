const numeros = document.getElementById("numeros");
const boton = document.getElementById("btnVer");
const lista = document.getElementById("lista");

boton.addEventListener("click", e => {
    e.preventDefault();
    lista.innerHTML="";

    let num = parseInt(numeros.value);
    for(let i=1; i<=num; i++) {
        let numperfecto=0;
        for(let divi=1; divi<i; divi++) {
            if(i % divi == 0) {
                numperfecto += divi;
            }
        }
        if(numperfecto==i) {
            let item=document.createElement("li");
            item.innerHTML=i;
            lista.appendChild(item);
        }
    }
});