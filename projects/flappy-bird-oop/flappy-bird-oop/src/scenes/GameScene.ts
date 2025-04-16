import Phaser from 'phaser';
import { Bird } from '../classes/Bird';
import { Pipe } from '../classes/Pipe';

export class GameScene extends Phaser.Scene {
  private bird!: Bird;
  private pipes!: Phaser.Physics.Arcade.Group;
  private score: number = 0;
  private scoreText!: Phaser.GameObjects.Text;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('bird', 'assets/bird.png');
    this.load.image('pipe', 'assets/pipe.png');
  }

  create() {
    this.bird = new Bird(this, 100, 300);
    this.input.on('pointerdown', () => this.bird.flap());

    this.pipes = this.physics.add.group();
    this.time.addEvent({
      delay: 1500,
      callback: this.spawnPipes,
      callbackScope: this,
      loop: true
    });

    this.physics.add.overlap(this.bird, this.pipes, this.hitPipe, undefined, this);

    this.scoreText = this.add.text(10, 10, 'Poäng: 0', {
      fontSize: '20px',
      color: '#000',
    });
  }

  update() {
    if (this.bird.y > this.scale.height || this.bird.y < 0) {
      this.scene.restart();
      this.score = 0;
    }
  }

  private spawnPipes() {
    const gap = 120;
    const topHeight = Phaser.Math.Between(50, 400);
    const bottomY = topHeight + gap;

    const topPipe = new Pipe(this, 400, topHeight, true);
    const bottomPipe = new Pipe(this, 400, bottomY, false);

    this.pipes.add(topPipe);
    this.pipes.add(bottomPipe);

    this.score += 1;
    this.scoreText.setText(`Poäng: ${this.score}`);
  }

  private hitPipe() {
    this.scene.restart();
    this.score = 0;
  }
}
