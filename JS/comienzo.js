function comenzarJuego(){
    document.getElementById("P-inicio").style.display = "none";
    document.getElementById("P-comienzo").style.display = "flex";
}



 /*-------------CREAMOS LA CLASE PRODUCTO---------------*/
 class Producto{
   constructor(precioBueno,precioX,precioY,precioJ,nombre,categoria,url){
      /*Hay 4 tipos de precios, 3 que seran los falsos y 1 que sera el verdadero: "precioBueno"*/ 
       this.precioBueno = precioBueno;
       this.precioX = precioX;
       this.precioY = precioY;
       this.precioJ = precioJ;
       this.nombre = nombre;
       this.categoria = categoria;
       this.url = url;
   }
}
/*-----------CREAMOS LOS OBJETOS A TRAVES DE LA CLASE CREADA ANTERIORMENTE----------------*/
const zapatillas = new Producto("45.50","30.99","40.99","25.50","Botas Futbol","Producto","Imgs/zapatillas.png");
const thor = new Producto("15.95","45.59","30.99","22.50","Thor","Producto","Imgs/thor.png");
const cascos = new Producto("97.95","110.50","120.99","75.99","Logitech Pro X","Producto","Imgs/cascos.png");
const silla = new Producto("222.57","123.66","95.99","175.45","Silla Gaming","Producto","Imgs/silla.png");
const poco = new Producto("174.84","300.45","259.99","200.99","Poco X3 NFC","Producto","Imgs/poco.png");
const ketchup = new Producto("2.88","1.50","4.56","3.34","Ketchup Heinz","Producto","Imgs/ketchup.png");
const romeo = new Producto("33.900","43.300","25.800","55.000","Alfa Romeo Guilia Super","Producto","Imgs/romeo.png");
const cupra = new Producto("40.900","25.500","30.000","35.000","Leon Cupra","Producto","Imgs/cupra.png");
const ordenador = new Producto("1500","750","1200","2800","Ordenador Gaming","Producto","Imgs/ordenador.png");
const boli = new Producto("0.36","1.60","2.20","0.99","Boli Bic","Producto","Imgs/boli.png");
const chaqueta = new Producto("1300","500","2500","5800","Chaqueta Gucci","Producto","Imgs/chaqueta.png");
const play5 = new Producto("499.99","399.99","325.22","599.99","Play 5","Producto","Imgs/play5.png");
const mando_play5 = new Producto("69.90","55.50","75.99","40.99","Mando Play 5","Producto","Imgs/mandops5.png");
const coche_m2 = new Producto("76.650","86.890","103.999","60.789","BMW M2 Competition","Producto","Imgs/bmw_m2.png");
const grafica_3090 = new Producto("1549","700","1000","2200","RTX 3090 Founders Edition","Producto","Imgs/3090_RTX.png");
const twitch_prime = new Producto("3.99","5.99","12.50","1.99","Suscripcion Mensual Twitch Prime","Producto","Imgs/twitch_prime.png");
const tv_qled = new Producto("9999","5555","2500","8590","TV Samsung QLED 85' 8K","Producto","Imgs/tv_samsung.png");
const iphone12 = new Producto("1589","799","997","1896","iPhone 12 ProMax 512GB","Producto","Imgs/iphone12.png");
const roombas9 = new Producto("1499","799","2200","563","Roomba s9+","Producto","Imgs/roombas9.png");
//const twitch_prime = new Producto("3.99","5.99","12.50","1.99","Suscripcion Mensual Twitch Prime","Imgs/twitch_prime.png");
//const twitch_prime = new Producto("3.99","5.99","12.50","1.99","Suscripcion Mensual Twitch Prime","Imgs/twitch_prime.png");

const todos_productos = [zapatillas,thor,cascos,silla,poco,ketchup,cupra,romeo,ordenador,boli,chaqueta,play5,mando_play5];



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
 



 const productos_aleatorios = shuffle([zapatillas,thor,cascos,silla,poco,ketchup,cupra,romeo,ordenador,boli,chaqueta,play5,mando_play5,coche_m2,grafica_3090,twitch_prime,tv_qled,iphone12,roombas9]);
 let n = 0;
 var respuestas = [];
 var precio_bueno = [];

x = undefined;


//Funciones para implementar cuantas rondas (productos) se quieren jugar
document.getElementById("rondas10").addEventListener("click", function() {
   ronda = 10;
});

document.getElementById("rondas15").addEventListener("click", function() {
   ronda = 15;
});

document.getElementById("rondas20").addEventListener("click", function() {
   ronda = 20;
});


/*FUNCION PRINCIPAL QUE VA A EJECUTARSE CUANDO SE LE DE A SIGUIENTE O AL NUMERO DE RONDAS QUE SE QUIERA*/
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
      document.getElementById("nom-producto").innerHTML = recorre_arreglo.categoria;
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
      } catch (error) {
      }

      n++;
      document.getElementById("num-ronda").innerHTML = n;
   
      /*Cuando el contador de rondas (o clicks) sea mayor al numero de productos que hay el boton siguiente se convierte en un boton Terminar para poder llegar a una pagina donde nos diga los aciertos/fallos y la puntuacion final*/
      try {
         if (n > ronda) {
            document.getElementById("Btn-siguiente").style.display = "none";
            document.getElementById("Btn-terminar").style.display = "flex";
            document.getElementById("num-ronda").innerHTML = ronda;
         }
      } catch (error) {
      }
      
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

