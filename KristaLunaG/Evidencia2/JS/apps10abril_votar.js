const edad = document.getElementById("edad");
const result = document.getElementById("result");
const btnResul = document.getElementById("btnResul");

btnResul.addEventListener("click", (e) => {
    e.preventDefault();

    let age = parseInt(edad.value);

    if (age<18) {
        result.value = "No puede votar";} 
        else {
        result.value = "Si puede votar "};
});