import Phaser from "phaser";
import GamePlayScene from "./scenes/GamePlayScene";
import { GAME_HEIGHT, GAME_WIDTH } from "./gameEntityKey";
console.log("ads:", window.innerWidth);

const config = {
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 300,
      },
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scene: GamePlayScene,
};

const game = new Phaser.Game(config);
