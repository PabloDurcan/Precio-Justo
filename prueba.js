let aciertos = 6;
let fallos = 9;

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

 let correcto = document.getElementById("correcto").innerHTML;
 let incorrecto = document.getElementById("incorrecto").innerHTML;


let solo1 = 0;
let arreglo_vuelta = [1,2,3,4,5];
let arreglo_respuesta = [5.14,9.69,8899,5555,3.21];
let arreglo_precioBueno = [5.14,2032,6987,1.02,5.89];

let arreglo_emojis = [];

//Bucle que forma un array con los emojis correcto o incorrecto, sus valores van a estar en la misma posicion de elemento que la de los arreglos de respuesta y de precioBueno
for (let q = 0; q < arreglo_vuelta.length; q++) {
    if (arreglo_respuesta[q] == arreglo_precioBueno[q]) {
        arreglo_emojis.push(correcto);
    }else{
        arreglo_emojis.push(incorrecto);
    }
}


function mostrarResultados(){

    if (solo1 == 0) {
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
                let textoCelda = document.createElement("div");
                textoCelda.classList.add("produc-tabla");
                textoCelda.style.backgroundImage = "Imgs/boli.png";
                celda.appendChild(textoCelda);
                fila.appendChild(celda);
            }
            //Segunda celda segunda columna
            for (let j = 0; j < 1; j++) {
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(arreglo_respuesta[i]);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);
            }
            //tercera celda tercera columna
            for (let j = 0; j < 1; j++) {
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(arreglo_precioBueno[i]);
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
