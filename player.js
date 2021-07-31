class Player {
  constructor() {
    this.size = 50;
    this.x = 50;
    this.y = height - 50;
    this.velocityY = 0;
    this.Gravity = 1;
  }
  jump() {
    this.velocityY = -15;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.Gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  show() {
    this.x, this.y, 50, 50;
    stroke("red");
    image(playerImage, this.x, this.y, this.size, this.size);
  }

  collided(obstcaleToCheck) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 5,
      this.size - 5,
      obstcaleToCheck.x,
      obstcaleToCheck.y,
      obstcaleToCheck.size - 5,
      obstcaleToCheck.size - 5
    );
    return isColliding;
  }
}
