$(document).ready(function() {
    $("p").click(changePartStyle);

    function changePartStyle() {
        $(this).toggleClass("clicked");
    }
})