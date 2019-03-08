// $(".btns" > ".btn")
// $(".btn", $(".btns"))
// $(".btns").find(".btn")			//자손
// $(".btns").children(".btn")	//자식

$(".btns").children(".btn").click(function(){
	var n = $(this).index();
	$(".box").eq(n).fadeToggle(1000);
});