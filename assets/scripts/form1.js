function emailValidation() {
    $(".email-col i").removeClass('d-none');
    let form = document.getElementById('email-col')
    let email = document.getElementById('email').value
    let text = document.getElementById('err-email')
    let pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (email.match(pattern)) {
        text.innerHTML = "valid"
        text.style.color = 'var(--secondary-color)'
    } else {
        isEmailValid = false;
        text.innerHTML = "not valid"
        text.style.color = 'var(--secondary-color)'
    }

    if (email == '') {
        text.innerHTML = ""
        text.style.color = 'var(--secondary-color)'
    }
}

function phNoValidation() {
    $(".ph-col i").removeClass('d-none');
    // let form = document.getElementById('ph-col')
    let phNo = document.getElementById('phNo').value
    let text = document.getElementById('err')
    let pattern = /^(0|91)?[0-9]{9}$/

    if (phNo.match(pattern)) {
        // form.classList.add('valid')
        // form.classList.remove('invalid')
        text.innerHTML = "valid"
        text.style.color = 'var(--secondary-color)'
    } else {
        // form.classList.remove('valid')
        // form.classList.add('invalid')
        isValid = false;
        // console.log(typeof isValid);
        text.innerHTML = "not valid"
        text.style.color = 'var(--secondary-color)'
    }

    if (phNo == '') {
        // form.classList.remove('valid')
        // form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = 'var(--secondary-color)'
    }
}





$(".first").click(function (event) {
    isYipValid = false;
    var $fname = $("#fname").val();
    var $lname = $("#lname").val();
    var $phNo = $("#phNo").val();
    var $email = $("#email").val();
    var $address = $("#address").val();
    var $state = $("#state").val();
    var $pincode = $("#pincode").val();

    if ($fname == "") {
        $(".col i").addClass("d-none");
        $(".fname-col i").removeClass("d-none");
    }
    // else if ($lname == "") {
    //     $(".col i").addClass("d-none");
    //     $(".lname-col i").removeClass("d-none");
    // }
    else if ($phNo == "") {
        $(".col i").addClass("d-none");
        $(".ph-col i").removeClass("d-none");
    }
    else if ($email == "") {
        $(".col i").addClass("d-none");
        $(".email-col i").removeClass("d-none");
    }
    else if (($phNo != "" && !isValid) || ($email != "" && !isEmailValid)) {
        var phregex = /^(0|91)?[0-9]{10}$/
        if (phregex.test($phNo)) {
            console.log("phno valid");
            isValid = true;
            $("#err").html("valid");
        } else {
            isValid = false;
            $("#err").html("not valid");
            $(".col i").addClass("d-none");
            $(".ph-col i").removeClass("d-none");
        }
        if ($email != "" && !isEmailValid) {
            var emailregex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (emailregex.test($email)) {
                console.log("email valid");
                isEmailValid = true;
                $("#err-email").html("valid");
            } else {
                isEmailValid = false;
                $("#err-email").html("not valid");
                $(".col i").addClass("d-none");
                $(".email-col i").removeClass("d-none");
            }
        }
    }

    // else if ($email != "" && !isEmailValid) {
    //     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     if (regex.test($email)) {
    //         isEmailValid = true;
    //         $("#err-email").html("valid");
    //     } else {
    //         $("#err-email").html("not valid");
    //         $(".col i").addClass("d-none");
    //         $(".email-col i").removeClass("d-none");
    //     }
    // }
    else if ($address == "") {
        $(".col i").addClass("d-none");
        $(".address-col i").removeClass("d-none");
    }
    else if ($state == "") {
        $(".col i").addClass("d-none");
        $(".state-col i").removeClass("d-none");
    } else {
        console.log("phno valid");
    }
    // else if ($pincode == "") {
    //     $(".col i").addClass("d-none");
    //     $(".pincode-col i").removeClass("d-none");
    // }
    // else if ($pincode != "" && !isPinValid) {
    //     var regex = /^\d{6}$/;
    //     if (regex.test($pincode)) {
    //         isPinValid = true;
    //         $("#err-pin").html("valid");
    //     } else {
    //         $("#err-pin").html("not valid");
    //         $(".col i").addClass("d-none");
    //         $(".pincode-col i").removeClass("d-none");
    //     }
    // }
    if (isValid && isEmailValid) {
        console.log("both are valid");
        $(".col i").addClass("d-none");

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