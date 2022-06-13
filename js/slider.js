var $links = $(".itemlinks");

$links.click(function(e){
    $links.removeClass("active");
    var clickedlink = e.target;
    clickedlink = $(clickedlink);
    var position =  clickedlink.attr("data-pos");
    var translateValue ="translate3d("+ position * 25 +"%, 0px, 0px)";
    $("#wrapper").css({
        transform: translateValue
    });
    clickedlink.addClass("active");
});

$($links[0]).addClass("active")