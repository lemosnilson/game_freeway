//DETERMINAÇÃO DE VARIÁVEIS
let yCars = [40, 95, 150, 210, 262, 319]
let xCars = [530, 530, 530, -100, -100,-100]
let vCars = [3, 6, 4.5, 3.5, 5.5, 4]
let hCars = 70
let wCars = 40  

//DETERMINAÇÃO DAS FUNÇÕES DOS CARROS
function showCars(){
  for(let i=0; i<cars.length; i++){
    image(cars[i],xCars[i], yCars[i], hCars, wCars);
  }
}
function moveCars(){
  for(let i=0; i<3; i++){
    xCars[i] -= vCars[i];
  }
  for(let i=3; i<cars.length; i++){
    xCars[i] += vCars[i];
  }
}

function carsloop(){
  for(let i=0; i<3; i++){
    if (endScreen1(xCars[i], yCars[i] )){
    xCars[i] = 530
    }
  }

 for(let i=3; i<cars.length; i++){
    if (endScreen2(xCars[i], yCars[i], )){
    xCars[i] = -100
    }
  }
}

function endScreen1(xCars){
  return xCars < -100
}

function endScreen2(xCars){
  return xCars > 530
}
