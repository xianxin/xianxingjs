/* start */
$('a[href^="mailto:"]').addClass("mailto");
/* end */
$('a[href$=".txt"]').addClass("txt");
/* any */
$('a[href*="help"]').addClass("help");
/* && */
$('a[href^="http"][href*=henry]').addClass("henry");
/* || */
$('a[href^="http"],a[href*=henry]').addClass("henry");
/* :form */
$('input[type="text"]:disabled')

/* every 1 line style : many tables in 1 page */
$("tr:even").addClass("bg-gray");             // take all trs as a list
$("tr:nth-child(odd)").addClass("bg-gray");   // trs in each table ||||| nth-child starts with 1 ||||||

;

/* ie-11,ie-other,other */
<script>
if (/*@cc_on!@*/false){}                          // ie10 and below            document.documentMode = 6/7/8/9/10
if (/*@cc_on!@*/true){}                           // ie11 and other browser    document.documentMode = 11 or undefined
if (/*@cc_on!@*/true && document.documentMode){}  // ie11
</script>

;

/* contains */
jQuery.expr[':'].Contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
}
jQuery.expr[':'].contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
}
$("div:contains('Jon')");
$("div:contains(Jon)");

;

/* nextAll with itself */
$("li.third-item").nextAll().addBack().addClass("gte3-class");

;

/* two kinds of end() */
$('ul.first').find('.foo').css("background-color","red")
       .end().find(".bar").css("background-color","green");

$('td:contains(Henry)').parent().find('td:eq(1)')
    .addClass("highlight").end().find('td:eq(2)')
    .addClass("highlight");

;

/* how to write document.ready with $ conflict */
jQuery(document).ready(function($){
  // use $ here
});
jQuery(function($){
  // use $ here
});

;

/* toggleClass */
$('#switcher button').toggleClass('hidden');

;

/* hover */
$('#switcher h3').hover(
  function(){
    $(this).addClass('hover');
  },
  function(){
    $(this).removeClass('hover');
  })

;

/* event ! */
$('#switcher').click(function(event){
  if (event.target == this){
    // TODO : 
    return false;
    if (event.cancelable) event.preventDefault();
    event.stopPropagation();
  }
});

;

/* eventsssssssss */
$('#switcher').click(function(event){
  if ($(event.target).is('button')){  // many many button inside switcher , parent handles the event
    var id = event.target.id;
    $(event.target).addClass("button");
  }
});
$('#switcher').on('click','button',function(){
  $(this).addClass("button");   // use on -> event.target will be mapped to this !
});

;

/* remove on */
$('#switcher-narrow').click(function(){
  $('#switcher').off('click');
})

;

/* keycode ? */
String.fromCharCode(event.keyCode) // 'A' 'B' 'C'
