function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(240); 
  
  let centroX = width / 2;
  let centroY = height / 2;
  
  // Calcula o ângulo entre o centro e a posição do mouse
  let angulo = atan2(mouseY - centroY, mouseX - centroX);
  
  push();
  translate(centroX, centroY); 
  rotate(angulo);             
  
  // Desenha o corpo da flecha
  stroke(50);
  strokeWeight(4);
  line(-50, 0, 50, 0); 
  
  // Desenha a ponta da flecha (triângulo)
  fill(250, 50, 50);   
  noStroke();
  triangle(50, 0, 30, -15, 30, 15); 
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

