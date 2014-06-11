
// selector , startline , columnumberofdate , style
// only [ 2014-01-02, 2014-1-2, 2014/01/02, 2014/1/2, 2014年01月02日, 2014年1月2日 ] ok
function updateTableByDay(sel,sl,cn,st){
  var day = new Date();
  var y = day.getFullYear();
  var m = day.getMonth();
  var d = day.getDate();
  
  var trs = $(sel+" tr");
  var listMoveDown = [];
  
  try {
    /**********************************************************/
    for (var i = sl; i < trs.length; i++){
      var theDay = $(trs[i]).children("td").eq(cn).html();
      theDay = theDay.replace("年","/");
      theDay = theDay.replace("月","/");
      theDay = theDay.replace("日"," ");
      theDay = theDay.replace(/-/g,"/");
      
      theDay = new Date(theDay);
      var theY = theDay.getFullYear();
      var theM = theDay.getMonth()-1;
      var theD = theDay.getDate();
      
      if (theY < y
      || ((theY == y) && (theM < m))
      || ((theY == y) && (theM == m) && (thdD < d))){
        listMoveDown.push(trs[i]);
      }else{
        break;
      }
    }
    /**********************************************************/
  } catch(err){;}
  
  if (listMoveDown.length > 0){
    for (var i = listMoveDown.length; i > sl; i--){
      $(sel+" tr").eq(sl).remove();
      $(sel+" tr").last().after($(listMoveDown[listMoveDown.length-i]));
      $(sel+" tr").last()[0].style.cssText += st;
    }
  }
}
