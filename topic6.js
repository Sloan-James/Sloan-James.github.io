function nameCombine(el) {
  var parent = el.parentNode;
  var para = document.createElement("P");
  para.innerHTML = el.previousSibling.previousSibling.nodeValue + el.previousSibling.nodeValue;
  parent.removeChild(parent.lastChild);
  parent.appendChild(para);
}

function reorder() {
  var list = document.getElementById("List");
  var node = list.lastChild;
  list.insertBefore(node,list.childNodes[0]);
}
