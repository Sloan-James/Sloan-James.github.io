function displayDate() {
  document.getElementById("test").innerHTML = Date().toDateString();
}

function draw(e){
  var c = document.getElementById("drawCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(e.clientX,e.clientY);
  ctx.lineTo(e.clientX,e.clientY);
  ctx.stroke();
}
