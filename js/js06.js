// $(".btns" > ".btn")
// $(".btn", $(".btns"))
// $(".btns").find(".btn")			//자손
// $(".btns").children(".btn")	//자식

$(".btns").children(".btn").not(".btn-danger").click(function(){
	var n = $(this).index();
	//$(".box").eq(n).fadeToggle(1000);
	//animate({애니메이션값}, 속도(숫자), "linear/swing", function(){});
	$(".box").eq(n).stop().animate({"left":"90%", "width":"400px", "borderWidth":"20px"}, 1000, "swing", function(){
		$(this).stop().animate({"left":0, "width":"100px", "borderWidth":"5px"}, 500);
	});
});

$(".btns").children(".btn-danger").click(function(){
	$(".box").show(0);
	$(".box").stop().animate({"left":"0", "width":"100px", "borderWidth":"5px"}, 500);
});