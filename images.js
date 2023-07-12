//DETERMINAÇÃO DAS VARIÁVEIS
let road;
let Actor;
let Car1;
let Car2;
let Car3;
let Car4;
let Car5;
let Car6;
let hitSound;
let pointsSound;
let track;

//PRÉ CARREGAMENTO DE TEXTURAS E SONS
function preload(){
  road = loadImage("images/estrada.png");
  Actor = loadImage("images/ator-1.png");
  car1 = loadImage("images/carro-1.png");
  car2 = loadImage("images/carro-2.png");
  car3 = loadImage("images/carro-3.png");
  car4 = loadImage("images/carro-4.png");
  car5 = loadImage("images/carro-5.png");
  car6 = loadImage("images/carro-6.png");
  cars = [car1, car2, car3, car4, car5, car6];
  hitSound = loadSound("sounds/hit.mp3");
  pointsSound = loadSound("sounds/points.wav");
  track = loadSound("sounds/track.mp3");
}