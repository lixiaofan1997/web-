var a="";
function showData(id){
	a+=document.getElementById(id).value;
	document.getElementById("result").innerHTML=a;
}
function clearData(){
	document.getElementById("result").innerHTML=0;
	a="";/*清除原来字符串中的内容*/
}
function calculate(){
	document.getElementById("result").innerHTML="";
	var resultNum=eval(a);
	resultNum+="";
	var b=resultNum.indexOf(".",);
	if(b<0){
		document.getElementById("result").innerHTML=resultNum;
	}
	else{
		resultNum+="00";
		resultNum=resultNum.substr(0,b+3);
		document.getElementById("result").innerHTML=resultNum;
	}
	a=resultNum;
}