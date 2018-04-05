                                                                          /*--------------------------------*/
                                                                          /*              Box 1             */
                                                                          /*--------------------------------*/

box1 = {
  alt: 7
}


function drawDivInLocation(item) {
  $("#box1").css({"top": "" + item.alt + "px"}) 
}


$(document).keydown(function(e) {  
  if((e.keyCode == 68) && (box1.alt > 630) && (box1.alt < 705))
  $("#box1").addClass("delete")
});


var intervalId = setInterval(function(){
  box1.alt += 1;
  drawDivInLocation(box1) 
  if (box1.alt === 750) 
  clearInterval(intervalId)
}, 2);


                                                                          /*--------------------------------*/
                                                                          /*              Box 2             */
                                                                          /*--------------------------------*/

box2 = {
  alt: 7
}


setTimeout(function(){ function drawDivInLocation2(item) {
  $("#box2").css({"top": "" + item.alt + "px"}) 
}


$(document).keydown(function(e) {  
  if((e.keyCode == 70) && (box2.alt > 630) && (box2.alt < 705)) {
  $("#box2").addClass("delete");
  }
  else if (box2.alt >= 700) {
  $("#box2").addClass("delete");
}
});



var intervalId2 = setInterval(function(){
  box2.alt += 1;
  drawDivInLocation2(box2) 
  if (box2.alt === 750) 
  clearInterval(intervalId2)
}, 5); }, Math.random()*(1000 - 3000) + 3000)




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
                                                                          /*              Box 4             */
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