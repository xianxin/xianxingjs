/*-jsfct-
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

/*-jsfct-
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

/*-jsfct-
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
