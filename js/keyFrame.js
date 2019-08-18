const keyFrame = (self) => {
  self.anims.create({
    key: 'run',
    frames: self.anims.generateFrameNumbers('user', {start: 0, end: 1}),
    frameRate: 0,
    repeat: -1
  }),
  self.anims.create({
    key: 'fly',
    frames: self.anims.generateFrameNumbers('user', {start: 2, end: 3}),
    frameRate: 5,
    repeat: -1
  })

  // console.log(self)
}