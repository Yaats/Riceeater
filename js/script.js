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
  if((e.keyCode == 68) && (box1.alt > 500) && (box1.alt < 705))
  alert("lourd")
});


var intervalId = setInterval(function(){
  box1.alt += 1;
  drawDivInLocation(box1) 
  if (box1.alt === 750) 
  clearInterval(intervalId)
}, 1);


                                                                          /*--------------------------------*/
                                                                          /*              Box 2             */
                                                                          /*--------------------------------*/

box2 = {
  alt: 7
}


function drawDivInLocation2(item) {
  $("#box2").css({"top": "" + item.alt + "px"}) 
}


$(document).keydown(function(e) {  
  if((e.keyCode == 70) && (box2.alt > 500) && (box2.alt < 705))
  alert("lourd")
});


var intervalId2 = setInterval(function(){
  box2.alt += 1;
  drawDivInLocation2(box2) 
  if (box2.alt === 750) 
  clearInterval(intervalId2)
}, 1);


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
  if((e.keyCode == 74) && (box3.alt > 500) && (box3.alt < 705))
  alert("lourd")
});


var intervalId3 = setInterval(function(){
  box3.alt += 1;
  drawDivInLocation3(box3) 
  if (box3.alt === 750) 
  clearInterval(intervalId3)
}, 1);


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
  if((e.keyCode == 75) && (box4.alt > 500) && (box4.alt < 705))
    alert("lourd")
});


var intervalId4 = setInterval(function(){
  box4.alt += 1;
  drawDivInLocation4(box4) 
  if (box4.alt === 750) 
    clearInterval(intervalId4)
 }, 1);