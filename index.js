/* global $, sessionStorage*/

////////////////////////////////////////////////////////////////////////////////
///////////////////////// INITIALIZATION ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Constant Variables
var FPS = 60;

// HTML jQuery Objects
var $board = $('#board');
var $score = $('#score');
var $gameItem = $("#gameItem");

// game variables


// interval variable required for stopping the update function when the game ends
var updateInterval;

function startGame() {
  // start the interval timer
  updateInterval = setInterval(update, 1000 / FPS);

  // register event handler to listen for clicks
  $gameItem.on('click', handleItemClick);
}
////////////////////////////////////////////////////////////////////////////////
///////////////////////// CORE LOGIC ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


/* 
 * Called once per "interval"
 */
function update() {
  
}

/**
 * Called in response to "click" events on the gameItem
 */
function handleItemClick() {

}

////////////////////////////////////////////////////////////////////////////////
////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function endGame() {
  // stop the interval timer
  clearInterval(updateInterval);

  // turn off event handlers
  $gameItem.off();
}