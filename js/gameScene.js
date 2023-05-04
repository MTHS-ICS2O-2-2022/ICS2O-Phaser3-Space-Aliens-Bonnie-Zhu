/* global Phaser */

// copyright:Bonnie ZHu
// create by: Bonnie Zhu
// created on: May 2023
// This is the game scene

/**
 * This class is the Game scene
 * 
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the consructor
   */
  constructor () {
    super({ key: 'gameScene' })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Game Scene')
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create (data) {
    //pass
  }

  /**
   * should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last time.
   */
  update (time, delta) {
    // pass
  }
}

export default GameScene