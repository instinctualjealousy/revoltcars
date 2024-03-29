jQuery(function($) {
	var keymap = {};
	keymap[37] = "#prev";
	keymap[39] = "#next";
	$(document).on("keydown", function(event) {
		var href,
			selector = keymap[event.which];
		if (selector) {
			href = $(selector).attr("href");
			if (href) {
				window.location = href;
			}
		}
	});
});

let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
	if (touchendX + 90 < touchstartX)
		var href, selector = "#next";
	if (selector) {
		href = $(selector).attr("href");
		if (href) {
			window.location = href;
		}
	}
	if (touchendX - 90 > touchstartX)
		var href, selector = "#prev";
	if (selector) {
		href = $(selector).attr("href");
		if (href) {
			window.location = href;
		}
	}
}

document.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX;
});
document.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX;
	checkDirection();
});