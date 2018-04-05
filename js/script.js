

var gameState = [false, false, false, false]
var boxLoops = [startInterval1, startInterval2]
var counts = [0,0,0,0]

setInterval(function(){
 for(var i = 0; i < 1; i++) {
   if (!gameState[i] && counts[i] < 25) {
    counts[i]++
    gameState[i] = true
    boxLoops[i]()
   }
 }

}, 1)

function resetBox(b, boxNumber) {
  b.alt = 7
  $("#box2").removeClass("delete")
  b.speed = Math.floor(Math.random() * 3 + 1)
  gameState[boxNumber] = false
}


                                                                          /*--------------------------------*/
                                                                          /*              Box 1             */
                                                                          /*--------------------------------*/

box1 = {
  alt: 7,
  speed: 1
}

function drawDivInLocation(item) {
  $("#box1").css({"top": "" + item.alt + "px"}) 
}


$(document).keydown(function(e) {  
  if((e.keyCode == 68) && (box1.alt > 630) && (box1.alt < 705))
  $("#box1").addClass("delete")
});


function startInterval1() {
  var intervalId = setInterval(function(){
    box1.alt += box1.speed;
    drawDivInLocation(box1) 

    if (box1.alt > 750) {

      clearInterval(intervalId)
      resetBox(box1, 0)
    }
    
  }, 2);

}



                                                                          /*--------------------------------*/
                                                                          /*              Box 2             */
                                                                          /*--------------------------------*/

box2 = {
  alt: 7,
  speed: 1
}

function drawDivInLocation(item) {
  $("#box2").css({"top": "" + item.alt + "px"}) 
}


$(document).keydown(function(e) {  
  if((e.keyCode == 70) && (box2.alt > 630) && (box2.alt < 705));
  $("#box2").addClass("delete")
});


function startInterval2() {
  var intervalId2 = setInterval(function(){
    box2.alt += box2.speed;
    drawDivInLocation(box2) 

    if (box2.alt > 750) {

      clearInterval(intervalId2)
      resetBox(box2, 1)
    }
  
  }, 2);

}

                                                                          /*--------------------------------*/
                                                                          /*              Box 3             */
                                                                          /*--------------------------------*/

box3 = {
  alt: 7
}


function drawDivInLocation3(item) {
  $("#box3").css({"top": "" + item.alt + "px"}) 
}


$(document).keydown(function(e) {  
  if((e.keyCode == 74) && (box3.alt > 630) && (box3.alt < 705))
  $("#box3").addClass("delete")
});


var intervalId3 = setInterval(function(){
  box3.alt += 1;
  drawDivInLocation3(box3) 
  if (box3.alt === 750) 
  clearInterval(intervalId3)
}, 8);


                                                                          /*--------------------------------*/
                                                                          /*              Box 4              */
                                                                          /*--------------------------------*/


box4 = {
  alt: 7
}

function drawDivInLocation4(item) {
  $("#box4").css({"top": "" + item.alt + "px"}) 
}


$(document).keydown(function(e) {  
  if((e.keyCode == 75) && (box4.alt > 630) && (box4.alt < 705))
    $("#box4").addClass("delete")
});


var intervalId4 = setInterval(function(){
  box4.alt += 1;
  drawDivInLocation4(box4) 
  if (box4.alt === 750) 
    clearInterval(intervalId4)
 }, 10);