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

    function handleChanges() {

        $("#a11y-tablist button").each(function () {

            const tabpanel = $(this).attr("data-id");

            if ($(this).hasClass("active")) {
                $("#" + tabpanel).show();

                // Keyboard support
                $(this).attr({ "tabindex": 0, "aria-selected": "true", "aria-controls": tabpanel });

            } else {
                $("#" + tabpanel).hide();

                // Keyboard support
                $(this).attr({ "tabindex": -1, "aria-selected": "false" });
                $(this).removeAttr("aria-controls");

            }
        });
    }

    handleChanges();

    $("#a11y-tablist button").click(function () {

        $("#a11y-tablist > button.active").removeClass('active');
        $(this).addClass('active');

        handleChanges();
    });


    $("#a11y-tablist button").keydown(function (event) {
        const keyCode = event.which;

        switch (keyCode) {
            case 39:
                $(this).next().focus();
                $(this).next().click();
                event.preventDefault();
                break;

            case 37:
                $(this).prev().focus();
                $(this).prev().click();
                event.preventDefault();
                break;

            default:
                break;
        }

    });

}