
const btn = document.getElementById("btnGenerar")

btn.addEventListener("click",e =>{
    e.preventDefault();

    for(let i=2; i <= 1000000; i+=2){
        console.log(i);
    }
});