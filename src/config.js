/*
 * `config` module
 * ===============
 *
 * The game instance settings.
 */

import { canvasParent } from './utils';

//  The game canvas dimensions.
export const width = canvasParent().offsetWidth;
export const height = canvasParent().offsetHeight;

//  Choose the rendering method. Available values are:
//  * WEBGL: Use WebGL rendering;
//  * CANVAS: Use 'context2D' API rendering method;
//  * AUTO: Phaser will choose, based on the device capabilities, the best
//          rendering method to be used.
export const renderer = Phaser.AUTO;


//  Declare the pixel density of the game graphics.
export const resolution = 1;

//The dom element to put the canvas in
export const parent = canvasParent().element;

//  Uncomment to disable rendering anti-aliasing. Great for pixel art.
// export const antialias = false;

//  Uncomment to enable WebGL multi-texture features.
// export const multiTexture = true;

//  Uncomment to enable canvas transparency.
// export const transparent = true;

//  Uncomment to disable the Phaser debugging API.
//  TODO: Automate the production build to conditionally enable this flag.
// export const enableDebug = false;
