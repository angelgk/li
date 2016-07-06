var body=document.getElementById("body")
var cons=body.getElementsByTagName("div");
var imgs=body.getElementsByTagName("img");
var defen=document.getElementById("defen");
var begin=document.getElementById("begin");
var tim=document.getElementById("tim");
var end=document.getElementById("end");
var zongfen=0;
var ts=[];

function ran(){
	var t=Math.random();
	t=t*9;
	t=Math.floor(t);
	console.log(t);
	console.log(ts);
	var a=Math.random();
	a=a*4;
	a=Math.floor(a);
	if (a==0) {
		imgs[t].src="images/x.png";
		imgs[t].index=1;
	}
	else{
		imgs[t].src="images/h.png";
		imgs[t].index=0;
	}
	if (ts.length==0) {
		ts.push(t);
		maotou();
	}
	else{
			if (ts.indexOf(t)==-1) {
				ts.push(t);
				maotou();
			}
			else{
				console.log("重复了");
			}
	}

	function maotou(){
		var time=[t];
		var autoNum=0;
		var bo=true;
		cons[t].style.display="block";
		cons[t].onclick=function(){
			bo=false;
			autoNum=10;
			cons[t].onclick=null;
			if (imgs[t].index==1) {
				zongfen-=10;
			}
			else{
				zongfen+=10;
			}
			if (ts.length==6) {
				ts=[];
			}
			defen.innerText=zongfen;

		}
		time[0]=setInterval(function(){
			if (bo) {
				autoNum++;
				if (autoNum==5) {
					bo=false;
				}
				imgs[t].style.left=-autoNum*108+'px';
			}
			else{
				autoNum--;
				if (autoNum<0) {
					clearInterval(time[0]);
					cons[t].style.display="none";
					setTimeout(remo,10);
				}
				imgs[t].style.left=-autoNum*108+'px';
			}
		},100);

		
	}

	function remo(){
		
		var a=ts.indexOf(t);
		ts.splice(a,1);
	}
}

begin.onclick=function(){
	var tme=180;
	var time=setInterval(ran,500);
	begin.style.display="none";
	var time2=setInterval(function timeout(){
	tme-=1;
	tim.style.width=tme+'px';
	if (tme==0) {
		clearInterval(time);
		clearInterval(time2);
		end.style.display="block";
		end.innerText+=zongfen+'分';
	}
},200);
}


