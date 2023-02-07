{
    $.ajax({
        type: 'GET',
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://revoltcars.tk/updates.rss?t=3155781600",
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            data.items.forEach(item => {
                var content = document.getElementById('content');
                var newItem = "";
                newItem += "<div class=\"container\" id=\"item\"><a href=\"" + item.link + "\"><h5><span style=\"font-weight: bold;\">" + item.title + "</span> <span style=\"color: black;\">(" + item.pubDate + ")</span></h5></a>";
                newItem += item.description + "<br><br></div>";
                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
};
