/* global Phaser */

// Copyright (c) Bonnie Z
//
// Created by: Bonnie Z
// Created on: April 2023
/**
*Start Phaser Game
*/

// scene importt statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"

//create the new svene
const splashScene = new SplashScene()
const titleScene = new TitleScene()

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.ATUO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
//set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
//console.log(game)

//load scenes
//Note: remember any"key" is lobal an can Not be reused
game.scene.add("SplashScene", splashScene)
game.scene.add("TitleScene", titleScene)

//the start scene
game.scene.start("SplashScene")