arreglo_vuelta = [];

//Funciones para implementar cuantas rondas (productos) se quieren jugar
var seg_vuelta = 15;
document.getElementById("rondas10").addEventListener("click", function() {
   ronda = 10;
   for (let i = 0; i < 10 ; i++) {
      arreglo_vuelta.push(i);
   }

   //Comienzo el intervalo de 60 segundos por ronda
      idIntervalo = setInterval(() => {
         if (seg_vuelta == 0) {
            seg_vuelta = 15;
            x = "Tiempo";
            continuar();
        }
         seg_vuelta--;
         document.getElementById("sec-ronda").textContent = seg_vuelta;
      }, 1000);
   
});


document.getElementById("rondas15").addEventListener("click", function() {
   ronda = 15;
   for (let i = 0; i < 15 ; i++) {
      arreglo_vuelta.push(i);
   }
});

document.getElementById("rondas20").addEventListener("click", function() {
   ronda = 20;
   for (let i = 0; i < 20 ; i++) {
      arreglo_vuelta.push(i);
   }
});