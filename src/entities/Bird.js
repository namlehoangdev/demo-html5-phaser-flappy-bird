import Phaser from "phaser";
const WIDTH = 50;
const HEIGHT = 50;
const BirdState = {
  MOVE_UP: "MOVE_UP",
  MOVE_DOWN: "MOVE_DOWN",
};
const MAX_JUMP_TIME = 2000;

export default class Bird extends Phaser.GameObjects.Sprite {
  startGround = null;
  finalGround = null;
  nextJumpIndex = 0;
  isJumping = false;
  jumpTime = 0;
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);
    this.body.velocity.y = 120;
    this.body.width = 20;
    this.displayWidth = WIDTH;
    this.displayHeight = HEIGHT;
    this.body.height = 10;
    this.body.collideWorldBounds = true;
  }

  isOnGround() {
    return this.body.velocity.x === 0 && this.body.velocity.y === 0;
  }

  update(time, delta, groups) {
    if (!this.finalGround) {
      return;
    }
    const nextGround = groups[this.nextJumpIndex];
    if (this.jumpTime >= MAX_JUMP_TIME) {
      return;
    } else {
      this.jumpTime += delta;
      this.isJumping = false;
    }
    //this.body.setVelocityX(0);

    if (this.body.x >= nextGround.body.x && this.isJumping) {
      this.body.x = nextGround.body.x;
      this.isJumping = false;
    }

    if (this.isOnGround() || this.isJumping) {
      this.jumpToIndex(nextGround, delta);
    } else {
      this.falling();
    }
  }

  jumpToIndex(nextGround, deltaTime) {
    this.isJumping = true;
    console.log("nextGround:", nextGround.body.x);
    console.log("nextGround:", nextGround);
    if (!nextGround) {
      return;
    }

    //calculate velocity
    const distance = nextGround.body.x - this.startGround.body.x;
    const velocityX = (distance / MAX_JUMP_TIME) * deltaTime;
    console.log("velocityX:", velocityX, deltaTime);
    this.body.setVelocityX(velocityX);
    this.body.setVelocityY(-200);
    this.setAngle(-15);
  }

  triggerStart(startGround, finalGround) {
    console.log("startGround", startGround);
    console.log("finalGround", finalGround);
    if (this.isJumping) {
      return;
    }
    this.finalGround = finalGround;
    this.startGround = startGround;
    this.nextJumpIndex = startGround.index + 1;
    console.log("start:", startGround.body.x);
    console.log("end:", finalGround.body.x);
  }
  falling() {
    this.body.setVelocityX(0);
    if (this.angle < 60) {
      this.setAngle(this.angle + 1);
    }
  }
}
