var gameState = [false]
var boxLoops = [startInterval]
var counts = [0]
var remaining = 10
var hp = 3
var hit = false

var min = 0.2
var max = 0.4


function endGame() {
  $("#gameover").removeClass("delete")
  clearInterval(interval)
}

var interval = setInterval(function(){
  if(hp < 1) endGame()
  for(var i = 0; i < 1; i++) {
   if (!gameState[i] && counts[i] < 15) {
    counts[i]++
    gameState[i] = true
    boxLoops[i]()
   }
  }
  if (box1.alt > 69) {
    hit = true
  }
}, 1)

if (counts > 9) {
  $("#box1").addClass("delete")
}

function resetBox(b, boxNumber) {
  if (hit) {
    hp--
    hit = false
  }
  b.alt = 7
  $("#box1").removeClass("delete")
  b.speed = Math.random() * (max - min) + min;
  gameState[boxNumber] = false
}
 
                                                                          /*--------------------------------*/
                                                                          /*              Box 1             */
                                                                          /*--------------------------------*/

box1 = {
  alt: 7,
  speed: 0.1
}

function drawDivInLocation(item) {
  $("#box1").css({"top": "" + item.alt + "vh"}) 
}


$(document).keydown(function(e) {  
  var n = parseInt($("#box1").css("top"))
  if(e.keyCode == 68 && box1.alt > 45 && box1.alt < 60) {
  $("#box1").addClass("delete")
  hp++
  } 
  else {
   
  }
});



function startInterval() {
  var intervalId1 = setInterval(function(){
    box1.alt += box1.speed;
    drawDivInLocation(box1) 

    if (box1.alt > 70) {

      clearInterval(intervalId1)
      resetBox(box1, 0)
    }
    
  }, 2);
}  