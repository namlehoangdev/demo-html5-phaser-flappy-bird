import { GameAnimationKey, GameEntityKey } from "./gameEntityKey";

export default function makeAnimations(scene) {
  scene.anims.create({
    key: GameAnimationKey.BIRD.FLY,
    frames: this.anims.generateFrameNumbers(GameEntityKey.BIRD, {
      start: 0,
      end: 2,
    }),
    frameRate: 10,
    repeat: -1,
  });
  scene.anims.create({
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
