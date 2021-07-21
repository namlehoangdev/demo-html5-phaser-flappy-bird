import Phaser from "phaser";
import birdSprite from "../assets/bird-red-sprite.png";
import backgroundDay from "../assets/dicebackground.png";
import mapJson from "../assets/map2.json";

import Bird from "../entities/Bird";
import {
  GAME_HEIGHT,
  GAME_WIDTH,
  GameAnimationKey,
  GameEntityKey,
} from "../gameEntityKey";
import Point from "../entities/Point";

export default class GamePlayScene extends Phaser.Scene {
  player = null;
  isClicking = false;
  map = null;
  groundObjectMap = {};
  finalGroundIndex = 0;

  preload() {
    this.load.image(GameEntityKey.BACKGROUND, backgroundDay);
    this.load.spritesheet(GameEntityKey.BIRD, birdSprite, {
      frameWidth: 34,
      frameHeight: 24,
    });
    this.load.json("mapJson", mapJson);
  }

  update(time, delta) {
    const activePointer = this.input.activePointer;
    if (!activePointer.isDown && this.isClicking === true) {
      this.isClicking = false;
    } else if (
      activePointer.isDown &&
      this.isClicking === false &&
      this.getNodeNameFromPointer(activePointer) === "CANVAS"
    ) {
      this.isClicking = true;
      this.finalGroundIndex = 3;
      const startGround = this.groundObjectMap[0];
      const finalGround = this.groundObjectMap[3];
      this.player.triggerStart(startGround, finalGround);
    }
    this.player.update(time, delta, this.groundObjectMap);
  }
  create() {
    this.add
      .image(GAME_WIDTH / 2, GAME_HEIGHT / 2, GameEntityKey.BACKGROUND)
      .setDisplaySize(GAME_WIDTH, GAME_HEIGHT);
    this.createMap();
    this.player = new Bird({
      scene: this,
      x: this.groundObjectMap[0].x,
      y: this.groundObjectMap[0].y - 100,
      key: GameEntityKey.BIRD,
    });
    this.createAnims();
    Object.values(this.groundObjectMap).forEach((item) => {
      this.physics.add.collider(this.player, item);
    });

    this.player.anims.play(GameAnimationKey.BIRD.FLY, true);
  }

  getNodeNameFromPointer(pointer) {
    return pointer?.event?.target?.nodeName;
  }

  createMap() {
    const mapJson = this.cache.json.get("mapJson");
    const groundList = mapJson?.layers[2]?.objects;
    groundList.forEach((item, index) => {
      this.groundObjectMap[item?.id] = new Point({
        scene: this,
        x: item?.x,
        y: item?.y,
        keyMap: item?.id,
      });
    });
  }

  createAnims() {
    this.anims.create({
      key: GameAnimationKey.BIRD.FLY,
      frames: this.anims.generateFrameNumbers(GameEntityKey.BIRD, {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: GameAnimationKey.BIRD.STOP,
      frames: [
        {
          key: GameEntityKey.BIRD,
          frame: 1,
        },
      ],
      frameRate: 20,
    });
  }
}
