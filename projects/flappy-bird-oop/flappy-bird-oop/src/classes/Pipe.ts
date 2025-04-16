import Phaser from 'phaser';

export class Pipe extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, flipped: boolean) {
    super(scene, x, y, 'pipe');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    if (flipped) {
      this.setOrigin(0.5, 1);
      this.setFlipY(true);
    } else {
      this.setOrigin(0.5, 0);
    }

    this.setVelocityX(-200);
    this.setImmovable(true);
    this.body.allowGravity = false;
  }
}
