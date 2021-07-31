let player;
let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let scoreboard;
let score = 0;

function preload() {
  bgImage = loadImage("bestbackground.jpg");
  playerImage = loadImage("player3.png");
  obstacleImage = loadImage("wiwk.png");
}

function setup() {
  createCanvas(800, 400);
  player = new Player();
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  background(bgImage);
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if ((obs.x === 0) & (obs.y === height - 50)) {
      score++;
    }
    if (player.collided(obs) === true) {
      alert("GAME OVER");
      rect(250, 125, 350, 150);
      text("Score is " + score, 375, 200);
      noLoop();
    }
  }
  player.show();
  player.move();
}
