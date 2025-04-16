import Phaser from 'phaser';
import { Player } from '../classes/Player';
import { Star } from '../classes/Star';

export class GameScene extends Phaser.Scene {
  private player!: Player;
  private stars!: Phaser.Physics.Arcade.Group;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private score: number = 0;
  private scoreText!: Phaser.GameObjects.Text;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('star', 'assets/star.png');
  }

  create() {
    this.player = new Player(this, 100, 100);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.stars = this.physics.add.group({
      classType: Star,
      key: 'star',
      repeat: 5,
      setXY: { x: 150, y: 150, stepX: 100 },
    });

    this.physics.add.overlap(this.player, this.stars, this.collectStar, undefined, this);

    this.scoreText = this.add.text(10, 10, 'Poäng: 0', {
      fontSize: '18px',
      color: '#ffffff',
    });
  }

  update() {
    this.player.move(this.cursors);
  }

  private collectStar(player: Phaser.GameObjects.GameObject, star: Phaser.GameObjects.GameObject) {
    star.destroy();
    this.score += 10;
    this.scoreText.setText(`Poäng: ${this.score}`);
  }
}
