let aciertos = 0;
let fallos = 0;

function terminar() {
    document.getElementById("carta-container").style.display = "none";
    document.getElementById("terminar-div").style.display = "inline";


    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] == precio_bueno[i]) {
            aciertos++;
        }
        document.getElementById("aciertos").textContent = aciertos;
        
    }

    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] != precio_bueno[i]) {
            fallos++;
            
        }
        document.getElementById("fallos").textContent = fallos;
        
    }


 }