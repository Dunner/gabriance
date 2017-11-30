
export function pointDistance(pointA, pointB) {
  //Returns Distance between two points
  //pythagoras squareRoot(a*a + b*b = c*c) = c
  return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)); 
}

export function createBlock(width, height, color) {
  var name = width + '_' + color;
  if(window.textureRegistry[name]) {
    return window.textureRegistry[name];
  }

  var bmd = window.game.add.bitmapData(width, height);
  bmd.ctx.fillStyle = color;
  bmd.ctx.fillRect(0,0, width, height);
  window.textureRegistry[name] = bmd;
  return bmd;
}