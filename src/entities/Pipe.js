import Phaser from "phaser";
const WIDTH = 200;
const HEIGHT = 200;
const BirdState = {
    MOVE_UP: "MOVE_UP",
    MOVE_DOWN: "MOVE_DOWN",
};
const JUMP_TIME = 500;

export default class Pipe extends Phaser.GameObjects.Sprite {
    jumpTime = 0;
    isJumping = false;
    constructor(config = { scene: null, x: 150, y: 0, key }) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        //this.body.velocity.y = 120;
        this.body.width = WIDTH;
        this.body.height = HEIGHT;
        this.displayWidth = WIDTH;
        this.displayHeight = HEIGHT;
    }

    isFalling() {
        return this.jumpTime > 0;
    }

    update(time, delta, controlKeys) {
        // console.log(
        //   "isJumping:",
        //   this.isJumping,
        //   "-",
        //   "jumpTime:",
        //   this.jumpTime,
        //   this.body.velocity.y
        // );

        if (this.jumpTime > 0) {
            this.jumpTime -= delta;
            return;
        }
        if (Phaser.Input.Keyboard.JustDown(controlKeys.jump)) {
            this.moveUp();
        } else {
            this.normalMove();
        }
    }

    moveUp() {
        console.log("moveUp");
        this.jumpTime = JUMP_TIME;
        this.body.setVelocityY(-600);
        this.setAngle(-15);
        this.jumping = true;
    }
    normalMove() {
        console.log("down");
        this.body.setVelocityY(400);
        if (this.angle < 60) {
            this.setAngle(this.angle + 1);
        }
    }
}
