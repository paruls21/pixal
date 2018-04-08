function makeGrid() {
  var canvas, cell, gridHeight, gridWidth, rows;//select size
  canvas = $("#pixel_canvas");
  gridHeight = $("#input_height").val();//value of height
  gridWidth = $("#input_width").val();//value of width
  canvas.children().remove();
  for (a = 0; a < gridHeight; a++) {
    canvas.append("<tr></tr>");//after selection of total rows nd columns rows are made here
  }
  rows = $("tr");
  for (y = 0; y < gridWidth; y++) {
    rows.append("<td></td>");//after selection of total rows nd columns column are made here
  }
  cell = canvas.find("td");
  //when user click it change the color
  cell.click(function() {
    var color;//select color
    color = $("#qwertyc").val();
    $(this).attr("bgcolor", color);
  });
}
var submitQuery;// When the user submit the size then call function makeGrid()
submitQuery = $('input[type="submit"]')
submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

