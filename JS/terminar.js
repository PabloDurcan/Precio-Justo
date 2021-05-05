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
    
    precio_bueno.pop();
 }


let correcto = document.getElementById("correcto").innerHTML;
let incorrecto = document.getElementById("incorrecto").innerHTML;

let solo1 = 0;

let arreglo_emojis = [];





function mostrarResultados(){
    console.log(respuestas.length,precio_bueno.length,arreglo_vuelta.length);
    
    if (solo1 == 0) {
        
        //Bucle que forma un array con los emojis correcto o incorrecto, sus valores van a estar en la misma posicion de elemento que la de los arreglos de respuesta y de precioBueno
        for (let q = 0; q < arreglo_vuelta.length; q++) {
          if (respuestas[q] == precio_bueno[q]) {
              arreglo_emojis.push(correcto);
          }else{
              arreglo_emojis.push(incorrecto);
          }
        }

        
      document.getElementById("tabla").style.display = "";
      solo1++;
  
   //Iniciamos una variable que sea el propio cuerpo de la tabla
   let tblBody = document.getElementById("tblBody");
  
   for (var i = 0; i < arreglo_vuelta.length; i++) {
      
      //Creamos las filas, en este caso solo queremos crear una, por lo tanto el bucle es hasta 1
      for (let y = 0; y < 1; y++) {
          let fila = document.createElement("tr");
          
          //Creamos las celdas, en nuestro caso vamos a crear 3 diferentes porque queremos que tengan textos diferentes, creando 3 celdas en una misma fila, es decir una fila y 3 columnas
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

}