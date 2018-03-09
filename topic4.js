function thing() {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState === 4){
            if(ajaxRequest.status === 200){
                var jsonObj = JSON.parse(ajaxRequest.responseText);

                var table = document.getElementById("list");

                deleteTable(table);

                for( i = 0; i < jsonObj.employees.length; i++){
                    var nodeRow = document.createElement("tr");
                    table.appendChild(nodeRow);
                    row = table.lastChild;

                    var nodeColumn = document.createElement("td");
                    nodeColumn.innerHTML = jsonObj.employees[i].occupation;
                    row.appendChild(nodeColumn);

                    var nodeColumn = document.createElement("td");
                    nodeColumn.innerHTML = jsonObj.employees[i].firstName +
                            " " + jsonObj.employees[i].lastName;
                    row.appendChild(nodeColumn);
                }
            }
            else{
                console.log("Status error: " + ajaxRequest.status);
            }

        }
        else {
            console.log("Ignored readyState: " + ajaxRequest.readyState);
        }
    };
    ajaxRequest.open('GET', 'JSON/topic4.json',true);
    ajaxRequest.send();
}

function deleteTable(table) {

    while (table.hasChildNodes()){
        table.deleteRow(0);
    }
}
