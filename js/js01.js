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

// 변수
// 변수에는 모든것을 담을 수 있다. (숫자, 문자, 객체-html, css 등등 모든 것)
var a;	//var a = 10;

a = 10;
console.log(a);

a = 20;
console.log(a);

var b = 30;
console.log(a, b, a + b);

var c = a + b;
console.log(c);

var t1 = 10;
var t2 = 20;
var t3 = "30";
var t4 = t1 + t2 + t3;		//3030(문자)
var t5 = t3 + t1 + t2;		//301020(문자)
var t6 = t3 + (t1 + t2);	//3030(문자)
console.log(t4);
console.log(t5);
console.log(t6);

var bt1 = document.getElementById("bt1");
console.log(bt1);

var $bt1 = $("#bt1");
console.log($bt1);

var doc = document;
console.log(doc);

var body = doc.body;
console.log(body);

// 함수 - function
// +, -, *, /(10/3 => 3), %(mod: 10%3 => 1)
/*
function 함수명(인자/매개변수:parameter) {

}
*/
var x = 5;
// 매개변수가 없는 함수 / 리턴값이 없는 함수(void)
function multi() {
	console.log(x * x);
}
multi();

// 매개변수가 있는 함수 / 리턴값이 없는 함수(void)
function multi2(x) {
	console.log("함수 안의 x 는 " + x);
	console.log(x * x);
}
console.log("함수 밖의 x 는 " + x);
multi2(25);

// 매개변수가 여러개인 함수 / 리턴값이 없는 함수(void)
function hap(x, y) {
	console.log(x + "와 " + y + "의 합은 " + (x + y) + "입니다.");
}
hap(25, 34);





