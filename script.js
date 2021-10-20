$(document).ready(function() {
    $("p").hover(changePartStyle);

    function changePartStyle() {
        $(this).toggleClass("clicked");
    }
})