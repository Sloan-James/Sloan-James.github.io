function changeCanvas(name){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  switch(name) {
    case "Empty":
      empty(ctx;
      break;
    case "Strikethrough":
      strikethrough(ctx);
      break;
    case "Circle":
      circle(ctx);
      break;
    case "Hello":
      hello(ctx);
      break;
    case "Gradient":
     gradient(ctx);
     break;
    default:
  }

  return;
}

function empty(ctx) {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,200,100);
}

function strikethrough(ctx) {
  ctx.moveTo(0,0);
  ctx.lineTo(200,100);
  ctx.stroke();
}

function circle(ctx) {
  ctx.beginPath();
  ctx.arc(95,50,40,0,2*Math.PI);
  ctx.stroke();
}

function hello(ctx) {
  ctx.font = "30px Arial";
  ctx.fillText("Hello World",10,50);
}

function gradient(ctx) {
  var grd = ctx.createLinearGradient(0,0,200,0);
  grd.addColorStop(0,"blue");
  grd.addColorStop(1,"white");

  ctx.fillStyle = grd;
  ctx.fillRect(0,0,200,100);
}
