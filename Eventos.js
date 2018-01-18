var teclas ={
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito= document.getElementById("Area");
var lienzo=cuadrito.getContext("2d");
var x=150;
var y=150;



function dibujarline(color,xini,xfin,yini,yfin){
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xini,yini);
  lienzo.lineTo(xfin,yfin);
  lienzo.stroke();
  lienzo.closePath();
}
dibujarline("red",50,50,20,20);
function dibujarTeclado(evento){
    switch(evento.keyCode){
      case teclas.UP:
      break;
      case teclas.DOWN:
      break;
      case teclas.LEFT:
      break;
      case teclas.RIGHT:
      break;
      default:
      break;
    }


}
