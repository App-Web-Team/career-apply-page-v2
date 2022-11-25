function yipValidation() {
    console.log("yip");
    $(".yip-col i").removeClass('d-none');
    // let form = document.getElementById('yog-col')
    let yip = document.getElementById('yip').value
    let text = document.getElementById('err-yip')
    let pattern = /^[0-9]*$/

    if (yip.match(pattern)) {
        text.innerHTML = "valid"
        text.style.color = 'var(--secondary-color)'
    } else {
        text.innerHTML = "not valid"
        text.style.color = 'var(--secondary-color)'
    }

    if (yip == '') {
        text.innerHTML = ""
        text.style.color = 'var(--secondary-color)'
    }
}

var isCtcValid = false;
var isYipValid = false;

$(".third").click(function (event) {

    var $des = $("#des").val();
    var $company = $("#company").val();
    var $experience = $("#experience").val();
    var $ctc = $("#ctc").val();
    var $skills = $("#skills").val();
    var $yip = $("#yip").val();

    // if ($des == "") {
    //     $(".col i").addClass("d-none");
    //     $(".des-col i").removeClass("d-none");
    // }
    // else if ($company == "") {
    //     $(".col i").addClass("d-none");
    //     $(".company-col i").removeClass("d-none");
    // }
    // else if ($experience == "") {
    //     $(".col i").addClass("d-none");
    //     $(".experience-col i").removeClass("d-none");
    // }
    // else if ($ctc == "") {
    //     $(".col i").addClass("d-none");
    //     $(".ctc-col i").removeClass("d-none");
    // }
    // else if ($ctc != "" && !isCtcValid) {
    //     var regex = /^[0-9]*$/;
    //     if (regex.test($ctc)) {
    //         isCtcValid = true;
    //         $("#err-ctc").html("valid");
    //     } else {
    //         $("#err-ctc").html("not valid");
    //         $(".col i").addClass("d-none");
    //         $(".ctc-col i").removeClass("d-none");
    //     }
    // }
    if ($skills == "") {
        $(".col i").addClass("d-none");
        $(".skills-col i").removeClass("d-none");
    }

    else if ($yip == "") {
        $(".col i").addClass("d-none");
        $(".yip-col i").removeClass("d-none");
    }
    else if ($yip != "" && !isYipValid) {
        var regex = /^[0-9]*$/;
        if (regex.test($yip)) {
            isYipValid = true;
            $("#err-yip").html("valid");
        } else {
            $("#err-yip").html("not valid");
            $(".col i").addClass("d-none");
            $(".yip-col i").removeClass("d-none");
        }
    }
    else {
        $(".col i").addClass("d-none");

        $(".side-icons button:nth-child(1)").removeClass("active");
        $(".side-icons button:nth-child(2)").removeClass("active");
        $(".side-icons button:nth-child(3)").removeClass("active");
        $(".side-icons button:nth-child(4)").addClass("active");

        $(".wrapper > div:nth-child(1)").addClass("form-1-move-down");
        $(".wrapper > div:nth-child(2)").removeClass("form-2-move-up");
        $(".wrapper > div:nth-child(3)").removeClass("form-3-move-up");
        $(".wrapper > div:nth-child(4)").addClass("form-4-move-up");

        $(".side-icons > button:nth-child(3)").prop('disabled', false);
    }
    event.preventDefault();
});


$(".experience-add-btn").click(function (event) {
    var $des = $("#des").val();
    var $company = $("#company").val();
    var $experience = $("#experience").val();
    var $ctc = $("#ctc").val();

    if ($des == "") {
        $(".col i").addClass("d-none");
        $(".des-col i").removeClass("d-none");
    }
    else if ($company == "") {
        $(".col i").addClass("d-none");
        $(".company-col i").removeClass("d-none");
    }
    else if ($experience == "") {
        $(".col i").addClass("d-none");
        $(".experience-col i").removeClass("d-none");
    }
    else if ($ctc == "") {
        $(".col i").addClass("d-none");
        $(".ctc-col i").removeClass("d-none");
    }
    else if ($ctc != "" && !isCtcValid) {
        var regex = /^[0-9]*$/;
        if (regex.test($ctc)) {
            isCtcValid = true;
            $("#err-ctc").html("valid");
        } else {
            $("#err-ctc").html("not valid");
            $(".col i").addClass("d-none");
            $(".ctc-col i").removeClass("d-none");
        }
    }
    else {
        $(".experience-duplicate").append($(
            '<div class="row f-row mt-5">' +
            '    <div class="col des-col">' +
            '        <input required type="text" id="des" />' +
            '        <label>designation</label>' +
            '        <i class="d-none">*fill this</i>' +
            '    </div>' +
            '    <div class="col company-col">' +
            '        <input required type="text" id="company" />' +
            '        <label>company name</label>' +
            '        <i class="d-none">*fill this</i>' +
            '    </div>' +
            '</div>' +
            '<div class="row f-row my-5">' +
            '    <div class="col experience-col">' +
            '        <input required type="text" id="experience" />' +
            '        <label>experience</label>' +
            '        <i class="d-none">*fill this</i>' +
            '    </div>' +
            '    <div class="col ctc-col">' +
            '        <input required type="text" id="ctc" />' +
            '        <label><span class="text-uppercase">ctc</span></label>' +
            '        <i class="d-none" id="err-ctc">*fill this</i>' +
            '    </div>' +
            '</div>'
        ));
        $(".experience-duplicate").css("overflow-y", "scroll");
    }
    event.preventDefault();
});

$(".skills-add-btn").click(function (event) {
    var $skills = $("#skills").val();
    var $yip = $("#yip").val();


    if ($skills == "") {
        $(".col i").addClass("d-none");
        $(".skills-col i").removeClass("d-none");
    }

    else if ($yip == "") {
        $(".col i").addClass("d-none");
        $(".yip-col i").removeClass("d-none");
    } else {
        $(".skills-duplicate").append($(
            '<div class="row f-row my-5">' +
            '    <div class="col skills-col">' +
            '        <input required type="text" id="skills" />' +
            '        <label>skills</label>' +
            '        <i class="d-none">*fill this</i>' +
            '    </div>' +
            '    <div class="col yip-col">' +
            '        <input required type="text" id="yip" />' +
            '        <label>years <span class="text-lowercase">in practice</span></label>' +
            '        <i class="d-none" id="err-yip">*fill this</i>' +
            '    </div>' +
            '</div>'
        ));
        $(".skills-duplicate").css("overflow-y", "scroll");
    }
    event.preventDefault();
});