$(document).ready(function () {
    $("a.gallery").colorbox({
        rel: 'gal'
    });
});

$(document).ready(function () {
    $('a').each(function () {
        var $a = $(this);
        var filename = $a.attr('href')
            if (typeof attr == typeof undefined || attr == false) {
                $a.attr('title', decodeURI(filename.substring((filename.lastIndexOf('/')) + 1, )));
            }
    });
});