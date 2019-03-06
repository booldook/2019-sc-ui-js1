// id를 통한 접근 ES6
//f = document.querySelector("#form1");

// id를 통한 접근 ES5
var f = document.getElementById("form1");
var v1 = document.getElementById("val1");
var v2 = document.getElementById("val2");
var calc = document.getElementById("calc");
var bt1 = document.getElementById("bt1");
var result = document.getElementById("result");

// form요소일 경우 name으로 접근할 수 있다.
f = document.form1;
v1 = f.val1;
v2 = f.val2;
calc = f.calc;
bt1 = f.bt1;
result = f.result;

// jQuery - id를 이용한 접근법 
var $f = $("#form1");
var $v1 = $("#val1");
var $v2 = $("#val2");
var $calc = $("#calc");
var $bt1 = $("#bt1");
var $result = $("#result");

// jQuery - name을 이용한 접근법 1 
$f = $("form[name='form1']");
$v1 = $("input[name='val1']", $f);
$v2 = $('input[name="val2"]', $f);
$calc = $("select[name='calc']", $f);
$bt1 = $("button[name='bt1']", $f);
$result = $("input[name='result']", $f);

// jQuery - name을 이용한 접근법 2 
$f = $("form[name='form1']");
$v1 = $f.find("input[name='val1']");
$v2 = $f.find('input[name="val2"]');
$calc = $f.find("select[name='calc']");
$bt1 = $f.find("button[name='bt1']");
$result = $f.find("input[name='result']");

console.log($f);
console.log($v1);
console.log($v2);
console.log($calc);
console.log($bt1);
console.log($result);

// Simple 사칙연산 - JS
bt1.addEventListener("click", function() {
	var x = v1.value;	//10
	var y = v2.value;	//20
	var c = calc.value;	//*
	result.value = eval(x + c + y);
});





