
$(".zero").click(function (event) {

    $(".side-icons > button:first").addClass("active");
    $(".side-icons > button:nth-child(2)").removeClass("active");
    $(".side-icons button:nth-child(3)").removeClass("active");
    $(".side-icons button:nth-child(4)").removeClass("active");

    $(".wrapper > div:nth-child(1)").removeClass("form-1-move-down");
    $(".wrapper > div:nth-child(2)").removeClass("form-2-move-up");
    $(".wrapper > div:nth-child(3)").removeClass("form-3-move-up");
    $(".wrapper > div:nth-child(4)").removeClass("form-4-move-up");

    // Stop the button from performing it's default task
    event.preventDefault();
});

$(".first").click(function (event) {

    $(".side-icons > button:first").removeClass("active");
    $(".side-icons > button:nth-child(2)").addClass("active");
    $(".side-icons button:nth-child(3)").removeClass("active");
    $(".side-icons button:nth-child(4)").removeClass("active");

    $(".wrapper > div:nth-child(1)").addClass("form-1-move-down");
    $(".wrapper > div:nth-child(2)").addClass("form-2-move-up");
    $(".wrapper > div:nth-child(3)").removeClass("form-3-move-up");
    $(".wrapper > div:nth-child(4)").removeClass("form-4-move-up");

    // Stop the button from performing it's default task
    event.preventDefault();
});


$(".second").click(function (event) {

    $(".side-icons button:nth-child(1)").removeClass("active");
    $(".side-icons button:nth-child(2)").removeClass("active");
    $(".side-icons button:nth-child(3)").addClass("active");
    $(".side-icons button:nth-child(4)").removeClass("active");


    $(".wrapper > div:nth-child(1)").addClass("form-1-move-down");
    $(".wrapper > div:nth-child(2)").removeClass("form-2-move-up");
    $(".wrapper > div:nth-child(3)").addClass("form-3-move-up");
    $(".wrapper > div:nth-child(4)").removeClass("form-4-move-up");


    event.preventDefault();
});

$(".third").click(function (event) {

    $(".side-icons button:nth-child(1)").removeClass("active");
    $(".side-icons button:nth-child(2)").removeClass("active");
    $(".side-icons button:nth-child(3)").removeClass("active");
    $(".side-icons button:nth-child(4)").addClass("active");

    $(".wrapper > div:nth-child(1)").addClass("form-1-move-down");
    $(".wrapper > div:nth-child(2)").removeClass("form-2-move-up");
    $(".wrapper > div:nth-child(3)").removeClass("form-3-move-up");
    $(".wrapper > div:nth-child(4)").addClass("form-4-move-up");

    event.preventDefault();
});

// // The third button will be clicked when the user is ready to submit their question
// $(".third").click(function (event) {
//     $(".container").addClass("first-dot initial-active-area")
//     $(".container").removeClass("third-dot third-active-area");
//     // Stop the button from performing it's default task
//     event.preventDefault();
// });