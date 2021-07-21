import Phaser from "phaser";
import { GAME_WIDTH, GameEntityKey } from "../gameEntityKey";
const WIDTH = GAME_WIDTH;
const HEIGHT = 30;
const BirdState = {
  MOVE_UP: "MOVE_UP",
  MOVE_DOWN: "MOVE_DOWN",
};
const JUMP_TIME = 500;

const DefaultConfig = {
  x: 0,
  y: 0,
  key: GameEntityKey.GROUND,
  fillColor: "#ff0000",
};

export default class Rectangle extends Phaser.GameObjects.Rectangle {
  constructor(config = {}) {
    const processedConfig = { ...DefaultConfig, ...config };
    super(processedConfig);
    processedConfig.scene.physics.world.enable(this);
    processedConfig.scene.add.existing(this);
    this.body.immovable = true;
    this.displayWidth = WIDTH;
    this.displayHeight = HEIGHT;
  }

  update(time, delta, isTouchDown) {}
}
