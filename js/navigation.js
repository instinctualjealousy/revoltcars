jQuery(function ($) {
    var keymap = {};
    keymap[37] = "#prev";
    keymap[39] = "#next";
    $(document).on("keyup", function (event) {
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
