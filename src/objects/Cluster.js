
import { game } from '../app';
import { createBlock } from '../utils';

export default class Cluster extends Phaser.Group {

  //A cluster represents one side of an orderdepthlevel
  //I.e the buyer side.
  //it's a group of soldiers
  //The amount of soldiers represent the orderdepths volume 
  //The vertical position of soliders represent the orderdepths askingprice 

  //There are always 10 clusters, 5 for the buyers & 5 for the sellers

  constructor(team,index,x) {
    super(game, game.world, 'Cluster'+index);
    this.scale.setTo(1, 1);
    this.position.setTo(game.world.centerX, game.world.centerY);
    this.team = team;
    this.index = index;
    this.sprite = game.add.image(x,game.world.centerY,createBlock(game.world.width/20, game.world.width/20,'white'));
    this.sprite.anchor.set(0.5);
    this.sprite.tint = team == 'buy' ? 0x0055ff : 0x00ff00;
    game.add.existing(this);
    return this;
  }

  update() {
    super.update();
  }

  setVolume(newVolume) {
    this.sprite.scale.set(newVolume/10,newVolume/10);
  }

  setPosY(newY) {
    game.add.tween(this.sprite.position).to({
      x: this.sprite.x,
      y: newY
    }, 3000).start();
  }



}
