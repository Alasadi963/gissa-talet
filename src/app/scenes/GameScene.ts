import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    private player!: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('player', 'path/to/player.png'); // Lägg till en riktig bild
    }

    create() {
        this.player = this.physics.add.sprite(400, 300, 'player');
        this.player.setCollideWorldBounds(true);
    }

    update() {
        // Lägg till interaktivitet här (ex: rörelse med piltangenter)
    }
}
