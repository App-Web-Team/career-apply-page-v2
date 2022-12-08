

$(".last").click(function (event) {
    if ($('#myFile')[0].files.length === 0) {
        // document.getElementById('last-btn').type = 'button';
        $("#err-file").removeClass("d-none");
        
    } else {
        $("#err-file").addClass("d-none");
        // alert("form submitted");
    }


});

$('#myFile').on('change', function () {
    // console.log("file changed");

    const size =
        (this.files[0].size / 1024 / 1024).toFixed(2);
    if (size > 1) {
        // alert("file tooo large");
        this.files[0].length = 0;
        $("#err-file").addClass("d-none");
        $("#err-file-size").removeClass("d-none");
    }
    else {
        $("#err-file-size").addClass("d-none");
        $("#succ-file").removeClass("d-none");
    }
});