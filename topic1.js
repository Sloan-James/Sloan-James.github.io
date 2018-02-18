var Expenses = new Array();

function addExpense() {

  var I = new function(){
    var date = document.getElementById("date").value;

    if (validateDate(date)) {
      var day, month, year;

      result = date.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}");
      if(null != result) {
        dateSplitted = result[0].split(result[1]);
        month = dateSplitted[0];
        day = dateSplitted[1];
        year = dateSplitted[2];
      }
      this.month = month
      this.day = day
      this.year = year
      this.description = document.getElementById("description").value;
      this.cost = document.getElementById("cost").value;
    }

    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
    this.cost = document.getElementById("cost").value = "";

    Expenses.push(I);

    displayExpenses();
    }
    else (
      alert("Please enter date in mm/dd/yyyy format with a proper date");
    )

}

function removeExpense() {
  var ID = document.getElementById("removeID").value;

  if(ID > 1 && ID <= Expenses.length) {
    Expenses.splice(ID-1,1);
  }

  displayExpenses();
}

function displayExpenses() {

  Expenses.sort(function(a,b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }

    if (a.month < b.month) {
      return -1;
    }
    if (a.month > b.month) {
      return 1;
    }

    if (a.day < b.day) {
      return -1;
    }
    if (a.day > b.day) {
      return 1;
    }

    return 0;
  });

  var result = "";
  for (i = 0, i < Expenses.length, i++) {
    var date = Expenses[i].month + "/" + Expenses[i].day + "/" + Expenses[i].year;
    result += "<li>" + date + " - " + Expenses[i].description + " : " + Expenses[i].cost + "</li>";
  }

  document.getElementById("expenseList").innerHTML = result;
}

function removeAll() {
  if(confirm("Are you sure you want to delete all?")) {
    while( Expenses.length > 0) {
      Expenses.pop();
    }
  }
}

function validateDate(date) {
  if(date.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}")) {
    var values = date.split('/');
    var mm = parseInt(values[0]);
    var dd = parseInt(values[1]);
    var yyyy = parseInt(values[2]);

    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (mm==1 || mm>2) {
      if(dd>ListofDays[mm-1]) {
        alert("Invalid date format");
        return false;
      }
    } else {
      var lyear = false;
      if ( (!(yyyy % 4) && yyyy % 100) || !(yyyy %400)) {
        lyear = true;
      }
      if ((lyear == false) && (dd >= 29)) {
        alert("Invalid date format");
        return false;
      }
      if ((lyear == true) && (dd > 29)) {
        alert("Invalid date format");
        return false;
      }
    }

  }
}
