/* global $, sessionStorage*/

$(document).ready(function(){
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// INITIALIZATION ///////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FPS = 60;
  var BOARD_WIDTH = $("#board").width();
  var BOARD_HEIGHT = $("#board").height();
  
  // HTML jQuery Objects
  var $board = $("#board");

  // other game variables

  // interval variable required for stopping the update function when the game ends
  var updateInterval;

  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  // start the game
  startGame();

  /* 
  * Called once per "interval"
  */
  function drawNewFrame() {
    

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// EVENT HANDLERS //////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handleEvent(event) {

  }
  
  function startGame() {
    // start the interval timer
    updateInterval = setInterval(drawNewFrame, 1000 / FPS);

    // turn on event handlers
    $(document).on('eventType', handleEvent);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(updateInterval);

    // turn off event handlers
    $(document).off();
  }
  
});
