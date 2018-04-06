function makeGrid() {
	var canvas, cell, gridHeight, gridWidth, rows;
	canvas = $('#pixel_canvas');
	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();
	canvas.children().remove()
	for (a=0;a<gridHeight;a++) {
	canvas.append('<tr></tr>');
	}
		rows = $('tr');
	for (y=0;y<gridWidth;y++) {
	rows.append('<td></td>');
	} 
	cell = canvas.find('td');
	cell.click(function() {
		var color;
		color = $("#qwertyc").val();
		$(this).attr('bgcolor', color);
	});	
}
var submitQuery;
submitQuery = $('input[type="submit"]')
submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
