/***** 프로그래밍에 앞서 알아야 할 지식들 *****/
// 반복문 for(초기값; 조건; 증가값){}
// i = i + 1 => i++
// sum = sum + i => sum += i
/*
for(var i=1, sum=0; i<=10; i++){
	sum += i; 
}
console.log(sum);
*/

//준비
$("#bt_init").click(function(){
	var cnt = $("#cnt").val();
	for(var i=0, horse; i<cnt; i++) {
		horse = '<div class="horse"><div class="badge">'+(i+1)+'</div><img src="../img/horse.png" class="img"></div>';
		$(".stage").append(horse);
	}
	$("#bt_init").hide();
	$("#bt_start").show();
	$("#bt_reset").show();
});

//초기화
$("#bt_reset").click(function(){
	//$(".stage").html("");
	$(".stage").empty();
	$("#bt_start").hide();
	$("#bt_reset").hide();
	$("#bt_init").show();
	$("#cnt").val("4");
});


