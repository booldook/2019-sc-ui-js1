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
	$("#stage").html(html);
});

$("#bt3").click(function(){
	var html = '<table class="table table-bordered table-hover">';
	html += '<tbody>';
	for(var i=2; i<=9; i++) {
		html += '<tr>';
		for(var j=0; j<=9; j++) {
			if(j == 0) html += '<td><strong>'+i+ ' 단</strong></td>';
			html += '<td>'+i+ ' x '+j+' = '+i*j+'</td>';
		}
		html += '</tr>';
	}
	html += '</tbody>';
	html += '</table>';
	$("#stage").html(html);
});

$("#bt4").click(function(){
	var sNum = prompt("구구단의 원하는 단수를 입력하세요.");
	var h = '<tr>';
	for(var i=1; i<=9; i++) {
		h += '<td>'+sNum+' x '+i+' = '+sNum*i+'</td>';
	}
	h += '</tr>';
	$("#stage2 > table > tbody").append(h);
});


