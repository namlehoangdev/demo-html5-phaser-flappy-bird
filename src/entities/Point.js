import Phaser from "phaser";
import { GAME_WIDTH } from "../gameEntityKey";
const WIDTH = 20;
const HEIGHT = 10;
const BirdState = {
  MOVE_UP: "MOVE_UP",
  MOVE_DOWN: "MOVE_DOWN",
};
const JUMP_TIME = 500;

export default class Point extends Phaser.GameObjects.Rectangle {
  index = -1;
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this, true);
    this.index = config.keyMap;
    this.displayWidth = WIDTH;
    this.displayHeight = HEIGHT;
    //this.setBodySize(WIDTH, HEIGHT);
    this.body.setImmovable(true);
    this.body.setAllowGravity(false);
    this.body.collideWorldBounds = true;
    this.body.bounce.setTo(2, 2);
    this.body.checkCollision.down = false;
    this.body.checkCollision.left = false;
    this.body.checkCollision.right = false;
  }

  update(time, delta, isTouchDown) {}
}
