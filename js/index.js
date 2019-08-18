const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: 'app',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 850
      }
    }
  },
  scene: [gamePlay, gameStart]
}
const game = new Phaser.Game(config);