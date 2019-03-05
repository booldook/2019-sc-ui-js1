document.getElementById("bt1").addEventListener("click", function(){
	alert("Hello Real World");
	document.getElementById("cmt").innerHTML = "현실세계를 선택!";
});

$("#bt2").click(function(){
	alert("Hello Virtual World");
	$("#cmt").html("가상현실을 선택!");
});
