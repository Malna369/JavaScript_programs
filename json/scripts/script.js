$(document).ready(function () {

  // Representing the data from persons.json in a table 
  $.getJSON("persons.json",function (json) {
    var tr;
    for (var i = 0; i < json.length; i++) {
      tr = $('<tr>');
      tr.append("<td>" + json[i].name + "<br>" + json[i].job + "</td>");
      tr.append("<td>" + json[i].age + "</td>");
      tr.append("<td>" + json[i].nick + "</td>");
      tr.append("<td>" + '<input type="checkbox" value="Employee" onclick="return false;" onkeydown="return false;"' + (json[i].employee === true ? 'checked>' : '>') + "</td>");
      tr.append("<td>" + '<a id="del_' + i + '" onclick="delete_row(' + i + ')">Delete</a> ' + "</td>");
      $('table').append(tr);
    }
  });

  // Clicking "Add" button reset the form
  $("#addBtn").click(function() {
    $(':input','form').val("");
  });

  // Clicking "OK" (Submit the form)
  $('form').submit(function() {
    var newEmployee = $('form').serializeObject();
    addJson(newEmployee); // Adding and reprsenting data
    $('#AddData').modal('hide'); // Closing the modal
    return false;
  });

});
    
   