$(document).ready(function() {
    $("p").click(changePartStyle);

    function changePartStyle() {
        $(this).addClass("clicked");
    }
})