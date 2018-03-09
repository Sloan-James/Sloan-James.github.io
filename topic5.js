function ListItem(itemName, amount) {
    this.itemName = itemName;
    this.amount = amount;
}

function deleteTable(table) {

    while (table.hasChildNodes()){
        table.deleteRow(0);
    }
}

function loadList() {
    var table = document.getElementById("list");

    deleteTable(table);

    var groceryList = JSON.parse(localStorage.getItem("groceryList"));

    if(groceryList !== null) {
        groceryList.forEach(function (rowData) {

            var nodeRow = document.createElement("tr");
            table.appendChild(nodeRow);
            row = table.lastChild;

            var nodeColumn = document.createElement("td");
            nodeColumn.innerHTML = rowData.itemName;
            row.appendChild(nodeColumn);

            var nodeColumn = document.createElement("td");
            nodeColumn.innerHTML = rowData.amount;
            row.appendChild(nodeColumn);

            var nodeColumn = document.createElement("td");
            nodeColumn.innerHTML = '<button onclick="removeFromList(this.parentNode.parentNode.rowIndex)">Remove</button>';
            row.appendChild(nodeColumn);
        })
    }
}

function addToList() {
    item = document.getElementById("item");
    amount = document.getElementById("amount");

    var newItem = new ListItem(item.value,amount.value);


    var groceryList = JSON.parse(localStorage.getItem("groceryList"));
    if (groceryList === null) {
        groceryList = Array();
    }
    groceryList.push(newItem);
    localStorage.setItem("groceryList", JSON.stringify(groceryList));

    item.value = "";
    amount.value = "";

    loadList();
}

function removeFromList(index) {
    console.log(index);
    var groceryList = JSON.parse(localStorage.getItem("groceryList"));
    groceryList.splice(index,1);
    localStorage.setItem("groceryList",JSON.stringify(groceryList));

    loadList();
}
