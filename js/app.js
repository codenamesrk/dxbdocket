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

$(".rating").rate();

//or for example
var options = {
    max_value: 6,
    step_size: 0.5,
}

$(".rating").rate(options);
