sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(randint(5, 40), randint(-10, 10))
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
    sprite.setFlag(SpriteFlag.BounceOnWall, true)
    if (Math.percentChance(50)) {
        sprite.setImage(assets.image`BellyMouth`)
    } else {
        sprite.setImage(assets.image`Walking toaster`)
    }
})
// This is a little boost ability
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.powerUp.play()
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f . . . . 
        . . f d d e d d d d d f f . . . 
        . . f e d d d d d d d d f . . . 
        . . f d d d f d d f d d f . . . 
        . . f d d d d f d d f e f . . . 
        . . f d d d d f d d f d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d d d d e d d d f f . . 
        . . f d e f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f e d d d d d d d d d f . . 
        . . f d d d d d d d d e d f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f d e d d d e d d f f . . 
        . . . f d d d d d d d d d f . . 
        . . . f d d f f d d f d d f . . 
        . . . f d d d d f d d f d f . . 
        . . . f d d d d f d d f d f . . 
        . . . f d d d d d d d d d f f . 
        . . . f d d f f e d d d e d f . 
        . . . f e d f f d d d d d d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d e d d f . 
        . . . f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f f . . 
        . . . . f e d d d d e d d f f . 
        . . . . f d d d d d d d d d f . 
        . . . . f d d d f d d f d d f . 
        . . . . f d d d d f d d f d f . 
        . . . . f d d d d f d d f d f . 
        . . . . f e d d d d d d d d f f 
        . . . . f d d f f d d d d e d f 
        . . . . f d d f f d d d d d d f 
        . . . . f d d d d d d d d d d f 
        . . . . f d d d d d d d d d d f 
        . . . . f d d d e d d e d d d f 
        . . . . f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f . . . 
        . . f d d e d d d d e d f f . . 
        . . f d d f d d f d d d d f . . 
        . . f d d d f d d f d d d f . . 
        . . f d d d f d d f d d d f . . 
        . . f d d d d d d d d d d f f . 
        . . f d d e d d d d d d d f f . 
        . . f d d d f f d d d d d e f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d e d d e d d f . 
        . . f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    false
    )
    controller.moveSprite(mySprite, 0, 0)
    touchDestroy = 1
    settle = 1
    mySprite.startEffect(effects.fire, 500)
    mySprite.setVelocity(controller.dx(8000), controller.dy(8000))
    timer.debounce("action", 500, function () {
        touchDestroy = 0
        mySprite.setVelocity(0, 0)
        effects.clearParticles(mySprite)
        controller.moveSprite(mySprite, 100, 100)
    })
    timer.after(1000, function () {
        settle = 0
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f d d e d d d d d f f . . . 
            . . f e d d d d d d d d f . . . 
            . . f d d d d d d d d d f . . . 
            . . f d d f d d f d d e f . . . 
            . . f d d f d d f d d d f . . . 
            . . f d d d d d d d d d f . . . 
            . . f d d d d d e d d d f f . . 
            . . f d e f f d d d d d d f . . 
            . . f d d d d d d d d d d f . . 
            . . f e d d d d d d d d d f . . 
            . . f d d d d d d d d e d f . . 
            . . f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f d d e d d d d d f f . . . 
            . . f e d d d d d d d d f . . . 
            . . f d d d d d d d d d f . . . 
            . . f d d f d d f d d e f . . . 
            . . f d d f d d f d d d f . . . 
            . . f d d d d d d d d d f . . . 
            . . f d d d d d e d d d f f . . 
            . . f d e f f d d d d d d f . . 
            . . f d d d d d d d d d d f . . 
            . . f e d d d d d d d d d f . . 
            . . f d d d d d d d d e d f . . 
            . . f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f d e d d d d d d f f . . 
            . . . f d d d d d d d d d f . . 
            . . . f d d d d d d d d d f . . 
            . . . f d d f d d f d e d f . . 
            . . . f d d f d d f d d d f . . 
            . . . f d d d d d d d d d f . . 
            . . . f d d d d e d d d d f f . 
            . . . f d d f f d d d d d d f . 
            . . . f d e d d d d d d d d f . 
            . . . f d d d d d d d d d d f . 
            . . . f e d d d d d d e d d f . 
            . . . f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`PoptartChunk`, mySprite, 90, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    mySprite.startEffect(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (touchDestroy == 0 && settle == 0) {
        otherSprite.destroy(effects.disintegrate, 500)
        scene.cameraShake(4, 500)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.value += -20
    } else if (touchDestroy == 1) {
        otherSprite.destroy(effects.disintegrate, 500)
        info.changeScoreBy(1)
    } else if (settle == 1) {
        otherSprite.destroy(effects.disintegrate, 500)
        info.changeScoreBy(1)
    }
})
let enemySprite: Sprite = null
let projectile: Sprite = null
let settle = 0
let touchDestroy = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
game.showLongText("press SPACE(A Button) to shoot poptart and X (B Button) to boost", DialogLayout.Bottom)
info.setLife(3)
scene.setBackgroundColor(10)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Poptart2`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f . . . . 
    . . f d d e d d d d d f f . . . 
    . . f e d d d d d d d d f . . . 
    . . f d d d d d d d d d f . . . 
    . . f d d f d d f d d e f . . . 
    . . f d d f d d f d d d f . . . 
    . . f d d d d d d d d d f . . . 
    . . f d d d d d e d d d f f . . 
    . . f d e f f d d d d d d f . . 
    . . f d d d d d d d d d d f . . 
    . . f e d d d d d d d d d f . . 
    . . f d d d d d d d d e d f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f . . . . 
    . . f d d e d d d d d f f . . . 
    . . f e d d d d d d d d f . . . 
    . . f d d d d d d d d d f . . . 
    . . f d d f d d f d d e f . . . 
    . . f d d f d d f d d d f . . . 
    . . f d d d d d d d d d f . . . 
    . . f d d d d d e d d d f f . . 
    . . f d e f f d d d d d d f . . 
    . . f d d d d d d d d d d f . . 
    . . f e d d d d d d d d d f . . 
    . . f d d d d d d d d e d f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f d e d d d d d d f f . . 
    . . . f d d d d d d d d d f . . 
    . . . f d d d d d d d d d f . . 
    . . . f d d f d d f d e d f . . 
    . . . f d d f d d f d d d f . . 
    . . . f d d d d d d d d d f . . 
    . . . f d d d d e d d d d f f . 
    . . . f d d f f d d d d d d f . 
    . . . f d e d d d d d d d d f . 
    . . . f d d d d d d d d d d f . 
    . . . f e d d d d d d e d d f . 
    . . . f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
mySprite.setPosition(28, 120)
controller.moveSprite(mySprite, 100, 100)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar.max = 50
statusbar.attachToSprite(mySprite)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(assets.image`Walking toaster`, SpriteKind.Enemy)
    enemySprite.setPosition(randint(30, 160), randint(0, 200))
})
game.onUpdateInterval(100, function () {
    if (info.score() == 300) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(100, function () {
    if (statusbar.value <= 0 && info.life() <= 0) {
        game.over(false, effects.dissolve)
    } else if (statusbar.value <= 0) {
        game.splash("You Lost A Life!!")
        info.changeLifeBy(-1)
        statusbar.value += 50
        mySprite.setPosition(10, 100)
    }
})
