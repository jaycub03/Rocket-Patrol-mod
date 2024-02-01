//Jacob Ganburged
//Time took to finish(8 hours)
//MODS DOWN BELOW
//Implemented mouse control for player movement and left mouse click to fire(5)
//added timer (3)
//Created a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
//Created a new title screen (e.g., new artwork, typography, layout) (3)
//Allowed the player to control the Rocket after it's fired (1)
//Randomized each spaceship's movement direction at the start of each play (1)
//Implemented the 'FIRE' UI text from the original game (1)
//Added my own (copyright-free) looping background music to the Play scene (keep the volume low and be sure that multiple instances of your music don't play when the game restarts)(1)
//Citations
//Background music https://pixabay.com/music/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
  }
let game = new Phaser.Game(config)
// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3