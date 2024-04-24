const boton = document.getElementById("boton");
boton.addEventListener("click",e=>{
    e.preventDefault();
    for(let i=100000;i>=2;i-=2){
        console.log(i);
    }

})