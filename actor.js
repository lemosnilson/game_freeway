//DETERMINAÇÃO DE VARIÁVEIS
let xAtor = 250;
let yAtor = 367;
let hit = false;
let points = 0;
let highScore = 0;


//DETERMINAÇÃO DAS FUNÇÕES DO ATOR
function showActor(){
  image(Actor, xAtor, yAtor, 30, 30);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)){
     yAtor -= 2;
}
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
  if (yAtor > 366){
    Return();
  }
}

function collision(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i=0; i<cars.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], hCars, wCars, xAtor, yAtor, 15);
   if (hit){
     hitSound.play();
     Return();
     points = 0;
    }
  }
}

function Return(){
  yAtor = 367
}

function showpoints(){
  textAlign(CENTER)
  textSize(25)
  fill(255,240,0)
  text (points, 30, 27)

}

function score(){
  if (yAtor < 15){
     points += 1;
     pointsSound.play()
     Return();
  }
}

function hishScore(){
if (points => highScore){
  highscore = points
  }
}

function showHighScore(){
  textAlign(CENTER)
  textSize(25)
  fill(255,240,0)
  text (highScore, 470, 27)
}
    
