class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene")
      this.timerText = null
    }
    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/Rocket/rocket.png')
        this.load.image('spaceship', './assets/Rocket/newspaceship.png')
        this.load.image('starfield', './assets/Rocket/starfield.png')
        // load audio
        this.load.audio('sfx-select', './assets/Rocket/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/Rocket/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/Rocket/sfx-shot.wav')
        //load background music
        this.load.audio('separation-185196', './assets/Rocket/separation-185196.mp3')
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
        //menu configuration
        let menuConfig = {
            fontFamily: 'Ariel',
            fontSize: '28px',
            backgroundColor: '#6a0dad',
            color: '#FFFFFF',
            padding: {
                top:5,
                bottom:5,
            },
            fixedWidth: 0
        }
        //direction configuration
        let directionsConfig = { 
            fontFamily: 'Arial',
            fontSize:'20px',
            backgroundColor: '#6a0dad',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top:5,
                bottom:5
            },
            fixedWidth: 0
        }
        
        //display menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'JACOB\'sROCKET PATROL ( ͡👁️ ͜ʖ ͡👁️)👌', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height - borderUISize - borderPadding, 'Use mouse to move & click to fire', directionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', directionsConfig).setOrigin(0.5)
        
        //check if music playing
        if (!this.backgroundMusic || !this.backgroundMusic.isPlaying) {
            this.backgroundMusic = this.sound.add('separation-185196', {volume: 0.5, loop: true })
            this.backgroundMusic.play()
        }
        menuConfig.backgroundColor = '#000080'
        menuConfig.color = '#000'
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //easy mode
            game.settings = {
                spaceshipSpeed: 5,
                gameTimer:60000 //60 seonds for easy
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            //hard mode
            game.settings = {
                spaceshipSpeed: 7,
                gameTimer:45000 // 45 seconds for hard mode
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }

    }
  }