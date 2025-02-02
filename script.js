//your JS code here. If required.
let timer=document.getElementById("timer");
let date=new Date();
setInterval(
	function(){
		date=new Date();
		timer.innerHTML=date.toLocateString();
	},1000
);
