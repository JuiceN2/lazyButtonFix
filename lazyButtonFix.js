$(function () {
    $("button").on('click', function() { 
        var btnLink = $(this).find("a").attr("href");
        if (btnLink !== undefined) {
            location.href = btnLink;
        }
    });
});