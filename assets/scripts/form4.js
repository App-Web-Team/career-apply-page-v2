$(".last").click(function (event) {
    if ($('#myFile')[0].files.length === 0) {
        $("#err-file").removeClass("d-none");
    } else {
        $("#err-file").addClass("d-none");
        alert("form submitted");
    }
    // event.preventDefault();
});