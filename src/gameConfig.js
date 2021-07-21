import Phaser from "phaser";
import GamePlayScene from "./scenes/GamePlayScene";
import { GAME_HEIGHT, GAME_WIDTH } from "./gameEntityKey";

const gameConfig = {
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
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
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
  input: {
    touch: {
      capture: true,
    },
  },
  scene: GamePlayScene,
  // input: {
  //   touch: {
  //     capture: true,
  //   },
  // },
};

export default gameConfig;
