import Phaser from 'phaser';

export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
  }

  move(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    this.setVelocity(0);

    if (cursors.left?.isDown) {
      this.setVelocityX(-160);
    } else if (cursors.right?.isDown) {
      this.setVelocityX(160);
    }

    if (cursors.up?.isDown) {
      this.setVelocityY(-160);
    } else if (cursors.down?.isDown) {
      this.setVelocityY(160);
    }
  }
}
