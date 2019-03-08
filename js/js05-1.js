$("#thumbs img").click(function(){
	$("#pic_b").html('<img src="'+$(this).attr("src")+'" class="img">');
});