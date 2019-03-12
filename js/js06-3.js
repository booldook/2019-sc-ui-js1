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
stds[0] = {

};