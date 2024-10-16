let imagenes = [];
let pantallaActual = 0;
let textos;
let xBoton = 500;
let yBoton, anchoBoton, altoBoton;
let textosBoton = ["opcion A", "opcionB"];

function preload() {
  /*
  for (let i=0; i<9; i++) {
   imagenes[i] = loadImage("data/img"+i+".jpg");
   }
   CICLO FOR PARA CARGAR IMGS, "IMG1, IMG2, ETC"
   */

  textos = loadStrings('data/guion.txt');
  print(textos);
}

function setup() {
  createCanvas(640, 480);
  textSize(18);
}


function draw() {
  background(200);
  cuadroDialogo(0, 322, width, height/3);
  text(textos[pantallaActual], 11, 345);

  //colores de fondo reemplazan las imagenes
  //p2
  if (pantallaActual == 1) {
    background(50, 50, 50);
    bottomSide(0, 322, width, height/3, pantallaActual, textos);
  }
  //p3
  if (pantallaActual == 2) {
    background(100, 100, 100);
    bottomSide(0, 322, width, height/3, pantallaActual, textos);
    dibujarBoton(xBoton, 333, width/5, height/8);
    text(textosBoton[0], 520, 377);
    dibujarBoton(xBoton, 405, width/5, height/8);
    text(textosBoton[1], 520, 420);
  }
  //p4
  if (pantallaActual == 3) {
    background(200, 0, 0);
    bottomSide(0, 322, width, height/3, pantallaActual, textos);
  }
}
//p5

//p6
if (pantallaActual == 5) {
  background(0, 200, 0);
  bottomSide(0, 322, width, height/3, pantallaActual, textos);
}

function mousePressed() {
  console.log(mouseX, mouseY);
  //pantallaActual = imagenes[pantallaActual]; vemos si  funciona...
  pantallaActual++; //provisorio

  if (pantallaActual == 2 && mouseX > xBoton && mouseX < xBoton + width/5 && mouseY > 333 && mouseY < 333 + height/8) {
    pantallaActual = 3;
  }
  if (pantallaActual == 2 && mouseX > xBoton && mouseX < xBoton + width/5 && mouseY > 405 && mouseY < 405 + height/8) {
    pantallaActual = 5;
  }
}

function cuadroDialogo(x, y, ancho, alto) {
  push();
  fill(240);
  noStroke();
  rect(x, y, ancho, alto);
  pop();
}

function bottomSide(x, y, ancho, alto, pantallaActual, textos) {
  cuadroDialogo(0, 322, width, height/3);
  text(textos[pantallaActual], 11, 345);
}

function dibujarBoton(xBoton, yBoton, anchoBoton, altoBoton) {
  push();
  fill(245, 252, 239);
  rect(xBoton, yBoton, anchoBoton, altoBoton);
  pop();
}
