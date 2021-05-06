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
const cascos = new Producto("97.95","110.50","120.99","75.99","Logitech Pro X","Electrónica","Imgs/cascos.png");
const silla = new Producto("222.57","123.66","95.99","175.45","Silla Gaming","Producto","Imgs/silla.png");
const poco = new Producto("174.84","300.45","259.99","200.99","Poco X3 NFC","Electrónica","Imgs/poco.png");
const ketchup = new Producto("2.88","1.50","4.56","3.34","Ketchup Heinz","Producto","Imgs/ketchup.png");
const romeo = new Producto("33.900","43.300","25.800","55.000","Alfa Romeo Guilia Super","Vehículo","Imgs/romeo.png");
const cupra = new Producto("40.900","25.500","30.000","35.000","Leon Cupra","Vehículo","Imgs/cupra.png");
const boli = new Producto("0.36","1.60","2.20","0.99","Boli Bic","Producto","Imgs/boli.png");
const chaqueta = new Producto("1300","500","2500","5800","Chaqueta Gucci","Producto","Imgs/chaqueta.png");
const play5 = new Producto("499.99","399.99","325.22","599.99","Play 5","Electrónica","Imgs/play5.png");
const mando_play5 = new Producto("69.90","55.50","75.99","40.99","Mando Play 5","Electrónica","Imgs/mandops5.png");
const coche_m2 = new Producto("76.650","86.890","103.999","60.789","BMW M2 Competition","Vehículo","Imgs/bmw_m2.png");
const grafica_3090 = new Producto("1549","700","1000","2200","RTX 3090 Founders Edition","Electrónica","Imgs/3090_rtx.png");
const twitch_prime = new Producto("3.99","5.99","12.50","1.99","Suscripcion Mensual Twitch Prime","Producto","Imgs/twitch_prime.png");
const tv_qled = new Producto("9999","5555","2500","8590","TV Samsung QLED 85' 8K","Electrónica","Imgs/tv_samsung.png");
const iphone12 = new Producto("1589","799","997","1896","iPhone 12 ProMax 512GB","Electrónica","Imgs/iphone12.png");
const roombas9 = new Producto("1499","799","2200","563","Roomba s9+","Electrónica","Imgs/roombas9.png");
const pistachos = new Producto("3.60","1.50","2.30","4.59","Pistachos Mercadona","Producto","Imgs/pistachos.png");
const bugatti_chiron = new Producto("2.400.000","1.000.000","3.500.000","5.000.000","Bugatti Chiron","Vehículo","Imgs/bugatti_chiron.png");
const kindle = new Producto("109.99","74.99","150.50","50.99","Kindle Paperwhite","Electrónica","Imgs/kindle.png");
const cafe = new Producto("1.47","2.30","1.23","0.95","Café Medio en Bar","Producto","Imgs/cafe.png");
const ipadpro = new Producto("1620","750","2200","965","iPad Pro 2020 1TB","Electrónica","Imgs/ipad.png");
const bici_cervelo = new Producto("5500","1999","12000","750","Bici Cervelo Ultegra","Producto","Imgs/bici_cervelo.png");
const frisbee = new Producto("9.99","5.99","2.99","14.99","Frisbee Decatlhon","Producto","Imgs/frisbee.png");
const raton_ergonomico = new Producto("89.99","102.35","20.99","49.99","Logitech MX Vertical","Electrónica","Imgs/raton_ergonomico.png");
const nike_sb = new Producto("54.95","99.99","22.35","68.90","Nike SB","Producto","Imgs/nikesb.png");
const cine_espectador = new Producto("4.50","7.30","1.80","9.90","Entrada Día del Espectador","Producto","Imgs/cine.png");
const silla_ergonomica = new Producto("267.00","150.99","75.96","450.98","Silla ergonómica ARKO","Producto","Imgs/silla_ergonomica.png");
const punetazo = new Producto("GRATIS","GRATISS","GRATISSS","GRATISSSS","Puñetazo en la Cabesa","Producto","Imgs/puño.png");
const gorra_nike = new Producto("24.95","35.95","15.95","10.99","Gorra Nike Sportswear","Producto","Imgs/gorra_nike.png");
const archivador = new Producto("3.07","4.95","1.85","12.98","Archivador Amazon","Producto","Imgs/archivador.png");
const mancuernas = new Producto("139.99","80.99","202.95","50.99","Juego de Mancuernas","Producto","Imgs/mancuernas.png");
const lego = new Producto("193.35","50.66","108.94","82.99","Lego Cazafantasmas","Producto","Imgs/mancuernas.png");
const comic = new Producto("3.200.000","5.300.000","550.000","1.000.000","Ation Comics #1","Producto","Imgs/comic.png");
const gomas = new Producto("15.99","5.85","23.75","10.99","Gomas Gimnasio Pack 3","Producto","Imgs/gomas.png");
const alexa = new Producto("39.99","105.98","75.99","10.90","Alexa 3ª Generación","Electrónica","Imgs/alexa.png");
const minecraft = new Producto("23.95","10.15","15.99","3.90","Minecraft Java Edition","Electrónica","Imgs/minecraft.png");



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
 

 const productos_aleatorios = shuffle([zapatillas,thor,cascos,silla,poco,ketchup,cupra,romeo,boli,chaqueta,play5,mando_play5,coche_m2,grafica_3090,twitch_prime,tv_qled,iphone12,roombas9,pistachos,kindle,bugatti_chiron,cafe,frisbee,bici_cervelo,ipadpro,raton_ergonomico,nike_sb,cine_espectador,silla_ergonomica,punetazo,gorra_nike,archivador, mancuernas,lego,comic]);
 let n = 0;
 var respuestas = [];
 var precio_bueno = [];

 //Este es el arreglo que se va a utilizar en la ultima pagina para poder ver tus resultados finales, sera la primera columna de la tabla que se crea con los resultados, tendra la url de cada una de las imagenes 
 var arreglo_fotos = [];

x = undefined;



/*FUNCION PRINCIPAL QUE VA A EJECUTARSE CUANDO SE LE DE A SIGUIENTE O AL NUMERO DE RONDAS QUE SE QUIERA*/
 function continuar(){
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("carta-container").style.display = "flex";

    /*Creamos este condicional que va a saltar cuando el usuario no indique ninguna opcion en alguno de los productos*/ 
    if (x == undefined && n != 0) {
       alert("Tienes que elegir una opción.");
    }else{
      seg_vuelta = 15;
      document.getElementById("sec-ronda").textContent = seg_vuelta;
      //Hacemos este try porque sino no deja añadir el ultimo elemento 
       try {

      /*Esta variable tendra el valor de cada uno de los productos que hay dentro del array productos_aleatorios cada vez que se le haga click en siguiente, va recorriendo el arreglo a traves de la variable n*/ 
      let recorre_arreglo = productos_aleatorios[n];
      /*Hemos creado anteriormente un array que va a recibir todos los preciosBuenos de cada uno de los productos, hacmeos esto para poder comparar posteriormente el arreglo "respuestas" y el arreglo "precio_bueno", asi nos dara los aciertos y fallos que tiene el usuario*/
      precio_bueno.push(recorre_arreglo.precioBueno);
   
      /*Se crea un array con los precios de cada uno de los productos en el momento de hacer click en siguiente. Segun se crea el array lo haremos aleatorio para que, cada vez que se cree una nueva partida o se añadan productos nuevos no haga falta cambiarlos de lugar*/
      var precio_aleatorio = [recorre_arreglo.precioBueno,recorre_arreglo.precioX,recorre_arreglo.precioY,recorre_arreglo.precioJ];
      precio_aleatorio = shuffle(precio_aleatorio);
   
      /*Cada vez que hagamos click en Siguiente se creara una nueva "pagina" con los valores de cada producto nuevo, siendo los precios aleatorios*/
      document.getElementById("nom-producto").innerHTML = recorre_arreglo.categoria;
      document.getElementById("nom-producto2").innerHTML = recorre_arreglo.nombre;
   
      document.getElementById("imagen").style.backgroundImage = "url(" + recorre_arreglo.url + ")";


      arreglo_fotos.push(recorre_arreglo.url);


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
