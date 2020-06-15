window.onload = function () {

    // $("#main-nav").hide();

    $("#nav-btn").click(function () {
        $("#main-nav").toggle();
        $(this).attr("aria-expanded", $(this).attr("aria-expanded") == "false" ? true : false);
    });

    $("#nav-btn").keydown(function (event) {
        const keyCode = event.which;
        if (keyCode == "13") {
            $(this).click();
        }
    });

}