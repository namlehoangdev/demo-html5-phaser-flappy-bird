import Phaser from "phaser";
import gameConfig from './gameConfig';

const game = new Phaser.Game(gameConfig);
game.input.touch.capture = false;
