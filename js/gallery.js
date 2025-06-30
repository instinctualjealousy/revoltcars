$(document).ready(function() {
	$('a.gallery').each(function() {
		var filename = $(this).attr('href')
		var parsedext = decodeURI(filename.substring((filename.lastIndexOf('/')) + 1))
		if (typeof attr == typeof undefined || attr == false) {
			$(this).attr('title', parsedext);
		}
	});

	$('a.gallery').html(function() {
		var filename = $(this).attr('href')
		var parsed = decodeURI(filename.substring((filename.lastIndexOf('/')) + 1, filename.lastIndexOf('.')))
		return '<img src="' + 'thumbs/' + filename + '"><br><span>' + parsed.replace('- ', ': ') + '</span>'
	});

	$("a.gallery").colorbox({
		rel: 'gal',
		transition: 'fade',
		maxHeight: '100%',
		maxWidth: '100%'
	});

	jQuery(window).resize(function() {
		resizeColorBox();
		window.addEventListener("orientationchange", resizeColorBox, false);
	});

	var resizeTimer;

	function resizeColorBox() {
		if (resizeTimer) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function() {
			if (jQuery('#cboxOverlay').is(':visible')) {
				jQuery.colorbox.reload();
			}
		}, 300);
	}

	$(document).bind('cbox_open', function() {
		$('body').css({
			overflow: 'hidden'
		});

	}).bind('cbox_closed', function() {
		$('body').css({
			overflow: 'auto'
		});
	});
});