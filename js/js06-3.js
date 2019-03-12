var a = 10;	//변수 variable

var b = [];	//배열 array
b[0] = 70;
b[1] = 50;
b[2] = 80;
b[3] = Math.round((b[0] + b[1] + b[2])/3);
console.log(b);

var b2 = [];
b2.push(80);
b2.push(75);
b2.push(90);
b2.push(Math.round((b2[0] + b2[1] + b2[2])/3));
console.log(b2);

var c = {};	//객체 object
c.name = "홍길동",
c.kor = 75;
c.eng = 85;
c.math = 90;
c.avg = Math.round((c.kor + c.eng + c.math)/3);
console.log(c);

var d = {
	name: "홍길만",
	kor: 95,
	eng: 88,
	math: 88
};
d.avg = Math.round((d.kor + d.eng + d.math)/3);
console.log(d);


var stds = [];
stds[0] = {};
stds[1] = {};
stds.push({});
stds[0].name = "홍길동";
stds[1].name = "홍길만";
stds[2].name = "홍길순";
stds[0].kor = 90;
stds[1].kor = 82;
stds[2].kor = 96;
stds[0].eng = 85;
stds[1].eng = 86;
stds[2].eng = 92;
stds[0].math = 98;
stds[1].math = 88;
stds[2].math = 75;
stds[0].avg = Math.round((stds[0].kor + stds[0].eng + stds[0].math)/3);
stds[1].avg = Math.round((stds[1].kor + stds[1].eng + stds[1].math)/3);
stds[2].avg = Math.round((stds[2].kor + stds[2].eng + stds[2].math)/3);
console.log(stds);

$("#bt1").click(function(){
	var score = [];
	if($("#in0").val() == "") {
		alert("이름을 입력하세요.");
		$("#in0").focus();
		return;
	}
	if($("#in1").val() == "") {
		alert("국어점수를 입력하세요.");
		$("#in1").focus();
		return;
	}
	if($("#in2").val() == "") {
		alert("영어점수를 입력하세요.");
		$("#in2").focus();
		return;
	}
	if($("#in3").val() == "") {
		alert("수학점수를 입력하세요.");
		$("#in3").focus();
		return;
	}
	score.push($("#in0").val());
});
