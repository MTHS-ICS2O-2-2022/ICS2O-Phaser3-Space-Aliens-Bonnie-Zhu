/*global Phaser*/

//copyright:Bonnie ZHu
//created on: April 2023
//created by: Bonnie ZHu
//This is the menu scene

/**
 * This class is the Menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "menuScene" })
  }

  /**
   *Can be defined on your own Scenes.
    *This method is called by the Scene Manager when the scene starts,
    *before preload() and create()
    *@param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Menu Scene")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    //pass
  }
  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last time.
   */
  update(time, delta) {
    //pass
  }
}
export default MenuScene