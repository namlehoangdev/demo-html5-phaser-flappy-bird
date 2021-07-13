import Phaser from "phaser";
import birdSprite from "../assets/bird-red-sprite.png";
import backgroundDay from "../assets/background-day.png";
import Bird from "../entities/Bird";
import {
  GAME_HEIGHT,
  GAME_WIDTH,
  GameAnimationKey,
  GameEntityKey,
} from "../gameEntityKey";
import makeAnimations from "../makeAnimations";

export default class GamePlayScene extends Phaser.Scene {
  bird = null;
  controlKeys = {};
  constructor() {
    super();
  }
  preload() {
    //this.load.image("logo", logoImg);
    this.load.image(GameEntityKey.BACKGROUND, backgroundDay);

    this.load.spritesheet(GameEntityKey.BIRD, birdSprite, {
      frameWidth: 34,
      frameHeight: 24,
    });
    //makeAnimations(this);
  }

  update(time, delta) {
    this.bird.update(time, delta, this.controlKeys);
  }
  create() {
    this.add
      .image(GAME_WIDTH / 2, GAME_HEIGHT / 2, GameEntityKey.BACKGROUND)
      .setDisplaySize(GAME_WIDTH, GAME_HEIGHT);

    this.bird = new Bird({
      scene: this,
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2,
      key: GameEntityKey.BIRD,
    });

    this.controlKeys = {
      jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
    };

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
    //this.prepareGAme(this);
    this.bird.anims.play(GameAnimationKey.BIRD.FLY, true);
  }
}
