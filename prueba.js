let aciertos = 0;
let fallos = 0;

function terminar() { 
    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i] == precio_bueno[i]) {
            aciertos++;
        } 
    }

    for (let i = 0; i < respuestas.length; i++) {
      if (respuestas[i] != precio_bueno[i]) {
          fallos++;
      } 
  }

   document.getElementById("aciertos").textContent = aciertos;
   document.getElementById("aciertos").textContent = aciertos;

 }