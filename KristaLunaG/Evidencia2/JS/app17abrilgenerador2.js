const ini = document.getElementById('inicio');
const fin = document.getElementById('fin');
const serie = document.getElementById('serie');
const boton = document.getElementById('btnGenerar');

boton.addEventListener("click", (e) => {
    e.preventDefault();

    let inicio = parseInt(ini.value);
    let final = parseInt(fin.value);
    let ser = "";

    for (let i=inicio; i<=final; i++){

        if (i%2==0){
            ser = ser + i + ',';
        }
    };
    serie.value = ser;
});