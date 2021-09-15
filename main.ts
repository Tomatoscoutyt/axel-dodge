info.onCountdownEnd(function () {
    game.over(true, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fountain, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.thump.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`background`)
let mySprite = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(1)
info.startCountdown(60)
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
