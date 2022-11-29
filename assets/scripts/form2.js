function yogValidation() {
    console.log("yog");
    $(".yog-col i").removeClass('d-none');
    // let form = document.getElementById('yog-col')
    let yog = document.getElementById('yog').value
    let text = document.getElementById('err-yog')
    let pattern = /^\d{3}$/

    if (yog.match(pattern)) {
        text.innerHTML = "valid"
        text.style.color = 'var(--secondary-color)'
    } else {
        text.innerHTML = "not valid"
        text.style.color = 'var(--secondary-color)'
    }

    if (yog == '') {
        text.innerHTML = ""
        text.style.color = 'var(--secondary-color)'
    }
}
// function cgpaValidation() {
//     console.log("cgpa");
//     $(".cgpa-col i").removeClass('d-none');
//     // let form = document.getElementById('yog-col')
//     let cgpa = document.getElementById('cgpa').value
//     let text = document.getElementById('err-cgpa')
//     let pattern = /^([1-9]([0-9])?|0)(\.[0-9]{1,3})?$/

//     if (cgpa.match(pattern)) {
//         text.innerHTML = "valid"
//         text.style.color = 'var(--secondary-color)'
//     } else {
//         text.innerHTML = "not valid"
//         text.style.color = 'var(--secondary-color)'
//     }

//     if (cgpa == '') {
//         text.innerHTML = ""
//         text.style.color = 'var(--secondary-color)'
//     }
// }



var isYogValid = false;
// var isCgpaValid = false;

$(".second").click(function (event) {

    var $degree = $("#degree").val();
    var $college = $("#college").val();
    var $yog = $("#yog").val();
    var $cgpa = $("#cgpa").val();
    var $certifications = $("#certifications").val();
    var $year = $("#year").val();
    var $pb = $("#pb").val();

    if ($degree == "") {
        $(".col i").addClass("d-none");
        $(".degree-col i").removeClass("d-none");
    }
    else if ($college == "") {
        $(".col i").addClass("d-none");
        $(".college-col i").removeClass("d-none");
    }
    else if ($yog == "") {
        $(".col i").addClass("d-none");
        $(".yog-col i").removeClass("d-none");
    }
    else if ($cgpa == "") {
        $(".col i").addClass("d-none");
        $(".cgpa-col i").removeClass("d-none");
    }
    else if (($yog != "" && !isYogValid) /*|| ($cgpa != "" && !isCgpaValid)*/) {
        var yogregex = /^\d{4}$/;
        // var cgparegex = /^([1-9]([0-9])?|0)(\.[0-9]{1,3})?$/;
        if (yogregex.test($yog)) {
            isYogValid = true;
            $("#err-yog").html("valid");
        } else {
            $("#err-yog").html("not valid");
            $(".col i").addClass("d-none");
            $(".yog-col i").removeClass("d-none");
        }
        // if (cgparegex.test($cgpa)) {
        //     isCgpaValid = true;
        //     $("#err-cgpa").html("valid");
        // } else {
        //     $("#err-cgpa").html("not valid");
        //     $(".col i").addClass("d-none");
        //     $(".cgpa-col i").removeClass("d-none");
        // }
    }

    // else if ($cgpa != "" && !isCgpaValid) {
    //     var cgparegex = /(^[0-8][.][0-9][0-9]$)|(^\d{2}[%]?$)/;
    //     if (cgparegex.test($cgpa)) {
    //         isCgpaValid = true;
    //         $("#err-cgpa").html("valid");
    //     } else {
    //         $("#err-cgpa").html("not valid");
    //         $(".col i").addClass("d-none");
    //         $(".cgpa-col i").removeClass("d-none");
    //     }
    // }
    // else if ($certifications == "") {
    //     $(".col i").addClass("d-none");
    //     $(".certifications-col i").removeClass("d-none");
    // }
    // else if ($year == "") {
    //     $(".col i").addClass("d-none");
    //     $(".year-col i").removeClass("d-none");
    // }
    // else if ($pb == "") {
    //     $(".col i").addClass("d-none");
    //     $(".pb-col i").removeClass("d-none");
    // }
    else {
        $(".col i").addClass("d-none");

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
    }


    event.preventDefault();
});

$(".clg-add-btn").click(function (event) {
    var $degree = $("#degree").val();
    var $college = $("#college").val();
    var $yog = $("#yog").val();
    var $cgpa = $("#cgpa").val();

    if ($degree == "") {
        $(".col i").addClass("d-none");
        $(".degree-col i").removeClass("d-none");
    }
    else if ($college == "") {
        $(".col i").addClass("d-none");
        $(".college-col i").removeClass("d-none");
    }
    else if ($yog == "") {
        $(".col i").addClass("d-none");
        $(".yog-col i").removeClass("d-none");
    }
    else if ($cgpa == "") {
        $(".col i").addClass("d-none");
        $(".cgpa-col i").removeClass("d-none");
    }
    else if (($yog != "" && !isYogValid) /*|| ($cgpa != "" && !isCgpaValid)*/) {
        var yogregex = /^\d{4}$/;
        // var cgparegex = /(^[0-8][.][0-9][0-9]$)|(^\d{3}[%]?$)/;
        if (yogregex.test($yog)) {
            isYogValid = true;
            $("#err-yog").html("valid");
        } else {
            $("#err-yog").html("not valid");
            $(".col i").addClass("d-none");
            $(".yog-col i").removeClass("d-none");
        }
        // if (cgparegex.test($cgpa)) {
        //     isCgpaValid = true;
        //     $("#err-cgpa").html("valid");
        // } else {
        //     $("#err-cgpa").html("not valid");
        //     $(".col i").addClass("d-none");
        //     $(".cgpa-col i").removeClass("d-none");
        // }
    }
    else {
        $(".degree-duplicate").append($(
            '         <div class="row f-row mt-5">' +
            '         <div class="col degree-col">' +
            '             <input type="text" id="degree" name="degree[]" />' +
            '             <label>degree <span class="req">&#42;</span></label>' +
            '             <i class="d-none">*fill this</i>' +
            '         </div>' +
            '         <div class="col college-col">' +
            '             <input type="text" id="college" name="college[]" />' +
            '             <label>college <span class="req">&#42;</span></label>' +
            '             <i class="d-none">*fill this</i>' +
            '         </div>' +
            '     </div>' +
            '     <div class="row f-row my-5">' +
            '         <div class="col yog-col">' +
            '             <input type="" id="yog" name="yog[]" onkeydown="yogValidation()" />' +
            '             <label>year <span class="text-lowercase">of</span> graduation <span class="req">&#42;</span></label>' +
            '             <i class="d-none" id="err-yog">*fill this</i>' +
            '         </div>' +
            '         <div class="col cgpa-col">' +
            '             <input type="text" id="cgpa" name="cgpa[]" onkeydown="cgpaValidation()" />' +
            '             <label><span class="text-uppercase">cgpa</span> / percentage <span class="req">&#42;</span></label>' +
            '             <i class="d-none" id="err-cgpa">*fill this</i>' +
            '         </div>' +
            '     </div>'
        ));
        $(".degree-duplicate").css("overflow-y", "scroll");
    }
    event.preventDefault();
});
