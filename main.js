var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

color="red";

var lastx,lastY;
var mouseevent="empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    mousex=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.moveTo(lastx,lastY);
ctx.lineTo(mousex,mouseY);
ctx.stroke();

    }
    lastx=mousex;
    lastY=mouseY;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseevent="mouseup";
}
 var width= screen.width;
 new_width=screen.width-70;
 new_height=screen.height-100;
 if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
 }
 window.addEventListener("touchstart",my_touchstart);

 function my_touchstart(e){
     lastx=e.touches[0].clientX-canvas.offsetLeft;
     lastY=e.touches[0].clientY-canvas.offsetTop;

 }
 window.alert("touchmove");
 window.addEventListener("touchmove",my_touchmove);

 function my_touchmove(e){
    currentx=e.touches[0].clientX-canvas.offsetLeft;
    currenty=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.moveTo(lastx,lastY);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
    lastx=currentx;
    lastY=currentY;

}




 