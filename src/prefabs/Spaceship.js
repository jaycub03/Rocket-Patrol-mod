// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.points = pointValue // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed // spaceship speed in pixels/frame

        //random spaceship direction
        this.direction = Math.random() < 0.5 ? -1 : 1
    }

    update() {
        // move spaceship left
        this.x += this.moveSpeed * this.direction

        // wrap from left to right edge
        if(this.x <= 0 - this.width && this.direction === -1) {
           this.reset()
        } else if (this.x >= game.config.width && this.direction === 1) {
            this.reset()
        }
    }

    //reset position
    reset() {
        this.direction = Math.random() < 0.5 ? -1 : 1
        if (this.direction === -1) {
            this.x = game.config.width + this.width
        }else {
            this.x = 0-this.width
        }
        this.y = Phaser.Math.Between(borderUISize * 4, game.config.height - borderUISize * 4)
    }
}