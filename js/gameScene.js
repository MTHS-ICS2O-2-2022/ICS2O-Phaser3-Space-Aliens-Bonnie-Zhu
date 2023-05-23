/* global Phaser */

/*
 * This class is the Game Scene.
 **/
class GameScene extends Phaser.Scene {
  // creat an alien
  createAlien() {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920
    let alienXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50
    alienXVelocity *= Math.floor(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
    const analien = this.physics.add.sprite(alienXLocation, -100, "alien")
    analien.body.velocity.y = 200
    analien.body.velocity.x = alienXVelocity
    this.aliensGroup.add(anAlien)
  }

  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "gameScene" })
    this.background = null
    this.ship = null
    this.fireMissile = false // Added declaration for fireMissile
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Game Scene")

    // images
    this.load.image("starBackground", "assets/starBackground.png")
    this.load.image("ship", "assets/spaceShip.png")
    this.load.image("missile", "assets/missile.png") // Added missile asset
    this.load.image("alien", "assets/alien.png")
    // sounds
    this.load.audio("laser", "assets/laser1.wav")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // create a group for the missiles
    this.missilesGroup = this.physics.add.group() // Moved missilesGroup creation to create() method

    // create a group for the aliens
    this.aliensGroup = this.physics.add.group()
    this.createAlien()
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // called 60 times a second, hopefully!

    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) this.ship.x = 0
    }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) this.ship.x = 1920
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire a missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(
          this.ship.x,
          this.ship.y,
          "missile"
        )
        this.missilesGroup.add(aNewMissile)
        this.sound.play("laser")
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missilesGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene
