/* global Phaser */

// Copyright (c) Bonnie Zhu
//
// Created by: Bonnie Zhu
// Created on: April 2023

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "titleScene" })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *  before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be difined on your own Scenes.
   * Use it to loaad assets.
   */
  preload() {
    console.log("Title Scene")
  }

  /**
   * can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    //pass
  }

  /**
   * Should be overridden by your own Scenes.
   * this method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last time.
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene