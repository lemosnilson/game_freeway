//DETERMINAÇÃO DA ÁREA DO JOGO (CANVAS)
function setup() {
  createCanvas(500, 400);
  track.loop()
}

//RENDERIZAÇÃO GRÁFICA E EXECUÇÃO DAS FUNÇÕES
function draw() {
  background(road);
  showActor();
  moveActor();
  showCars();
  moveCars();
  carsloop();
  collision();
  showpoints();
  score();
//  highScore()
}
