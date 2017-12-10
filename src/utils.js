import {game, textureRegistry} from './app';

export function canvasParent() {
  const canvasElement = document.getElementById('canvas');
  return {
    element: canvasElement,
    width: canvasElement.offsetWidth,
    height: canvasElement.offsetHeight
  };
}

export function resizeGame() {
  game.scale.setGameSize(
    canvasParent().width, 
    canvasParent().height
  );
  game.camera.setSize(
    canvasParent().width, 
    canvasParent().height
  );
}

export function createBlock(width, height, color) {
  var name = width + '_' + color;
  if(textureRegistry[name]) {
    return textureRegistry[name];
  }

  var bmd = game.add.bitmapData(width, height);
  bmd.ctx.fillStyle = color;
  bmd.ctx.fillRect(0,0, width, height);
  textureRegistry[name] = bmd;
  return bmd;
}

export function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();
  return Phaser.Rectangle.intersects(boundsA, boundsB);
}

export function pointDistance(pointA, pointB) {
  //Returns Distance between two vectors
  //pythagoras squareRoot(a*a + b*b = c*c) = c
  return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)); 
}

export function pointDirection(object1, object2) {
  // Returns Angle/Direction between two vectors
  return Math.atan2(object2.y - object1.y, object2.x - object1.x) * 180 / Math.PI;
}

export function lengthDir(length, direction) { //vector, magnitude
  //Returns catheti(legs) when given length & direction(hypothenuse)
  if (direction < 0) {direction += 360;}
  return {
    x: length*Math.cos(direction),
    y: length*Math.sin(direction)
  };
}

export function angle360(angle) {
  //Enusure an angle is within 0-360
  var angle360 = angle;
  if(angle < 0) {
    angle360 = Math.abs(angle + 360);
  }
  return angle360;
}


export function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
