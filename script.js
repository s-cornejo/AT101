$(document).ready(function() {
    $("p").click(channgePartStyle);

    function changePartStyle() {
        $(this).addClass("clicked");
    }
})