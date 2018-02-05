/* Canvas Drawing */
var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 2;

function initialize() {
  canvas = document.getElementById("drawCanvas");
  ctx = canvas.getContext("2d");
  w = canvas.width;
  h = canvas.height;

  canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
    findxy('down',e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
    findxy('up',e)
  }, false);
  canvas.addEventListener("mouseout",function (e){
    findxy('out',e)
  }, false);

  document.getElementById("date").innerHTML = "This page was loaded on: " + Date();
}

function color(obj) {
  x = obj.id;
  if (x == "white") y = 14;
  else y = 2;
}

function findxy(res,e) {
  if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.getBoundingClientRect().left;
    currY = e.clientY - canvas.getBoundingClientRect().top;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
      ctx.beginPath();
      ctx.fillStyle = x;
      ctx.fillRect(currX, currY, 2,2);
      ctx.closePath();
      dot_flag = false;
    }
  }
  if (res == 'up' || res == 'out'){
    flag = false;
  }
  if (res == 'move') {
    if (flag) {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.getBoundingClientRect().left;
      currY = e.clientY - canvas.getBoundingClientRect().top;
      draw();
    }
  }
}

function draw(){
  ctx.beginPath();
  ctx.moveTo(prevX,prevY);
  ctx.lineTo(currX,currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

function erase() {
  var m = confirm("Want to clear");
  if (m) {
    ctx.clearRect(0,0,w,h);
    document.getElementById("canvasimg").style.display = "none";
  }
}

function save() {
  document.getElementById("canvasimg").style.border = "2px solid";
  var dataURL = canvas.toDataURL();
  document.getElementById("canvasimg").src = dataURL;
  document.getElementById("canvasimg").style.display = "inline";
}

/*Animation Events*/
var anim = document.getElementById("animation");

function moveFunction() {
  anim.style.WebkitAnimation = "mymove 4s 2";
  anim.style.animation = "mymove 4s 2";
}

// Code for Chrome, Safari and Opera
anim.addEventListener("webkitAnimationStart", myStartFunction);
anim.addEventListener("webkitAnimationIteration", myRepeatFunction);
anim.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
anim.addEventListener("animationstart", myStartFunction);
anim.addEventListener("animationiteration", myRepeatFunction);
anim.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.style.backgroundColor = "green";
}

function myRepeatFunction() {
  this.style.backgroundColor = "yellow";
}

function myEndFunction() {
  this.style.backgroundColor = "red"
}
