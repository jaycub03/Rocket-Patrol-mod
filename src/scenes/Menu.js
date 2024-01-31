class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene")
    }
    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/Rocket/rocket.png')
        this.load.image('spaceship', './assets/Rocket/spaceship.png')
        this.load.image('starfield', './assets/Rocket/starfield.png')
        // load audio
        this.load.audio('sfx-select', './assets/Rocket/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/Rocket/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/Rocket/sfx-shot.wav')
        //load spritesheet
        this.load.spritesheet('explosion', './assets/Rocket/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
      }
    create() {
        //animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                start:0,
                end: 9,
                first: 0
            }),
            frameRate: 30
        })
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3b141',
            color: '#843605',
            padding: {
                top:5,
                bottom:5,
            },
            fixedWidth: 0
        }
        //display menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5)
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer:60000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer:45000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }

    }
  }