// this file must load at the end of the body, 
// after all relevant elements


// when search field blurs, remove bg image if text exists
$('#q').blur(function(){
	if (this.value.length) {
		$(this).addClass('clr');
	}
	else {
		$(this).removeClass('clr');
	}
});

// set up jump menus
// option values must be URLs
var $jumpmenus = $('.js-jumpmenu');
$jumpmenus.each(function(i, sel){
	// always reset it to '' to prevent already-selected options
	sel.selectedIndex = 0;
});
$jumpmenus.change(function(e){
	var val = e.target.selectedOptions[0].getAttribute('value');
	if (!val) return;
	location = val;
});