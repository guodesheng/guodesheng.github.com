/**
 * Created by ghq on 2016/11/20.
 */
function domReady(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){
            fn&&fn();
        },false)
    }else{
        document.onreadystatechange=function(){
            if(document.readyState=='complete'){
                fn&&fn()
            }
        }
    }
}
domReady(function(){
    var oEhb=document.querySelector('#ehb');
    var oList=document.querySelector('.list');
    var aLi=oList.children;
    var oP=document.querySelector('.option');
    var oB=document.querySelector('.block');
    var aA=oP.querySelectorAll('a');
    var oPa1=document.querySelector('.opa1');
    var oPa2=document.querySelector('.opa2');
    var oList4=document.querySelector('.list4');
    var aLi4=oList4.children;
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover=function(){
            var aSp=this.children[0];
            aSp.style.transition='1s';
            aSp.style.height=100+'px';
            aSp.style.opacity='0.8';
        };
        aLi[i].onmouseout=function(){
            var aSp=this.children[0];
            aSp.style.height=0;
            aSp.style.opacity='0';
            aSp.style.transition='1s';
            aSp.style.bottom=0;
        };
    }
    var bReady=true;
    var arr=['next','next2','','pre2','pre','now'];
    oPa1.onclick=function(){
        if(!bReady)return;
        bReady=false;
        arr.push(arr.shift());
        for(var i=0; i<aLi4.length;i++){
            aLi4[i].className=arr[i];
        }
    };
    oPa2.onclick=function(){
        arr.unshift(arr.pop());
        for(var i=0; i<aLi4.length;i++){
            aLi4[i].className=arr[i];
        }
    };
    //运动完毕时
    aLi4[0].addEventListener('transitionend',function(){
        bReady=true;

    },false);
    aA[0].onclick=function(){
        oList.style.display='block';
        oB.style.display='none';
    };
    aA[1].onclick=function(){
        oList.style.display='none';
        oB.style.display='block';
    };
    aLi4[5].onclick=function(){
            window.open('zuo/apple.html','_black')
    };
    aLi4[0].onclick=function(){
        window.open('zuo/shouhuan.html','_black')
    };
    aLi4[1].onclick=function(){
        window.open('zuo/baozha.html','_black')
    };
    aLi4[2].onclick=function(){
        window.open('zuo/灵魂回响/index.html','_black')
    };
    aLi4[3].onclick=function(){
        window.open('zuo/pubu.html','_black')
    };
    aLi4[4].onclick=function(){
        window.open('zuo/baidu.html','_black')
    };
    aLi[5].onclick=function(){
        window.open('zuo/apple.html','_black')
    };
    aLi[0].onclick=function(){
        window.open('zuo/shouhuan.html','_black')
    };
    aLi[1].onclick=function(){
        window.open('zuo/baozha.html','_black')
    };
    aLi[2].onclick=function(){
        window.open('zuo/灵魂回响/index.html','_black')
    };
    aLi[3].onclick=function(){
        window.open('zuo/pubu.html','_black')
    };
    aLi[4].onclick=function(){
        window.open('zuo/baidu.html','_black')
    }
    //shouye
    var oT = document.getElementById('text');
    var oUl = document.getElementById('ul1');
    var iNow1 = -1;
    var oldValue = '';
    oT.onkeyup = function(ev){
        var oEvent = ev || event;
        if(oEvent.keyCode == 40 || oEvent.keyCode == 38){
            return false;
        }
        oldValue = oT.value;

        jsonp({
            url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
            data:{
                wd:oT.value
            },
            success:function(json){
                var arr = json.s;
                oUl.style.display = 'block';
                oUl.innerHTML = '';
                // 创建li
                for(var i=0; i<arr.length; i++){
                    var oLip = document.createElement('li');
                    oLip.innerHTML = arr[i];
                    oUl.appendChild(oLip);
                    oLip.onmouseover=function(){
                        this.style.background='red';
                        oT.value=this.innerHTML;
                    }
                    oLip.onmouseout=function(){
                        this.style.background='#fff';
                        oT.value='a';
                    }
                    oLip.onclick=function(){
                        window.open('https://www.baidu.com/s?wd=%E7%88%B1%E5%A5%87%E8%89%BA%E7%BD%91='+oT.value,'_blank');
                    };
                }
            }
        })
    }
    var aLip = oUl.children;
    // 按下的时候
    oT.onkeydown = function(ev){
        var oEvent = ev || event;
        if(oEvent.keyCode == 40){
            iNow++;
            if(iNow == aLip.length){
                iNow1 = -1;
                console.log(oldValue);
                oT.value = oldValue;
                aLip[aLip.length-1].className = '';
                return;
            }
            for(var i=0; i<aLip.length; i++){
                aLip[i].className = '';
            }
            aLip[iNow1].className = 'on';
            oT.value = aLip[iNow1].innerHTML;
        }
        if(oEvent.keyCode == 38){
            iNow1--;
            if(iNow1 == -1){
                iNow1 = aLip.length;
                oT.value = oldValue;
                return;
            }
            for(var i=0; i<aLip.length; i++){
                aLip[i].className = '';
            }
            aLip[iNow1].className = 'on';
            oT.value = aLip[iNow1].innerHTML;
            return false;
        }
        if(oEvent.keyCode == 13){
            window.open('https://www.baidu.com/s?wd='+oT.value);
        }
    }
});























