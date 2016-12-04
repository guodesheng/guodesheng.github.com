// JavaScript Document
DOMReady(function(){
	var oBox=document.getElementById('box');
	
	//导航运动
	var oUl=oBox.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	var oNavBox=aLi[aLi.length-1];
	var timer=null;
	var aPos=[];
	//导航运动
	for(var i=0;i<aLi.length-1;i++){
		aLi[i].onmouseover=function (){
			for(var i=0;i<aLi.length-1;i++){
					aLi[i].className='';
			}
			oNavBox.style.display='block';
			clearInterval(timer);
			move(oNavBox, this.offsetLeft);
		};
	}
	for(var i=0;i<aLi.length-1;i++){
		aLi[i].onmouseout=function(){
			tab();
		};
	}
	function tab(){
		if(aPos.length){
			move(oNavBox,aPos[aPos.length-1]*aLi[0].offsetWidth);
		}else{
			move(oNavBox,0);

		}
	}

	for(var i=0;i<aLi.length-1;i++){
		aLi[i].index=i;
		aLi[i].onclick=function (ev){
			var oEvent = ev||event;
			oEvent.cancelBubble=true;

			move(oNavBox, this.offsetLeft);

			//内容高度
			//oCon.style.top=-aDiv[0].offsetHeight*this.index+'px';
			startMove(oCon,{top:-aDiv[0].offsetHeight*(this.index)});
			aPos.push(this.index);
			top=-aDiv[0].offsetHeight*(this.index);
			//if(this.index==3){
			//	var clientW=document.documentElement.clientWidth||document.body.clientWidth;
			//	H5Move(clientW);
			//}
		};
	}
	//move
	var speed=0;
	var left=oNavBox.offsetLeft;
	function move(obj,iTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			speed+=(iTarget-left)/5;
			speed*=0.7;
			left+=speed;
			oNavBox.style.left=Math.round(left)+'px';
			if(iTarget==Math.round(left)&&Math.abs(speed)<1){
				clearInterval(obj.timer);
			}
		},30);
	}
	//首页
	var oCon=document.getElementById('content');
	var aDiv=oCon.children;
	var clientW=document.documentElement.clientWidth||document.body.clientWidth;
	var clientH2=document.documentElement.clientHeight||document.body.clientHeight;
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.width=clientW+'px';
		aDiv[i].style.height=clientH2+'px';
		aDiv[i].style.overflow='hidden';
	}
	document.documentElement.style.fontSize=clientW*0.02+'px';
	//窗口改变大小
	window.onresize=function(){
		var clientW=document.documentElement.clientWidth||document.body.clientWidth;
		var clientH=document.documentElement.clientHeight||document.body.clientHeight;
		document.documentElement.style.fontSize=clientW*0.02+'px';
		
		translateZ=clientW*0.2;
		tab();
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].style.width=clientW+'px';
			aDiv[i].style.height=clientH+'px';
		}
		if(top<0){
			//oCon.style.top=-aPos[aPos.length-1]*clientH+'px';
			startMove(oCon,{top:-aPos[aPos.length-1]*clientH});
			top=-aPos[aPos.length-1]*clientH;
		}else{
			//oCon.style.top=0+'px';
			startMove(oCon,{top:0});
		}

	};
	//给元素滚轮事件
	var oP=document.querySelector('#opation');
	var oMy=document.querySelector('#myself');
	var aLim=oMy.children;
	var aLii=oP.children;
	var oDivv=oMy.children[1];
	var top=oCon.offsetTop;
	var j=0;
	addWheel(oCon,function(bDown){
		if(bDown){
			var clientW=document.documentElement.clientWidth||document.body.clientWidth;
			var clientH=document.documentElement.clientHeight||document.body.clientHeight;
			if(top==-(aDiv.length-1)*clientH)return;
			//oCon.style.top=-clientH+top+'px';
			startMove(oCon,{top:-clientH+top});
			top=-clientH+top;
			j=Math.floor(Math.abs(top/clientH));
			//导航滚轮
			for(var i=0;i<aLi.length-1;i++){
				aLi[i].className='';
			}
			aLi[j].className='active';
			oNavBox.style.display='none';
			aPos.push(j);
			if(top==-1*clientH){
				aLii[0].className='animated bounceInLeft';
			}else{
				aLii[0].className='';
			}
			if(top==-(aDiv.length-1)*clientH){
				aLim[0].className='animated bounceInLeft';
				oDivv.className='animated bounceInRight';
			}else{
				aLim[0].className='';
				oDivv.className='';
			}


		}else{
			var clientW=document.documentElement.clientWidth||document.body.clientWidth;
			var clientH=document.documentElement.clientHeight||document.body.clientHeight;
			if(top==0)return;
			startMove(oCon,{top:clientH+top});
			top=clientH+top;
			j=Math.floor(Math.abs(top/clientH));
			aPos.push(j);
			//导航滚轮
			for(var i=0;i<aLi.length-1;i++){
				aLi[i].className='';
			}
			aLi[j].className='active';
			oNavBox.style.display='none';
			if(top==-1*clientH){
				aLii[0].className='animated bounceInLeft';
			}else{
				aLii[0].className='';
			}
			if(top==-(aDiv.length-1)*clientH){
				aLim[0].className='animated bounceInLeft';
				oDivv.className='animated bounceInRight';
			}else{
				aLim[0].className='';
				oDivv.className='';
			}
		}
	});


});