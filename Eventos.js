var teclas ={
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito= document.getElementById("Area");
var papel=cuadrito.getContext("2d");
function dibujarline(color,xini,xfin,yini,yfin,lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xini,yini);
  lienzo.lineTo(xfin,yfin);
  lienzo.stroke();
  lienzo.closePath();
}

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
