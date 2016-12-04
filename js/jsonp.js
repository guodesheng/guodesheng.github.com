function jsonToStr(json){
	var arr = [];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	var str = arr.join('&');
	return str;
}

//url,data,callback,success
function jsonp(json){
	var json = json || {};
	if(!json.url){
		alert('用法错误');
		return;
	}
	json.data = json.data || {};
	json.callback = json.callback || 'cb';

	var fnName = 'show'+Math.random();
	fnName = fnName.replace('.','');

	window[fnName] = function(json2){
		json.success && json.success(json2);
		oH.removeChild(oS);
	}

	var oS = document.createElement('script');
	json.data[json.callback] = fnName;
	oS.src = json.url+'?'+jsonToStr(json.data);
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}