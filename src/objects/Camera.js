
import { createBlock, pointDistance } from '../utils';
import { game } from '../app';

export default class Camera extends Phaser.Camera {
  constructor() {
    super(game, 0, 0, 0, game.width, game.height);
    const {world} = game;
    const {centerX, centerY} = world;
    this.displayObject = this.game.camera.displayObject;
    this.cameraSprite = game.add.image(centerX,centerY,null);
    this.cameraSprite.anchor.setTo(0.5, 0.5);
    this.follow(this.cameraSprite);
    this.scale = 1;
    this.zoom = 1;
  }

  update() {
    if (game.tick % 8 == 0) {
      var offsetDistance = pointDistance(
        this.cameraSprite,
        this.cameraFollowing);
      var duration = 2000;

      if (offsetDistance > 30) {
        this.panTo(
          this.cameraFollowing,
          duration);
        this.zoomTo(
          1-(offsetDistance/3000),
          duration);
      }
    }
  }

  setTarget(target) {
    this.cameraFollowing = target;
  }

  zoomTo(scale, duration) {
    if (!scale || !duration) return;
    const {displayObject} = this;
    game.add.tween(displayObject.scale).to({
      x: scale, 
      y: scale
    }, null).start();
    this.zoom = scale;
  }

  panTo(target, duration) {
    if (!target) return;
    game.add.tween(this.cameraSprite.position).to({
      x: this.cameraFollowing.x, 
      y: this.cameraFollowing.y
    }, null).start();
  }


}

