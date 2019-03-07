$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        onTranslated: changeImg
    });
    function changeImg() {
        var path = $(".owl-item.active").find("img").attr("src").split("/");
        var url = "images/" + path[path.length - 1];
        $(".slider").css({'background' : 'url("' + url +'") no-repeat center', 'background-size': 'cover'});
    }
    changeImg();
    $(".owl-item:not(.cloned) .item").each(function(i, elem) {
        var path = $(elem).children("img").attr("src").split("/");
        var url = "images/" + path[path.length - 1];
        $('.owl-dot:eq('+ i +')').css({'background' : 'url("' + url +'") no-repeat center', 'background-size': 'cover'});
    });
});