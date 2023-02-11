{
    $.ajax({
        type: 'GET',
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://revoltcars.tk/updates.rss",
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            data.items.forEach(item => {
                var content = document.getElementById('content');
                var newItem = "";
                newItem += "<div class=\"container\" id=\"item\"><a href=\"" + item.link + "\"><h4><span>" + item.title + "</span></a> (" + item.pubDate + ")</span></h4>";
                newItem += item.description + "</div>";
                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
};
