// Web Font Loader
window.WebFontConfig = {
	google: {
	  families: ['Source+Sans+Pro:300,400,600']
	}
};
(function() {
	var wf = document.createElement('script');
	wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();

$(document).foundation();

// Rate Options
var rateOptions = {
    max_value: 5,
    step_size: 0.5,
 	ajax_method: 'POST',
    url: 'http://localhost/dxb/postrate.php',
}
var roOptions = {
    max_value: 5,
    readonly: true,
    step_size: 0.5,
}

$(".rating-ro").rate(roOptions);
$(".rating").rate(rateOptions);
// Refer Documentation if u want to tweak https://github.com/auxiliary/rater

// Copy Phone no. to Clipboard
$(".copy-button").click(function(){
	var $temp = $("<input>");
	var num = $('.phone-no').first().text();	
	$("body").append($temp);
	$temp.val(num).select();
	document.execCommand("copy");
	$temp.remove();
	$(this).fadeOut();
	$('.phone-no-container').removeClass('blur-ph');
});