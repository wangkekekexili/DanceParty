tiles.setTilemap(tilemap`level1`)
effects.starField.startScreenEffect()
const player: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
player.setPosition(80, 100)
controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    player.setPosition(30, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player.setPosition(100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player.setPosition(130, 100)
})
let speed = 40
game.onUpdateInterval(2000, function() {
    speed += 1
})
game.onUpdateInterval(500, function() {
    const r = Math.randomRange(0, 3)
    let s: Sprite = null
    if (r == 0) {
        s = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . 7 7 . . . . . . . . . .
            . . . 7 7 7 . . . . . . . . . .
            . . 7 7 7 7 . . . . . . . . . .
            . . 7 7 7 7 . . . . . . . . . .
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            . . 7 7 7 7 . . . . . . . . . .
            . . 7 7 7 7 . . . . . . . . . .
            . . . 7 7 7 . . . . . . . . . .
            . . . . 7 7 . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        s.setPosition(30, 8)
    } else if (r == 1) {
        s = sprites.create(img`
            . . . . . . . 7 7 . . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . 7 7 7 7 7 7 . . . . .
            . . . . . 7 7 7 7 7 7 . . . . .
            . . . . 7 7 7 7 7 7 7 7 . . . .
            . . . 7 7 7 7 7 7 7 7 7 7 . . .
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
        `, SpriteKind.Projectile)
        s.setPosition(60, 8)
    } else if (r == 2) {
        s = sprites.create(img`
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . .
            . . . 7 7 7 7 7 7 7 7 7 7 . . .
            . . . . 7 7 7 7 7 7 7 7 . . . .
            . . . . . . 7 7 7 7 . . . . . .
            . . . . . . . 7 7 . . . . . . .
        `, SpriteKind.Projectile)
        s.setPosition(100, 8)
    } else if (r == 3) {
        s = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . 7 7 . . . .
            . . . . . . . . . . 7 7 7 . . .
            . . . . . . . . . . 7 7 7 7 . .
            . . . . . . . . . . 7 7 7 7 . .
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
            . . . . . . . . . . 7 7 7 7 . .
            . . . . . . . . . . 7 7 7 7 . .
            . . . . . . . . . . 7 7 7 . . .
            . . . . . . . . . . 7 7 . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        s.setPosition(130, 8)
    }
    s.vx = 0
    s.vy = speed
})
info.setScore(0)
info.setLife(5)
info.onLifeZero(function() {
    game.over(true, effects.confetti)
})
scene.onHitWall(SpriteKind.Projectile, function(projectile, location) {
    projectile.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function(player, projectile) {
    projectile.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
