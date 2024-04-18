const boton=document.getElementById("btngenerar")

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    for(let i=2; i<=1000000; 1+=2){
        console.log(i);
    };
});