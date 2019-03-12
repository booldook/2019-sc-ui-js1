$("#bt1").click(function(){
	var score = [];
	for(var i=0; i<$(".ins").length; i++) {
		if($(".ins").eq(i).val() == "") {
			alert($(".ins").eq(i).data("info") + " 입력하세요.");
			$(".ins").eq(i).focus();
			return;
		}
	}
	for(var i=0; i<$(".ins").length; i++) {
		if(i == 0) score[i] = $(".ins").eq(i).val();
		else score[i] = Number($(".ins").eq(i).val());
	}
	score.push(Math.round((score[1] + score[2] + score[3])/3));
	var html = '<tr>';
	for(var i=0; i<score.length; i++) {
		html+= '<td class="text-center">'+score[i]+'</td>';
	}
	html+= '<td class="text-center">삭제</td>';
	html += '</tr>';
	$("#tb_score").append(html);
	$(".ins").val("");
});
