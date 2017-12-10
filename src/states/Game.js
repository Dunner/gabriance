/*
 * Game state
 * ==========
 *
 */
import StockController from '../controllers/StockController';
import { testCompany } from '../data/stockQuote';

import Character from '../objects/Character';
import Camera from '../objects/Camera';
import { resizeGame, canvasParent } from '../utils';

export default class Game extends Phaser.State {

  create() {
    this.game.tick=0;
    this.camera = this.game.camera = this.game.world.camera = new Camera();
    this.add.tileSprite(0, 0, 1024, 6000, 'bggradient');
    this.stage.backgroundColor = '#222';
    this.world.setBounds(0, 0, 1024, 6000);

    this.StockController = new StockController(testCompany);

    const _char = new Character(512,3000);
    this.camera.setTarget(_char);
  }

  update() {
    this.game.tick+=1;
    resizeGame();
  }

}
