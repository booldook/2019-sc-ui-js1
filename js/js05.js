/*
$(".thumbs img").click(function(){
	//console.log(	$(this).attr("src")	);
	var src = $(this).attr("src");
	var t = '<img src="'+src+'" class="img">';
	$(".pic_b").html(t);
});
*/

$(".thumbs img").mouseenter(function(){
	var src = $(this).attr("src");
	var t = '<img src="'+src+'" class="img">';
	$(".pic_b").html(t);
});
$(".thumbs img").eq(0).trigger("mouseenter");

