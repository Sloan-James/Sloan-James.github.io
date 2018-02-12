function nameCombine(el) {
  var para = document.createElement("P");
  para.innerHTML = el.previousSibling.previousSibling.nodeValue + el.previousSibling.nodeValue;
  el.parentNode.appendChild(para);
}

function reorder() {
  var list = document.getElementById("List");
  var node = list.lastChild;
  list.insertBefore(node,list.childNodes[0]);
}
