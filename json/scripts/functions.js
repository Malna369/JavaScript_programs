// Convert (form) data to JavaScript object
$.fn.serializeObject = function() {
  var empObj = {};
  var empArr = this.serializeArray();
  $.each(empArr, function() { 
    empObj[this.name] = this.value || '';              
  });

  // Set "employee" property
  if (empObj.hasOwnProperty('employee')) {
    empObj.employee = true;
  }
  else {
    empObj["employee"] = false;
  }
  return empObj;
}

// Adding and reprsenting data
function addJson(newEmployee){
  // Adding "newEmployee" to persons.json
  $.getJSON( "persons.json", function( data ) {       
    data.push(newEmployee);
    var newData = JSON.stringify(data);
    jQuery.post('saveJson.php', {
      newData: newData
    });

    $('#result').append("Adding " + JSON.stringify($('form').serializeObject())+"<br>"); // Writing data to Dump
    $("tbody").remove(); // Removing table

    // Representing data
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $('<tr>');
      tr.append("<td>" + data[i].name + "<br>" + data[i].job + "</td>");
      tr.append("<td>" + data[i].age + "</td>");
      tr.append("<td>" + data[i].nick + "</td>");
      tr.append("<td>" + '<input type="checkbox" value="Employee" onclick="return false;" onkeydown="return false;"' + (data[i].employee === true ? 'checked>' : '>') + "</td>");
      tr.append("<td>" + '<a id="del_' + i + '" onclick="delete_row(' + i + ')">Delete</a> ' + "</td>");
      $('table').append(tr);
    }
  });
}

// Deleting row
function delete_row(m) {
  if (confirm('Are you sure you want to delete this row?')) { // Asking a confirmation
    // Deleting data from persons.json
    $.getJSON("persons.json", function(data2) {          
      var deletedrow = data2.splice(m, 1);
     
      var newData = JSON.stringify(data2);
      jQuery.post('saveJson.php', {
        newData: newData
      });

      $('#result').append("Delete row <br>"); // Writing action to Dump
      $("tbody").remove(); // Removing table

      // Representing data
      var tr;
      for (var i = 0; i < data2.length; i++) {
        tr = $('<tr>');
        tr.append("<td>" + data2[i].name + "<br>" + data2[i].job + "</td>");
        tr.append("<td>" + data2[i].age + "</td>");
        tr.append("<td>" + data2[i].nick + "</td>");
        tr.append("<td>" + '<input type="checkbox" value="Employee" onclick="return false;" onkeydown="return false;"' + (data2[i].employee === true ? 'checked>' : '>') + "</td>");
        tr.append("<td>" + '<a id="del_' + i + '" onclick="delete_row(' + i + ')">Delete</a> ' + "</td>");
        $('table').append(tr);
      }

    });
  } else {
  // Do nothing!
  }
}
