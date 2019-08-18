const gameStart = {
  key: 'gameStart',
  preload: function() {
    this.load.image('bg4', './image/bg/bg4.png');
    this.load.image('bg3', './image/bg/bg3.png');
    this.load.image('bg2', './image/bg/bg2.png');
    this.load.image('bg1', './image/bg/bg1.png');
    this.load.image('footer', './image/bg/footer.png');

    this.load.image('title', '/image/ui/txt-title.png')
    this.load.image('playBtn', '/image/ui/btn-press-start.png')
    this.load.image('logo', '/image/item-skill-ball-1.png')
  },
  create: function() {
    this.bg4 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg4')
    this.bg3 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg3')
    this.bg2 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg2')
    this.bg1 = this.add.tileSprite(width / 2, height / 2, width, height, 'bg1')
    this.footer = this.add.tileSprite(width / 2, height - 55, width, 90, 'footer')

    let title = this.add.image(width / 2, height / 2 - 20, 'title');
    title.setScale(0.8);

    let playBtn = this.add.image(width / 2, height - 118, 'playBtn')
    playBtn.setScale(0.6)

    let logo = this.add.image(width / 2 - 100, height - 260, 'logo')
    logo.setScale(0.7)
  },
  update: function() {
    this.bg3.tilePositionX += 0.5;
    this.bg2.tilePositionX += 1.5;
    this.bg1.tilePositionX += 2.5;
    this.footer.tilePositionX += 2;
  }
}