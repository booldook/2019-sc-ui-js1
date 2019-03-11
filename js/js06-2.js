/*
for(var i=0; i<10; i++) {
	console.log(i);
}

for(var i=10; i>0; i--) {
	console.log(i);
}

i = i + 1	==> i++;
i = i - 1 ==> i--;
i = i + 2 ==> i += 2;
i = i + '<br>' ==> i += '<br>';
*/

$("#bt1").click(function(){
	$("#stage").empty();
	var c = '';
	for(var i=0; i<10; i++) {
		c += "*"; 			//c = c + "*";
		$("#stage").append(c+'<br>');
	}
});

$("#bt2").click(function(){
	$("#stage").empty();
	var html = '<table class="table table-bordered table-hover">';
	html += '<thead>';
	html += '<tr>';
	for(var i=2; i<=9; i++) {
		html += '<th>'+i+'단</th>';
	}
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	for(var j=1; j<=9; j++) {
		html += '<tr>';
		for(var i=2; i<=9; i++) {
			html += '<td>'+i+ ' x '+j+' = '+i*j+'</td>';
		}
		html += '</tr>';
	}
	html += '</tbody>';
	html += '</table>';
	$("#stage").append(html);
});






