function comenzarJuego(){
    document.getElementById("P-inicio").style.display = "none";
    document.getElementById("P-comienzo").style.display = "flex";
}

function Rondas10() { 
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("carta-container").style.display = "flex";
 }

 function Rondas15() { 
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("producto").style.display = "flex";
 }

 function Rondas20() { 
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("producto").style.display = "flex";
 }

 class Producto{
   constructor(precioBueno,precioX,precioY,precioJ,nombre,url){
       this.precioBueno = precioBueno;
       this.precioX = precioX;
       this.precioY = precioY;
       this.precioJ = precioJ;
       this.nombre = nombre;
       this.url = url;
   }
}

const zapatillas = new Producto("12.99","22.59","30.99","21.14","zapatillas","../Imgs/zapatillas.png");

const thor = new Producto("25.99","22.59","30.99","15.14","thor","../Imgs/thor.png");

const cascos = new Producto("75.99","101.68","120.99","125.88","cascos","../Imgs/cascos.png");

const silla = new Producto("12.99","22.59","30.99","21.14","silla","../Imgs/silla.png");

const poco = new Producto("229.99","300.45","259.99","350.99","poco","../Imgs/poco.png");

const ketchup = new Producto("5.99","2.99","4.56","3.34","ketchup","../Imgs/ketchup.png");

const romeo = new Producto("33.900","44.000","40.000","55.000","Alfa Romeo Guilia","../Imgs/romeo.png");

const cupra = new Producto("20.000","25.000","30.000","35.000","Leon Cupra","../Imgs/cupra.png");

const todos_productos = [zapatillas,thor,cascos,silla,poco,ketchup,cupra,romeo];

//Funcion para crear un arreglo con elementos aleatorios, esto servira para que, cada vez que se empieza una partida nueva el orden de los productos que salga sea aleatoriamente, ademas, no se puede repetir ningun producto. ------Fisher–Yates shuffle algorithm-------.
function shuffle(array) {
   var m = array.length,
     t, i;
 
   // While there remain elements to shuffle...
   while (m) {
 
     // Pick a remaining element…
     i = Math.floor(Math.random() * m--);
 
     // And swap it with the current element.
     t = array[m];
     array[m] = array[i];
     array[i] = t;
   }
   return array;
 }
 
 const arreglo = shuffle([zapatillas,thor,cascos,silla,poco,ketchup,cupra,romeo]);
 let n = 0;

function continuar(){
   document.getElementById("wrapper").style.display = "none";
   document.getElementById("carta-container").style.display = "flex";


   let recorre_arreglo = arreglo[n];

   document.getElementById("nom-producto").innerHTML = recorre_arreglo.nombre;
   document.getElementById("nom-producto2").innerHTML = recorre_arreglo.nombre;

   document.getElementById("imagen").style.backgroundImage = "url(" + recorre_arreglo.url + ")"
       
   document.getElementById("precioA").innerHTML = recorre_arreglo.precioBueno;
   document.getElementById("precioB").innerHTML = recorre_arreglo.precioX;
   document.getElementById("precioC").innerHTML = recorre_arreglo.precioY;
   document.getElementById("precioD").innerHTML = recorre_arreglo.precioJ;

   n++;

   document.getElementById("carta-container").style.display = "flex";
}



