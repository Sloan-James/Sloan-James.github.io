var groceryObject = {
    "groceryList":
        [
            {"itemName":"Apples", "amount":"5"},
            {"itemName":"Avacado", "amount":"2"},
            {"itemName":"Eggs", "amount":"1 Dozen"},
            {"itemName":"Ground Beef", "amount":"1 Lb"}
        ]
    };



function deleteTable() {
    var table = document.getElementById("list");

    while (table.hasChildNodes()){
        table.deleteRow(0);
    }
}

function loadList() {
    var table = document.getElementById("list");


    deleteTable();

    for(i = 0; i < groceryObject.groceryList.length; i++) {
        var nodeRow = document.createElement("tr");
        table.appendChild(nodeRow);
        row = table.lastChild;

        var nodeColumn = document.createElement("td");
        nodeColumn.innerHTML = (i+1);
        row.appendChild(nodeColumn);

        var nodeColumn = document.createElement("td");
        nodeColumn.innerHTML = groceryObject.groceryList[i].itemName;
        row.appendChild(nodeColumn);

        var nodeColumn = document.createElement("td");
        nodeColumn.innerHTML = groceryObject.groceryList[i].amount;
        row.appendChild(nodeColumn);
    }
}

function addToList() {
    item = document.getElementById("item");
    amount = document.getElementById("amount");

    groceryObject.groceryList.push({itemName: item.value, amount: amount.value});

    item.value = "";
    amount.value = "";

    loadList();
}

function removeFromList() {
    pos = document.getElementById("remove").value;

    groceryObject.groceryList.splice(pos - 1,1);

    loadList();
}
