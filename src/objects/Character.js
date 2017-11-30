
import { createBlock } from '../utils';

export default class Character extends Phaser.Sprite {


  constructor(game, x, y, teamName) {
    super(game, x, y, 'character'); //x, y, bitmap

    this.scale.set(0.5)
    this.anchor.set(0.5);
    if (teamName == 'blue') {
      this.tint = 0x0055ff;
      this.moveTargetObject = game.add.image(x+80,y, createBlock(5, 5,'blue'));

    }
    if (teamName == 'green') {
      this.tint = 0x00ff00;
      this.moveTargetObject = game.add.image(x-80,y, createBlock(5, 5,'green'));

    }
  }

  moveHorizontally(distance) {
    this.moveTargetObject.x+=distance;
  }

  update() {
    this.angle += 0.1;
    if (this.x < this.moveTargetObject.x) {this.x++}
    if (this.x > this.moveTargetObject.x) {this.x--}
  }

}
