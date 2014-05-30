/*-jsfct- Format
 * function 格式化日期
 * parameter 格式(yyyy-MM-dd hh:mm:ss)
 * example [var today = new Date(); var format = today.Format("yyyy-MM-dd");]
 */
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, /*月份*/
    "d+": this.getDate(), /*日*/
    "h+": this.getHours(), /*小时*/
    "m+": this.getMinutes(), /*分*/
    "s+": this.getSeconds(), /*秒*/
    "q+": Math.floor((this.getMonth() + 3) / 3), /*季度*/
    "S": this.getMilliseconds() /*毫秒*/
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/*-jsfct- indexOf
 * function IndexOf的IE7兼容版
 * parameter 元素(obj)
 * example [var array = ["1","2","3"]; var index = array.indexOf("2");]
 */
if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(elt /*, from*/){
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0) from += len;
    for (; from < len; from++){
      if (from in this && this[from] === elt) return from;
    }
    return -1;
  };
}

/*-jsfct- CountLength
 * function 长度计数
 * parameter 
 * example [var str = "中文+English"; var length = str.CountLength();]
 */
String.prototype.CountLength = function () {
  var str = this;
  if (str && str.length > 0) { 
    // remove line breaks
    var noBreaksText = str.replace(/(\r\n|\n|\r)/gm, "");
    return noBreaksText.length;
  }
  return 0;
}

/* global variable 4 function IdCardValidate : 加权因子 */
var fctIdCardValidate_Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];
/* global variable 4 function IdCardValidate : 身份证验证位值.10代表X */
var fctIdCardValidate_ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];

/*-jsfct- IdCardValidate
 * function 身份证验证
 * parameter 身份证号码(idCard)
 * example IdCardValidate("41102319860910****")
 */
function IdCardValidate(idCard) {
  idCard = trim(idCard.replace(/ /g, ""));
  if (idCard.length == 15) {
    return isValidityBrithBy15IdCard(idCard);
  } else if (idCard.length == 18) {
    var a_idCard = idCard.split("");
    if(isValidityBrithBy18IdCard(idCard)&&isTrueValidateCodeBy18IdCard(a_idCard)){
      return true;
    }else {
      return false;
    }
  } else {
    return false;
  }
}

/*-jssubfct-*/
function isTrueValidateCodeBy18IdCard(a_idCard) {
  var sum = 0;
  if (a_idCard[17].toLowerCase() == 'x') {
    a_idCard[17] = 10;
  }
  for ( var i = 0; i < 17; i++) {
    sum += fctIdCardValidate_Wi[i] * a_idCard[i];
  }
  valCodePosition = sum % 11;
  if (a_idCard[17] == fctIdCardValidate_ValideCode[valCodePosition]) {
    return true;
  } else {
    return false;
  }
}

/*-jssubfct-*/
function isValidityBrithBy18IdCard(idCard18){
  var year =  idCard18.substring(6,10);
  var month = idCard18.substring(10,12);
  var day = idCard18.substring(12,14);
  var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));

  if(temp_date.getFullYear()!=parseFloat(year)
    ||temp_date.getMonth()!=parseFloat(month)-1
    ||temp_date.getDate()!=parseFloat(day)){
    return false;
  }else{
    return true;
  }
}

/*-jssubfct-*/
function isValidityBrithBy15IdCard(idCard15){   
  var year =  idCard15.substring(6,8);
  var month = idCard15.substring(8,10);
  var day = idCard15.substring(10,12);
  var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));

  if(temp_date.getYear()!=parseFloat(year)
    ||temp_date.getMonth()!=parseFloat(month)-1
    ||temp_date.getDate()!=parseFloat(day)){
      return false;
  }else{
    return true;
  }
}

/*-jsfct1word-trim*/
function trim(str) {   
    return str.replace(/(^\s*)|(\s*$)/g, "");   
}

/*-jsfct1word-nospace-*/
function noSpace(str) {
	return (str.replace(/[\s]+/g,''));
}

/*-jsfct- checkHtmlTags
 * function 检测html标签匹配
 * parameter html
 * example checkHtmlTags("<td></tr>")
 */
function checkHtmlTags(html){
	if (html == null || html == "") return;
	
	var s = noSpace(html).toLowerCase();
	var arrMinus = new Array('<img>','<input>','<meta>','<hr>');//br link
	for (var i = 0; i < arrMinus.length; i ++){
		s = s.replace(arrMinus[i],'');
	}
	
	var arrElement = s.match(/<[/|A-Za-z]+>/ig);
	var stack = new Array();
	stack[0] = '#';
	k = 0;
	for (var j = 0; j < arrElement.length; j ++){
		if (('<'+'/'+stack[k].substr(1)) == arrElement[j]){
			k --;
			stack.length --;
		} else {
			stack[++k] = arrElement[j];
		}
		alert(stack[k]);
	}
	(stack[k] == "#") ? (document.write("All Mathed")) : (document.write("Some Unmatched"));
}
