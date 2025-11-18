const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 800;

const scaledCanvas = {
  width: canvas.width / 2.5,
  height: canvas.height / 2.5,
};

const overlay = {
  opacity: 0,
};

const backgroundImageHeight = 800;

const camera = {
  position: {
    x: 0,
    y: 0,
  },
};

const confettiNode = document.querySelector('#confettis');
const confetti = new Confetti('confettis');
confetti.setCount(300);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(true);

const ls = JSON.parse(localStorage.getItem('Trainsac')) || {};
const selectedLevel = ls.selectedLevel || null;

if (!selectedLevel) window.location.href = '/';
const level = parseInt(selectedLevel);
delete ls.selectedLevel;
localStorage.setItem('Trainsac', JSON.stringify(ls));
const maxLevelClear = ls.maxLevelClear || 0;
if (!ls.levelsPb) ls.levelsPb = {};

const levels = {
  1: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './assets/img/lvl1.png',
      });

      frequenceMax = 300;
      maxNbTrains = (25 + (5 * level));
      objectif = (20 + (5 * level));

      parsedCollisions = collisionsLevel1.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();

      collisionBlocks.forEach((block, i) => {
        block.id = i;
      })

      spawn = collisionBlocks.filter(block => block.nature == 'spawn')[0];
      allColors = ['006dfe', 'c70001', '00b701'];
    },
  },
  2: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './assets/img/lvl2.png',
      });

      frequenceMax = 375;
      maxNbTrains = (25 + (5 * level));
      objectif = (20 + (5 * level));

      parsedCollisions = collisionsLevel2.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();

      collisionBlocks.forEach((block, i) => {
        block.id = i;
      })

      spawn = collisionBlocks.filter(block => block.nature == 'spawn')[0];
      allColors = ['006dfe', 'c70001', '00b701', '333333'];
    },
  },
  3: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './assets/img/lvl3.png',
      });

      frequenceMax = 350;
      maxNbTrains = (25 + (5 * level));
      objectif = (20 + (5 * level));

      parsedCollisions = collisionsLevel3.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();

      collisionBlocks.forEach((block, i) => {
        block.id = i;
      })

      spawn = collisionBlocks.filter(block => block.nature == 'spawn')[0];
      allColors = ['006dfe', 'c70001', '00b701', '333333', 'f5cd43'];
    },
  },
  4: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './assets/img/lvl4.png',
      });

      frequenceMax = 325;
      maxNbTrains = (25 + (5 * level));
      objectif = (21 + (5 * level));

      parsedCollisions = collisionsLevel4.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();

      collisionBlocks.forEach((block, i) => {
        block.id = i;
      })

      spawn = collisionBlocks.filter(block => block.nature == 'spawn')[0];
      allColors = ['006dfe', 'c70001', '00b701', '333333', 'f5cd43', 'a966b5'];
    },
  },
  5: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './assets/img/lvl5.png',
      });

      frequenceMax = 300;
      maxNbTrains = (25 + (5 * level));
      objectif = (23 + (5 * level));

      parsedCollisions = collisionsLevel5.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();

      collisionBlocks.forEach((block, i) => {
        block.id = i;
      })

      spawn = collisionBlocks.filter(block => block.nature == 'spawn')[0];
      allColors = ['006dfe', 'c70001', '00b701', '333333', 'f5cd43', 'a966b5', '35c7ff'];
    },
  },
  6: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './assets/img/lvl6.png',
      });

      frequenceMax = 275;
      maxNbTrains = (25 + (5 * level));
      objectif = (25 + (5 * level));

      parsedCollisions = collisionsLevel6.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();

      collisionBlocks.forEach((block, i) => {
        block.id = i;
      })

      spawn = collisionBlocks.filter(block => block.nature == 'spawn')[0];
      allColors = ['006dfe', 'c70001', '00b701', '333333', 'f5cd43', 'a966b5', '35c7ff', 'dcdcdc'];
    },
  },
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomInPlage(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const trains = [];
const points = document.querySelector('.points__number');
const pointsTotal = document.querySelector('.points__total');
const objectifNode = document.querySelector('.objectif__value');
let nbPoints = 0;
let time = 0;
let frequence = 100;
let oldColor = '';

Setup();
function Setup() {
  levels[level].init();

  pointsTotal.innerHTML = maxNbTrains;
  objectifNode.innerHTML = objectif;
  Update();
  setInterval(Update, 1000 / 60);
}


function Update() {
  if (time === frequence && trains.length < maxNbTrains) {
    let trainColor = allColors[getRandomInt(allColors.length)];
    while(trainColor === oldColor) {
      trainColor = allColors[getRandomInt(allColors.length)];
    }
    oldColor = trainColor;

    const train = new Train({
      position: {
        x: spawn.position.x,
        y: spawn.position.y,
      },
      direction: spawn.order1,
      color: trainColor
    });
    
    trains.push(train);

    // frequence = getRandomInPlage(100, (((frequenceMax - 100) / 2) + 100));
    if (trains.length >= maxNbTrains / 2) frequence = getRandomInPlage(100, (((frequenceMax - 100) / 2) + 100));
    else frequence = getRandomInPlage(100, frequenceMax);
    
    time = 0;
  } else if (trains.length !== maxNbTrains) time += 1;
  
  c.fillStyle = '#3f3851';
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.save();
  c.translate(camera.position.x, camera.position.y);
  
  background.draw();

  /* --- Aiguillage --- */
  collisionBlocks.forEach((collisionBlock) => {
    if (!collisionBlock.color) {
      collisionBlock.update();
  
      trains.forEach(train => {
        if (execute(train, collisionBlock.hitbox) && collisionBlock.nature !== 'spawn') {
          if (collisionBlock.id !== train.lastAiguillage) {
            if (collisionBlock.state === 1) {
              train.direction += collisionBlock.order1;
            } else {
              train.direction += collisionBlock.order2;
            }
    
            train.lastAiguillage = collisionBlock.id;
          }
        }
      })
    } 
  });

  trains.forEach(train => {
    train.update();
  })

  /* --- Station --- */
  collisionBlocks.forEach((station) => {
    if (station.color) {
      station.update();

      trains.forEach(train => {
        if (execute(train, station.hitbox)) {
          train.direction += station.order1;
          train.lastAiguillage = station.id;
  
          UpdatePoints(train.color, station.color)
        }
      })
    } 
  });

  if (nbPoints >= objectif) {
    if (level > maxLevelClear) {
      ls.maxLevelClear = level;
      localStorage.setItem('Trainsac', JSON.stringify(ls));
    }

    if (!ls.levelsPb[level] || ls.levelsPb[level] < nbPoints) {
      ls.levelsPb[level] = nbPoints;
      localStorage.setItem('Trainsac', JSON.stringify(ls));
    }

    if (nbPoints === maxNbTrains && !confettiNode.classList.contains('clicked')) {
      confettiNode.click();
      confettiNode.classList.add('clicked');
    }
  }

  c.restore();

  c.save()
  c.globalAlpha = overlay.opacity;
  c.fillStyle = '#3f3851'
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
};


function UpdatePoints(trainColor, stationColor) {
  if (trainColor === stationColor) {
    nbPoints += 1;
    points.innerHTML = nbPoints;
  }
}