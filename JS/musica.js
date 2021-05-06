let contador_musica = 0;
let audio = document.getElementById("audio");
function musicaPlay(){
    if (contador_musica % 2 == 0) {
        audio.play();   
        document.getElementById("tachar").style.zIndex = "-1";
    }else{
        audio.pause();
        document.getElementById("tachar").style.zIndex = "2";
    }
    contador_musica++;

}
