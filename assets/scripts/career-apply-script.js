
var $question = $(".question");
var $questionval;
var $tags = $(".tags");
var tagsval;
var $yourquestion = $(".yourquestion");
var $yourtags = $(".yourtags");

// The first button will be clicked after the user enters a question
$(".first").click(function (event) {
    $questionval = $question.val();
    if ($questionval == "") {
        $yourquestion.html("No Question.");
    } else {
        $yourquestion.html($questionval);
    }

    // $(".container").removeClass("fourth-dot initial-active-area");
    $(".container").addClass("second-dot second-active-area");

    $(".side-icons div:first").removeClass("first-icon active");
    $(".side-icons div:nth-child(2)").addClass("second-icon active");

    // Stop the button from performing it's default task
    event.preventDefault();
});

// The second button will be clicked after the user enters some tags (not required)
$(".second").click(function (event) {
    $(".container").removeClass("second-dot second-active-area initial-active-area");
    $(".container").addClass("third-dot third-active-area");

    $(".side-icons div:nth-child(2)").removeClass("second-icon active");
    $(".side-icons div:nth-child(3)").addClass("third-icon active");

    $tagsval = $tags.val();
    // Check if the value of tags field is empty
    if ($tagsval == "") {
        $yourtags.html("No tags.");
    } else {
        $yourtags.html($tagsval);
    }
    // Stop the button from performing it's default task
    event.preventDefault();
});

$(".third").click(function (event) {
    $(".container").removeClass("third-dot third-active-area");
    $(".container").addClass("fourth-dot fourth-active-area");

    $(".side-icons div:nth-child(3)").removeClass("third-icon active");
    $(".side-icons div:nth-child(4)").addClass("fourth-icon active");

    $tagsval = $tags.val();
    // Check if the value of tags field is empty
    if ($tagsval == "") {
        $yourtags.html("No tags.");
    } else {
        $yourtags.html($tagsval);
    }
    // Stop the button from performing it's default task
    event.preventDefault();
});

// // The third button will be clicked when the user is ready to submit their question
// $(".third").click(function (event) {
//     $(".container").addClass("first-dot initial-active-area")
//     $(".container").removeClass("third-dot third-active-area");
//     // Stop the button from performing it's default task
//     event.preventDefault();
// });