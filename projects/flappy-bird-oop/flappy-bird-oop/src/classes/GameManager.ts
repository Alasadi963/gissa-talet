export class GameManager {
    private score: number = 0;
    private scoreText!: Phaser.GameObjects.Text;

    constructor(private scene: Phaser.Scene) { }

    init() {
        this.score = 0;
        this.scoreText = this.scene.add.text(20, 20, 'Poäng: 0', {
            fontSize: '20px',
            color: '#ffffff',
        });
    }

    addScore(amount: number = 1) {
        this.score += amount;
        this.scoreText.setText(`Poäng: ${this.score}`);
    }

    get currentScore() {
        return this.score;
    }
}
