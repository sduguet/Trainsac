function collision({ object1, object2 }) {
  return (
    object1.position.y + object1.height >= object2.position.y &&
    object1.position.y <= object2.position.y + object2.height &&
    object1.position.x <= object2.position.x + object2.width &&
    object1.position.x + object1.width >= object2.position.x
  )
}

function platformCollision({ object1, object2 }) {
  return (
    object1.position.y + object1.height >= object2.position.y &&
    object1.position.y + object1.height <= object2.position.y + object2.height &&
    object1.position.x <= object2.position.x + object2.width &&
    object1.position.x + object1.width >= object2.position.x
  )
}

Array.prototype.parse2D = function () {
  const rows = [];

  for (let i = 0; i < this.length; i += 40) {
    rows.push(this.slice(i, i + 40));
  }

  return rows
}

const allStations = [
  {
    imageSrc: './assets/img/stations/1.png',
    imageOffsetLeft: -30,
    imageOffsetTop: -55,
    color: '006dfe',
  },
  {
    imageSrc: './assets/img/stations/2.png',
    imageOffsetLeft: -40,
    imageOffsetTop: -50,
    color: 'c70001',
  },
  {
    imageSrc: './assets/img/stations/3.png',
    imageOffsetLeft: -40,
    imageOffsetTop: -50,
    color: '00b701',
  },
  {
    imageSrc: './assets/img/stations/4.png',
    imageOffsetLeft: -30,
    imageOffsetTop: -55,
    color: '333333',
  },
  {
    imageSrc: './assets/img/stations/5.png',
    imageOffsetLeft: -40,
    imageOffsetTop: -50,
    color: 'f5cd43',
  },
  {
    imageSrc: './assets/img/stations/6.png',
    imageOffsetLeft: -40,
    imageOffsetTop: -50,
    color: 'a966b5',
  },
  {
    imageSrc: './assets/img/stations/7.png',
    imageOffsetLeft: -30,
    imageOffsetTop: -55,
    color: '35c7ff',
  },
  {
    imageSrc: './assets/img/stations/8.png',
    imageOffsetLeft: -30,
    imageOffsetTop: -55,
    color: 'dcdcdc',
  },
]

Array.prototype.createObjectsFrom2D = function () {
  const objects = [];

  let stations = [...allStations];
  if (level + 2 !== stations.length) stations.splice(level + 2);

  this.forEach((row, y) => {
    row.forEach((symbol, x) => {
      switch (symbol) {
        case 111:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'spawn',
              order1: 2,
              imageSrc: './assets/img/start.png',
              scale: 1,
              imageOffsetLeft: -72,
              imageOffsetTop: -72
            })
          );
          break;

        case 991:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'turn',
              order1: 1,
            })
          );
          break;

        case 199:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'turn',
              order1: -1,
            })
          );
          break;

        case 113:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: 1,
              order2: 0,
              imageSrc: './assets/img/switch/2.png',
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              scale: 1,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/2.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/v.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 119:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: -1,
              order2: 0,
              imageSrc: './assets/img/switch/4.png',
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              scale: 1,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/4.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/v.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 117:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: -1,
              order2: 0,
              imageSrc: './assets/img/switch/2.png',
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              scale: 1,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/2.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/h.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 115:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: -1,
              order2: 0,
              imageSrc: './assets/img/switch/1.png',
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              scale: 1,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/1.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/v.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 311:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: -1,
              order2: 0,
              imageSrc: './assets/img/switch/4.png',
              scale: 1,
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/4.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/h.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 511:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: 1,
              order2: 0,
              imageSrc: './assets/img/switch/3.png',
              scale: 1,
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/3.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/h.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 711:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: 1,
              order2: 0,
              imageSrc: './assets/img/switch/4.png',
              scale: 1,
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/4.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/v.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 911:
          objects.push(
            new CollisionBlock({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'aiguillage',
              order1: 1,
              order2: 0,
              imageSrc: './assets/img/switch/1.png',
              scale: 1,
              imageOffsetLeft: -35,
              imageOffsetTop: -35,
              animations: {
                1: {
                  imageSrc: './assets/img/switch/1.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
                2: {
                  imageSrc: './assets/img/switch/h.png',
                  frameRate: 1,
                  frameBuffer: 1,
                  loop: true,
                },
              }
            })
          );
          break;

        case 888:
          const randomStation = getRandomInPlage(0, stations.length);

          objects.push(
            new Station({
              position: {
                x: x * 32,
                y: y * 32,
              },
              height: 32,
              nature: 'finish',
              order1: 'stop',
              imageSrc: stations[randomStation].imageSrc,
              imageOffsetLeft: stations[randomStation].imageOffsetLeft,
              imageOffsetTop: stations[randomStation].imageOffsetTop,
              scale: 1,
              color: stations[randomStation].color,
            })
          );

          stations.splice(randomStation, 1);
          break;

        default:
          break;
      }
    })
  })

  return objects
}

function $random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function collisionDetected(entity1, entity2) {
  return (
    entity1.position.x < entity2.position.x + entity2.width &&
    entity1.position.x + entity1.width > entity2.position.x &&
    entity1.position.y < entity2.position.y + entity2.height &&
    entity1.position.y + entity1.height > entity2.position.y
  );
}

function execute(train, block) {

  const isCollision = collisionDetected(train, block);
  if (!isCollision) return;

  let needExecute = false;

  switch (train.direction % 4) {
    case 0:
      if (train.position.y < block.position.y) needExecute = true;
      break;

    case 1:
      if (train.position.x > block.position.x) needExecute = true;
      break;

    case 2:
      if (train.position.y > block.position.y) needExecute = true;
      break;

    case 3:
      if (train.position.x < block.position.x) needExecute = true;
      break;

    default:
      break;
  }

  return needExecute;
}