
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










$(".certificate-add-btn").click(function (event) {
    var $certifications = $("#certifications").val();
    var $year = $("#year").val();
    var $pb = $("#pb").val();

    if ($certifications == "") {
        $(".col i").addClass("d-none");
        $(".certifications-col i").removeClass("d-none");
    }
    else if ($year == "") {
        $(".col i").addClass("d-none");
        $(".year-col i").removeClass("d-none");
    }
    else if ($pb == "") {
        $(".col i").addClass("d-none");
        $(".pb-col i").removeClass("d-none");
    }
    else {
        $(".certifications-duplicate").append($(
            '<div class="row f-row my-5">' +
            '    <div class="col certifications-col">' +
            '        <input required type="text" id="certifications" />' +
            '        <label>certifications</label>' +
            '        <i class="d-none">*fill this</i>' +
            '    </div>' +
            '    <div class="col year-col">' +
            '        <input required type="text" id="year" />' +
            '        <label>year</label>' +
            '        <i class="d-none">*fill this</i>' +
            '    </div>' +
            '    <div class="col pb-col">' +
            '        <input required type="text" id="pb" />' +
            '        <label>provided by</label>' +
            '        <i class="d-none">*fill this</i>' +
            '    </div>' +
            '</div>'));
        $(".certifications-duplicate").css("overflow-y", "scroll");
    }
    event.preventDefault();
});






