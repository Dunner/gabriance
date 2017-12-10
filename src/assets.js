/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

//  -- Splash screen assets used by the Preloader.
export const preloaderAssets = [{
  key: 'splash-screen',
  type: 'image'
}, {
  key: 'progress-bar',
  type: 'image'
}];

//  -- General assets used throughout the game.
export const gameAssets = [{
  key: 'character',
  type: 'image'
},
{
  key: 'bg-grid',
  type: 'image'
},
{
  key: 'bggradient',
  type: 'image'
}
];
