
import { game } from '../app';
//import { createBlock } from '../utils';

export default class Character extends Phaser.Sprite {


  constructor( x, y ) {
    super(game, x, y, 'character'); //x, y, bitmap

    this.scale.set(0.5);
    this.anchor.set(0.5);
    this.tint = 0x00ff00;
    game.add.existing(this);
  }

  update() {
    this.tick++;
    if (game.tick % 500 == 1) {
      //this.moveTo(game.world.centerX,game.world.centerY);

      
      this.moveTo(
        game.world.randomX,
        game.world.randomY,
        2000
      );
      
    }
  }

  moveTo(x,y,duration) {
    game.add.tween(this.position).to({
      x: x,
      y: y
    }, duration).start();
  }

}
