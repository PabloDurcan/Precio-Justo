let aciertos = 0;
let fallos = 0;

function terminar() {
    document.getElementById("carta-container").style.display = "none";
    document.getElementById("terminar-div").style.display = "flex";


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

    let total_respuestas = aciertos + fallos;

    let total_puntuacion = (aciertos * 100) / total_respuestas;
    total_puntuacion.toFixed(2);

    document.getElementById("puntuacion").textContent = total_puntuacion;

    document.getElementById("barra-puntuacion").style.width = `${total_puntuacion}%`;
    
 }