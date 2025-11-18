class Station extends Sprite {
  constructor({
    position,
    width = 32,
    height = 32,
    nature,
    state = 1,
    order1,
    order2,
    id,
    imageSrc,
    frameRate,
    scale = 0.5,
    loop,
    offsetTop = 0,
    offsetLeft = 0,
    imageOffsetTop = 0,
    imageOffsetLeft = 0,
    animations,
    color
  }) {
    super({position, imageSrc, frameRate, scale, loop, offsetTop, offsetLeft, imageOffsetTop, imageOffsetLeft});
    this.position = position;
    this.width = width;
    this.height = height;
    this.nature = nature;
    this.state = state;
    this.order1 = order1;
    this.order2 = order2;
    this.id = id;
    this.imageSrc = imageSrc;
    this.animations = animations;
    this.color = color,
    this.hitbox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 32,
      height: 32,
    };

    for (let key in this.animations) {
      const image = new Image();
      image.src = this.animations[key].imageSrc;

      this.animations[key].image = image;
    }
  }
  
  pop() {
    c.fillStyle = 'rgba(0, 255, 0, 0.4)';
    c.fillRect(
      this.hitbox.position.x,
      this.hitbox.position.y,
      this.hitbox.width,
      this.hitbox.height
    )
  }

  update() {
    if (this.imageSrc) this.draw();
    // this.pop();
  }
}
