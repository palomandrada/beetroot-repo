"use strict";

// $ -> shorthand for JQuery
//$(".someSelector").someMethod()
//const myEL = document.querySelector(".my_el")
var myEl = $('.my_el'); // .text vs .textContent 

myEl.text('Helo'); // .html vs .innerHTML

myEl.html('<h1>Hello!!</h1>'); //.val vs .value

$('.my_input').val(); //to get the value

$('.my_input').val(); //to set the value

myEl.css('color', 'red').css('font-size', '25px');
myEl.addClass('new_class');
myEl.removeClass('new_class');
myEl.click(function () {
  alert(123);
}); //.on vs document.addEventListener

myEl.on('.click');
myEl.hide();
myEl.show();
myEl.fadeOut('slow');
$;