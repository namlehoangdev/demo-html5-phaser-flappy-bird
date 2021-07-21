import Phaser from "phaser";
import { GAME_WIDTH } from "../gameEntityKey";
const WIDTH = GAME_WIDTH;
const HEIGHT = 30;
const BirdState = {
  MOVE_UP: "MOVE_UP",
  MOVE_DOWN: "MOVE_DOWN",
};
const JUMP_TIME = 500;

export default class Ground extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this, true);
    this.displayWidth = WIDTH;
    this.displayHeight = HEIGHT;
    this.setBodySize(WIDTH, HEIGHT);
    //this.setImmovable(false);
    //this.body.setAllowGravity(false);
  }

  update(time, delta, isTouchDown) {}
}
