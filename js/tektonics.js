// when search field blurs, remove bg image if text exists
	$('#q').blur(function(){
		if (this.value.length) {
			$(this).addClass('clr');
		}
		else {
			$(this).removeClass('clr');
		}
	});