class Train {
  constructor({
    position,
    width = 32,
    height = 32,
    lastAiguillage,
    direction = 0,
    color
  }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.lastAiguillage = lastAiguillage;
    this.direction = direction;
    this.color = color;
  }

  draw() {
    c.fillStyle = `#${this.color}`;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    c.strokeStyle = 'white';
    c.lineWidth = 2;
    c.strokeRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.move();
  }

  move() {
    switch (this.direction % 4) {
      case 0:
        this.position.y -= 1;
        break;

      case 1:
        this.position.x += 1;
        break;

      case 2:
        this.position.y += 1;
        break;

      case 3:
        this.position.x -= 1;
        break;

      default:
        break;
    }
  }
}
