$(".thumbs img").click(function(){
	//console.log(	$(this).attr("src")	);
	var src = $(this).attr("src");
	var t = '<img src="'+src+'" class="img">';
	$(".pic_b").html(t);
});

var src = "../img/a.jpg";
var t = '<img src="'+src+'" class="img">';