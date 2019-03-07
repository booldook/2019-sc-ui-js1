$("#bt_calc").click(function(){
	var $v1 = $("#val1");
	var $v2 = $("#val2");
	var $calc = $("#calc");
	var $result = $("#result");
	var v1 = $v1.val();
	var v2 = $v2.val();
	var c = $calc.val();
	
	if(v1 == ""){
		alert("값을 입력하셔야 계산이 실행됩니다.");
		$v1.focus();
		return;
	}
	if(v2 == ""){
		alert("값을 입력하셔야 계산이 실행됩니다.");
		$v2.focus();
		return;
	}
	if(c == ""){
		alert("연산자가 선택되어야 계산이 실행됩니다.");
		$calc.focus();
		return;
	}
	$result.val(eval(v1 + c + v2));
	//console.log(			eval(v1 + c + v2)			);
});
