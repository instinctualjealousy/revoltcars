$(document).ready(function () {
    $('a.gallery').each(function () {
        var filename = $(this).attr('href')
            var parsedext = decodeURI(filename.substring((filename.lastIndexOf('/')) + 1))
            if (typeof attr == typeof undefined || attr == false) {
                $(this).attr('title', parsedext);
            }
    });
    $('a.gallery').html(function () {
        var filename = $(this).attr('href')
            var parsed = decodeURI(filename.substring((filename.lastIndexOf('/')) + 1, filename.lastIndexOf('.')))
            return '<img src="' + 'thumbs/' + filename + '"><br><span>' + parsed.replace('- ', ': ') + '</span>'
    });
    $("a.gallery").colorbox({
        rel: 'gal'
    });
    $(document).bind('cbox_open', function () {
        $('body').css({
            overflow: 'hidden'
        });
    }).bind('cbox_closed', function () {
        $('body').css({
            overflow: 'auto'
        });
    });
});
