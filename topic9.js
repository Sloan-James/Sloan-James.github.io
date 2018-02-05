function displayDate() {
  d = Date();
  document.getElementById("test").innerHTML = d.toDateString();
}

function draw(e){
  var c = document.getElementById("drawCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(e.clientX,e.clientY);
  ctx.lineTo(e.clientX,e.clientY);
  ctx.stroke();
}
