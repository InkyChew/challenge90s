const gamePlay = {
  key: 'gamePlay',
  preload: function() {
    this.load.image('bg4', './image/bg/bg4.png');
    this.load.image('bg3', './image/bg/bg3.png');
    this.load.image('bg2', './image/bg/bg2.png');
    this.load.image('bg1', './image/bg/bg1.png');
    this.load.image('footer', './image/bg/footer.png');
    this.load.spritesheet('user', './image/player.png', {frameWidth: 144, frameHeight: 120});
  },
  create: function() {
    this.bg4 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg4');
    this.bg3 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg3');
    this.bg2 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg2');
    this.bg1 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg1');
    this.footer = this.add.tileSprite(width / 2, height - 55, width, 90, 'footer');

    this.player = this.physics.add.sprite(150, 150, 'user');
    // space then bounce
    // this.player.setBounce(1);

    // 動畫影格
    keyFrame(this);

    // 加入物理效果
    const addPhysics = GameObject => {
      this.physics.add.existing(GameObject);
      GameObject.body.immovable = true;
      GameObject.body.moves = false;
    }
    addPhysics(this.footer);
    this.physics.add.collider(this.player, this.footer);

    // this.anims.create({
    //   key: 'run',
    //   frames: this.anims.generateFrameNumbers('user', {start:0, end:1}),
    //   frameRate: 5,
    //   repeat: -1
    // })
    // this.player.anims.play('run', true)

    // Timer
    this.timeText = this.add.text(620, 400, 'TIME: 90s', {fontSize: '24px'})
  },
  update: function() {
    this.bg3.tilePositionX += 0.5;
    this.bg2.tilePositionX += 1.5;
    this.bg1.tilePositionX += 2.5;
    this.footer.tilePositionX += 2;

    // this.input.keyboard.on('keydown', callback, context);
    var hotKey = this.input.keyboard.createCursorKeys()
    // console.log(hotKey.space)
    if(hotKey.space.isDown) {
      console.log(hotKey.space)
      this.player.anims.play('fly', true)
    } else {
      this.player.anims.play('run', true)
    }  
  }
}