document.addEventListener('click', function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}, false);

console.log("FOFOFIFOFIFOFIF")

$(document).ready(function() {
	$(document).on('click', 'a[href^="#"]', function(e) {
		var id = $(this).attr('href');
		var target = $(id);

		if (target.length === 0) {
			return;
		}

		e.preventDefault();

		$('body, html').animate({ scrollTop: target.offset().top });
	});
});