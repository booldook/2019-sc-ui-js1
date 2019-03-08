// $(".btns" > ".btn")
// $(".btn", $(".btns"))
// $(".btns").find(".btn")			//자손
// $(".btns").children(".btn")	//자식

$(".btns").children(".btn").not(".btn-danger").click(function(){
	var n = $(this).index();
	//$(".box").eq(n).fadeToggle(1000);
	//animate({애니메이션값}, 속도(숫자), "linear/swing", function(){});
	$(".box").eq(n).animate({"left":"90%"}, 1000, "swing", function(){
		$(this).animate({"left": 0}, 500);
	});
});

$(".btns").children(".btn-danger").click(function(){
	$(".box").show(0);
	$(".box").animate({"left":"0"}, 300);
});