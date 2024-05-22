/*
TP 2
COMISIÓN 5
Camila Amaya LADINES ROMERO
Legajo: 119060/5
*/

PImage img1, img2, img3, img4, img6;
PFont fuente;
int pantalla, tiempo; 
int posX1, posY1, posY2, posX2, posX3;
int alpha, alpha2;
boolean ultimaPantalla;

void setup(){
  size(640, 480);
  
  fuente = loadFont("MADESunflower.vlw");
  textFont(fuente);
  textAlign(LEFT, TOP);
  
  pantalla = 0;
  tiempo = frameCount;
  posX1 = 0;
  posY1 = 0;
  posY2 = 0;
  posX2 = 0;
  posX3 = 0;
  alpha = 0;
  alpha2 = 255;
  
  img1 = loadImage("img1.jpg");
  img2 = loadImage("img2.jpg");
  img3 = loadImage("img3.jpg");
  img4 = loadImage("img4.jpg");
  img6 = loadImage("img6.jpg");
}

void draw(){
  println(tiempo/60);
  
  if(pantalla == 0){
    image(img1, 0, 0, width, height);
    
    push();
    fill(240, 34, 34);
    textSize(66);
    text("CRIMEN Y \n CASTIGO", posX1, posY1+20);
    posX1++;
    pop();
    
    push();
    fill(255, alpha);
    textSize(30);
    text(" Esta es una novela del género \n psicológico y policial.", width/8, posY1+279);
    alpha++;
    pop();
  }
  
  if(pantalla == 1){
    image(img2, 0, 0, width, height);
    
    push();
    tiempo = 0;
    fill(245, 0, 217);
    textSize(30);
    text(" Fue publicada originalmente en 1866 \n por el escritor y novelista ruso \n Fiódor Dostoyevski.", 30, posY2);
    posY2++;
    
    if(posY2 > 250){
      image(img3, 0, 0);
      
      if(posY2 > 380){
        pantalla++;
      }
    }
    pop();
  }
   
  if(pantalla == 2){
    image(img4, 0, 0, width, height);
    
    push();
    fill(255, alpha2);
    textSize(32);
    text(" La novela trata de un doble crimen \n cometido por un joven y su \n subsecuente lucha interna con sus \n emociones y sus delirios.", 30, height/3);
    alpha2--;
    pop();
    
    push();
    fill(255);
    textSize(28);
    text(" El protagonista se llama Rodión \n Ramanovich Raskolnikov.", posX2+25, 360);
    posX2++;
    pop();
  }
  
  if(pantalla == 3){
    ultimaPantalla = true;
    image(img6, 0, 0, width, height);
    
    push();
    tiempo = 0;
    fill(232, 107, 12);
    textSize(32);
    text(" Fue adaptada al cine en varias \n ocasiones. Las más destacadas datan \n de los años 1935 y 2002.", posX3+10, height/8);
    posX3++;
    pop();
    
    push();
    fill(232, 107, 12);
    noStroke();
    rect(173, 225, 250, 80);
    fill(0);
    textSize(52);
    text("Reiniciar", 175, 240);
    pop();
  }
  
  //de pantalla a pantalla
  tiempo++;
  
  if(tiempo/60 >= 5){
    pantalla++;
  }
}

void mouseClicked(){
  //println(mouseX, mouseY);
  pantalla++;
  if(pantalla > 3){
    if (mouseX > 173 && mouseX < 173 + 250 && mouseY > 225 && mouseY < 225 + 80) {
      pantalla = 0;
      posX1 = 0;
      alpha = 0;
      posY2 = 0;
      alpha2 = 255;
      posX2 = 0;
      posX3 = 0;
    }
  }
}
