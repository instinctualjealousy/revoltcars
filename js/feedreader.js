{
    $.ajax({
        type: 'GET',
        url: "https://revoltcars.tk/updates.json",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            data.channel.items.forEach(item => {
                var content = document.getElementById('content');
                var sOriginalDate = item.pubDate;
                var oDate = new Date(sOriginalDate);
                var iMonth = oDate.getMonth() + 1;
                var iDay = oDate.getDate();
                var sNewDate = oDate.getFullYear() + '-'
                     + (iMonth < 10 ? '0' : '') + iMonth + '-'
                     + (iDay < 10 ? '0' : '') + iDay;
                var str = sNewDate;
                var [year, month, day] = str.split('-');
                var calcDate = new Date(+year, +month - 1, +day);
                var day = calcDate.getDate();
                var month = calcDate.toLocaleString("default", {
                    month: "long"
                });
                var year = calcDate.getFullYear();
                var nthNumber = (number) => {
                    if (number > 3 && number < 21)
                        return "th";
                    switch (day % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th";
                    }
                };
                var ordinalDate = month + ' ' + day + nthNumber(day) + ', ' + year;
                var newItem = "";
                newItem += "<div class=\"container\" id=\"item\"><a href=\"" + item.link + "\"><h4><span>" + item.title + "</span></a><span style=\"float: right;\">(" + ordinalDate + ")</span></h4>";
                newItem += "<p style=\"width: 60%;\">" + item.description + "</p></div>";
                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
};