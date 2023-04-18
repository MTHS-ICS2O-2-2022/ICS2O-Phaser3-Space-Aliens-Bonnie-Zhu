/* global Phaser */

// Copyright (c) Bonnie Z
//
// Created by: Bonnie Z
// Created on: April 2023
/**
*Start Phaser Game
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

  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log(game)