function rank() {
	var aaa = new Array(3, 1, 4, 7, 2, 6, 1, 5, 3, 8, 9, 7);
	var bbb = new Array(aaa.length);
	var rnk = aaa.length;

	for (var i = 0; i < aaa.length; i++) {
		rnk = 1;
		for (var j = 0; j < aaa.length; j++) {
			if (parseFloat(aaa[i]) < parseFloat(aaa[j])) rnk++;
		}
		for (var j = 0; j < bbb.length; j++) {
			if (bbb[j] == rnk) rnk++;
		}
		bbb[i] = rnk;
	}

	document.write(aaa + "<br>" + bbb);
}

rank();