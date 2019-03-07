// display:none

$("#bt1").click(function(){
	$("#box_wrap").append('<div class="box"></div>');
});

$(".box").hover(function(){
	$(this).animate({"opacity":0}, 1000);
	//$(this).hide(10000);
	//$(this).fadeOut();
}, function(){
	$(this).animate({"opacity":1}, 1000);
	//$(this).show(10000);
	//$(this).fadeIn();
});