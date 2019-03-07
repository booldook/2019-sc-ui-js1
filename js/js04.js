// display:none

$("#bt1").click(function(){
	$("#box_wrap").append('<div class="box"></div>');
});

$("#bt2").click(function(){
	$(".box").addClass("chg");
});

/*
$(".box").hover(function(){
	$(this).animate({"opacity":0}, 100);
	//$(this).hide(10000);
	//$(this).fadeOut();
}, function(){
	$(this).animate({"opacity":1}, 100);
	//$(this).show(10000);
	//$(this).fadeIn();
});
*/