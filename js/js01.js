/*
Programming Language(프로그래밍 언어)
	. Web/FrontEnd
		- Javascript ES5/ES6 (jQuery)
	. Web/BackEnd
		- Javascript ES6 (Node.js)
		- PHP
		- Java
		- c#
		- Python
	. Application
		- Java -> Android App
		- Swift -> iPhone App
		- Python	-> Java를 대체하는 언어
		- VisualBasic -> 간단한 윈도우즈용 프로그램.
		- C++ -> 복잡한 윈도우즈용 프로그램.
		- C -> IOT(사물인터넷)
		- c# -> windows7 이상 프로그램
*/
document.getElementById("bt1").addEventListener("click", function(){
	alert("Hello Real World");
	document.getElementById("cmt").innerHTML = "현실세계를 선택!";
});

$("#bt2").click(function(){
	alert("Hello Virtual World");
	$("#cmt").html("가상현실을 선택!");
});


