let aciertos = 0;
let fallos = 0;

function terminar() {
    document.getElementById("carta-container").style.display = "none";
    document.getElementById("terminar-div").style.display = "flex";

    clearInterval(idIntervalo);

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
    
    precio_bueno.pop();
 }


//Dos variables que tienen el valor del tick y de la cruz
let correcto = document.getElementById("correcto").innerHTML;
let incorrecto = document.getElementById("incorrecto").innerHTML;

//Variable que nos servira para que solo se muestre 1 vez la tabla de las respuestas, solo se va a ejecutar el display de la tabla cuando la variable valga 0
let solo1 = 0;

//Iniciamos un arreglo que va a tener ticks o cruces en sus elementos a traves de un condicional creado posteriormente
let arreglo_emojis = [];


function mostrarResultados(){
    document.getElementById("terminar-div").style.height = "auto";
    document.getElementById("btn-ver").style.display = "none";
    document.getElementById("btn-ocultar").style.display = "flex";


    if (solo1 == 0) {
        
        //Bucle que forma un array con los emojis correcto o incorrecto, sus valores van a estar en la misma posicion de elemento que la de los arreglos de respuesta y de precioBueno
        for (let q = 0; q < arreglo_vuelta.length; q++) {
          if (respuestas[q] == precio_bueno[q]) {
              arreglo_emojis.push(correcto);
          }else{
              arreglo_emojis.push(incorrecto);
          }
        }


        solo1++;
  
   //Iniciamos una variable que sea el propio cuerpo de la tabla
   let tblBody = document.getElementById("tblBody");
  
   //Dependiendo del numero de rondas que el usuario quiera jugar se ejecutara un i numero de veces este bucle, es decir, el bucle de crear 1 fila y 4 columnas. Si queremos 10 rondas habra 10 filas con 4 columnas cada una
   for (var i = 0; i < arreglo_vuelta.length; i++) {
      
      //Creamos las filas, en este caso solo queremos crear una, por lo tanto el bucle es hasta 1
      for (let y = 0; y < 1; y++) {
          let fila = document.createElement("tr");
          
          //Creamos las celdas, en nuestro caso vamos a crear 4 diferentes porque queremos que tengan textos diferentes, creando 4 celdas en una misma fila, es decir una fila y 4 columnas
          //Primera celda, primera columna
          for (let j = 0; j < 1; j++) {
              let celda = document.createElement("td");
              celda.classList.add("celda-imagen");
              let textoCelda = document.createElement("div");
              textoCelda.classList.add("produc-tabla");
              textoCelda.style.backgroundImage = "url(" + arreglo_fotos[i] + ")";
              celda.appendChild(textoCelda);
              fila.appendChild(celda);
          }
          //Segunda celda segunda columna
          for (let j = 0; j < 1; j++) {
              let celda = document.createElement("td");
              let textoCelda = document.createTextNode(respuestas[i]);
              celda.appendChild(textoCelda);
              fila.appendChild(celda);
          }
          //tercera celda tercera columna
          for (let j = 0; j < 1; j++) {
              let celda = document.createElement("td");
              let textoCelda = document.createTextNode(precio_bueno[i]);
              celda.appendChild(textoCelda);
              fila.appendChild(celda);
          }
      
          //cuarta celda cuarta columna
          for (let j = 0; j < 1; j++) {
              let celda = document.createElement("td");
              let textoCelda = document.createTextNode(arreglo_emojis[i]);
              celda.appendChild(textoCelda);
              fila.appendChild(celda);
          }
          tblBody.appendChild(fila);
      }
   }


  }

  document.getElementById("tabla").style.display = "flex";


}

function ocultarResultados(){
    document.getElementById("btn-ocultar").style.display = "none";
    document.getElementById("btn-ver").style.display = "flex";

    document.getElementById("terminar-div").style.height = "100vh";

    
    document.getElementById("tabla").style.display = "none";
    
    solo1++;
}