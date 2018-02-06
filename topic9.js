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
  /*Canvas*/
  canvas = document.getElementById("drawCanvas");
  ctx = canvas.getContext("2d");
  w = canvas.width;
  h = canvas.height;


/*Mouse use*/
if(!touchAvailable){
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
}




/*Date*/
  document.getElementById("date").innerHTML = "This page was loaded on: " + Date();

/*Animation*/
  var anim = document.getElementById("anim");
  anim.addEventListener("click",ToggleAnimation, false);
  PrefixedEvent(anim, "AnimationStart", AnimationListener);
  PrefixedEvent(anim, "AnimationIteration", AnimationListener);
  PrefixedEvent(anim, "AnimationEnd", AnimationListener);
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
var pfx = ["webkit","moz","MS","o",""];



function PrefixedEvent(element, type, callback) {
  for (var p = 0; p < pfx.length; p++){
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p]+type,callback, false);
    }
}



function AnimationListener(e) {
  if(e.type.toLowerCase().indexOf("animationend") >= 0) {
    ToggleAnimation();
  }
}

function ToggleAnimation(e) {
  var anim = document.getElementById("anim");
  var on = (anim.className != "");
  anim.textContent = "Click to "+(on ? "start" : "stop")+" animation";
  anim.className = (on ? "" : "enable");
  if (e) e.preventDefault();
};
