
$(".zero").click(function (event) {

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


var isValid = false;
var isEmailValid = false;

$(".first").click(function (event) {
    var $fname = $("#fname").val();
    var $lname = $("#lname").val();
    var $phNo = $("#phNo").val();
    var $email = $("#email").val();
    var $address = $("#address").val();
    var $state = $("#state").val();
    var $pincode = $("#pincode").val();

    if ($fname == "") {
        $(".fname-col i").removeClass("d-none");
    }
    else if ($lname == "") {
        $(".lname-col i").removeClass("d-none");
    }
    else if ($phNo == "") {
        $(".ph-col i").removeClass("d-none");
    }
    else if ($phNo != "" && !isValid) {
        var regex = /^(0|91)?[6-9][0-9]{9}$/;
        if (regex.test($phNo)) {
            isValid = true;
            $("#err").html("valid");
        } else {
            $("#err").html("not valid");
        }
    }
    else if ($email == "") {
        $(".email-col i").removeClass("d-none");
    }
    else if ($email != "" && !isEmailValid) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test($email)) {
            isEmailValid = true;
            $("#err-email").html("valid");
        } else {
            $("#err-email").html("not valid");
        }
    }
    else if ($address == "") {
        $(".address-col i").removeClass("d-none");
    }
    else if ($state == "") {
        $(".state-col i").removeClass("d-none");
    }
    else if ($pincode == "") {
        $(".pincode-col i").removeClass("d-none");
    }
    else {
        $(".fname-col i").addClass("d-none");
        $(".lname-col i").addClass("d-none");
        $(".ph-col i").addClass("d-none");
        $(".email-col i").addClass("d-none");
        $(".address-col i").addClass("d-none");
        $(".state-col i").addClass("d-none");
        $(".pincode-col i").addClass("d-none");
        $(".side-icons > button:first").removeClass("active");
        $(".side-icons > button:nth-child(2)").addClass("active");
        $(".side-icons button:nth-child(3)").removeClass("active");
        $(".side-icons button:nth-child(4)").removeClass("active");

        $(".wrapper > div:nth-child(1)").addClass("form-1-move-down");
        $(".wrapper > div:nth-child(2)").addClass("form-2-move-up");
        $(".wrapper > div:nth-child(3)").removeClass("form-3-move-up");
        $(".wrapper > div:nth-child(4)").removeClass("form-4-move-up");

        $(".side-icons > button:first").prop('disabled', false);

        $(".side-icons > button:nth-child(3)").prop('disabled', true);
        $(".side-icons > button:nth-child(4)").prop('disabled', true);
    }

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

    $(".side-icons > button:nth-child(2)").prop('disabled', false);

    $(".side-icons > button:nth-child(4)").prop('disabled', true);


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

    $(".side-icons > button:nth-child(3)").prop('disabled', false);

    event.preventDefault();
});

