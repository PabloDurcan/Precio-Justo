function comenzarJuego(){
    document.getElementById("P-inicio").style.display = "none";
    document.getElementById("P-comienzo").style.display = "flex";
}



 /*-------------CREAMOS LA CLASE PRODUCTO---------------*/
 class Producto{
   constructor(precioBueno,precioX,precioY,precioJ,nombre,url){
      /*Hay 4 tipos de precios, 3 que seran los falsos y 1 que sera el verdadero: "precioBueno"*/ 
       this.precioBueno = precioBueno;
       this.precioX = precioX;
       this.precioY = precioY;
       this.precioJ = precioJ;
       this.nombre = nombre;
       this.url = url;
   }
}
/*-----------CREAMOS LOS OBJETOS A TRAVES DE LA CLASE CREADA ANTERIORMENTE----------------*/
const zapatillas = new Producto("12.99","22.59","30.99","21.14","zapatillas","Imgs/zapatillas.png");
const thor = new Producto("25.99","22.59","30.99","15.14","thor","Imgs/thor.png");
const cascos = new Producto("75.99","101.68","120.99","125.88","cascos","Imgs/cascos.png");
const silla = new Producto("12.99","22.59","30.99","21.14","silla","Imgs/silla.png");
const poco = new Producto("229.99","300.45","259.99","350.99","poco","Imgs/poco.png");
const ketchup = new Producto("5.99","2.99","4.56","3.34","ketchup","Imgs/ketchup.png");
const romeo = new Producto("33.900","44.000","40.000","55.000","Alfa Romeo Guilia","Imgs/romeo.png");
const cupra = new Producto("20.000","25.000","30.000","35.000","Leon Cupra","Imgs/cupra.png");
const ordenador = new Producto("500","750","1200","1500","Ordenador Gaming","Imgs/ordenador.png");
const boli = new Producto("1.99","0.50","3.40","1.40","Boli Bic","Imgs/boli.png");
const chaqueta = new Producto("50","75","95","105","Chaqueta Gucci","Imgs/chaqueta.png");


const todos_productos = [zapatillas,thor,cascos,silla,poco,ketchup,cupra,romeo,ordenador,boli,chaqueta];

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
 
 const productos_aleatorios = shuffle([zapatillas,thor,cascos,silla,poco,ketchup,cupra,romeo,ordenador,boli,chaqueta]);
 let n = 0;
 var respuestas = [];
 var precio_bueno = [];

x = undefined;

document.getElementById("rondas10").addEventListener("click", function() {
   ronda = 5;
});
 function continuar(){
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("carta-container").style.display = "flex";

    /*Creamos este condicional que va a saltar cuando el usuario no indique ninguna opcion en alguno de los productos*/ 
    if (x == undefined && n != 0) {
       alert("Tienes que elegir una opción.");
    }else{

      //Hacemos este try porque sino no deja añadir el ultimo elemento 
       try {

      /*Esta variable tendra el valor de cada uno de los productos que hay dentro del array productos_aleatorios cada vez que se le haga click en siguiente, va recorriendo el arreglo a traves de la variable n*/ 
      let recorre_arreglo = productos_aleatorios[n];
      /*Hemos creado anteriormente un array que va a recibir todos los preciosBuenos de cada uno de los productos, hacmeos esto para poder comparar posteriormente el arreglo "respuestas" y el arreglo "precio_bueno", asi nos dara los aciertos y fallos que tiene el usuario*/
      precio_bueno.push(recorre_arreglo.precioBueno);
   
      /*Se crea un array con los precios de cada uno de los productos en el momento de hacer click en siguiente. Segun se crea el array lo haremos aleatorio para que, cada vez que se cree una nueva partida o se añadan productos nuevos no haga falta cambiarlos de lugar*/
      let precio_aleatorio = [recorre_arreglo.precioBueno,recorre_arreglo.precioX,recorre_arreglo.precioY,recorre_arreglo.precioJ];
      precio_aleatorio = shuffle(precio_aleatorio);
   
      /*Cada vez que hagamos click en Siguiente se creara una nueva "pagina" con los valores de cada producto nuevo, siendo los precios aleatorios*/
      document.getElementById("nom-producto").innerHTML = recorre_arreglo.nombre;
      document.getElementById("nom-producto2").innerHTML = recorre_arreglo.nombre;
   
      document.getElementById("imagen").style.backgroundImage = "url(" + recorre_arreglo.url + ")";
          
      document.getElementById("precioA").innerHTML = precio_aleatorio[0];
      document.getElementById("precioB").innerHTML = precio_aleatorio[1];
      document.getElementById("precioC").innerHTML = precio_aleatorio[2];
      document.getElementById("precioD").innerHTML = precio_aleatorio[3];
         
      //Este condicional nos sirve para que añada elementos al arreglo respuestas siempre y cuando x tenga un valor, es decir, no sea undefined
      if (x != undefined) {
         respuestas.push(x);
         
      }
         
         console.log(precio_bueno);
         //console.log(x);
      } catch (error) {
      }
   
      n++;
      document.getElementById("num-ronda").innerHTML = n;
      
      /*Cuando el contador de rondas (o clicks) sea mayor al numero de productos que hay el boton siguiente se convierte en un boton Terminar para poder llegar a una pagina donde nos diga los aciertos/fallos y la puntuacion final*/
      try {
         if (n > ronda) {
            //respuestas.push(x);
            document.getElementById("Btn-siguiente").style.display = "none";
            document.getElementById("Btn-terminar").style.display = "flex";
            document.getElementById("num-ronda").innerHTML = ronda;
         }
      } catch (error) {
      }
      
      
      console.log(respuestas);
      //console.log(ronda);
      x = undefined;
    }

}

/*Se crean 4 funciones enlazadas a los cuatro botones que hay en cada producto, dandole a una variable X el valor que tenga cada uno de los botones en el momento que se le da click, luego esa variable X se utilizará para crear un array con las respuestas introducidas por el usuario: respuestas[]*/ 
function precioA(){
   x = document.getElementById("precioA").innerHTML;
}

function precioB(){
   x = document.getElementById("precioB").innerHTML;
}

function precioC(){
   x = document.getElementById("precioC").innerHTML;
}

function precioD(){
   x = document.getElementById("precioD").innerHTML;
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