var isValid = false;
var isEmailValid = false;
var isPinValid = false;
var isYogValid = false;
var isYipValid = false;
var isFileValid = false;

$(".zero").click(function (event) {

    isValid = false;
    isEmailValid = false;
    isPinValid = false;
    isYogValid = false;
    isYipValid = false;

    $(".side-icons > button:first").addClass("active");
    $(".side-icons > button:nth-child(2)").removeClass("active");
    $(".side-icons button:nth-child(3)").removeClass("active");
    $(".side-icons button:nth-child(4)").removeClass("active");

    $(".wrapper > div:nth-child(1)").removeClass("form-1-move-down");
    $(".wrapper > div:nth-child(2)").removeClass("form-2-move-up");
    $(".wrapper > div:nth-child(3)").removeClass("form-3-move-up");
    $(".wrapper > div:nth-child(4)").removeClass("form-4-move-up");

    $(".side-icons > button:nth-child(2)").prop('disabled', true);
    $(".side-icons > button:nth-child(3)").prop('disabled', true);
    $(".side-icons > button:nth-child(4)").prop('disabled', true);

    // Stop the button from performing it's default task
    event.preventDefault();
});












