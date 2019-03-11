/***** 프로그래밍에 앞서 알아야 할 지식들 *****/
// 반복문 for(초기값; 조건; 증가값){	반복실행할 내용	}
// i = i + 1 => i++
// sum = sum + i => sum += i
/*
for(var i=1, sum=0; i<=100; i++){
	sum += i; 
}
console.log(sum);

수학함수
1. Math.random() => 0 ~ 1보다 작은 실수
console.log(	Math.random()	);
2. Math.round(숫자) => 반올림
console.log(Math.round(4.6))	=>	5
3. Math.ceil(숫자)	=> 올림
console.log(Math.ceil(4.2))	=>	5
4. Math.floor(숫자)	=> 버림
console.log(Math.ceil(4.9))	=>	4
*/


//준비
var cnt = 0;
$("#bt_init").click(function(){
	cnt = $("#cnt").val();
	for(var i=0, horse=''; i<cnt; i++) {
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

// 시작
$("#bt_start").click(function(){
	for(var i=0; i<cnt; i++) {
		$(".horse").eq(i).stop().animate({"left":"100%"}, 5000);
	}
});
