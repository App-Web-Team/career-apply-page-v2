<!-- <div class="form-1"> -->
<div class="">
    <p class="details-heading text-capitalize">
        personal details
    </p>
    <form action="" method="post" name="form1" autocomplete="off" spellcheck="false">
        <div class="row f-row mt-5">
            <div class="col fname-col">
                <input required type="text" name="fname" id="fname" />
                <label>First Name</label>
                <i class="d-none">*fill this</i>
            </div>
            <div class="col lname-col">
                <input required type="text" id="lname" />
                <label>Last Name</label>
                <i class="d-none">*fill this</i>
            </div>
        </div>
        <div class="row f-row my-5">
            <div class="col ph-col">
                <input required type="" name="phNo" id="phNo" />
                <label>Phone No.</label>
                <i class="d-none" id="err">*fill this</i>
            </div>
            <div class="col email-col">
                <input required type="email" id="email" />
                <label>Email</label>
                <i class="d-none" id="err-email">*fill this</i>
            </div>
        </div>
        <div class="row f-row my-5">
            <div class="col address-col">
                <input required type="text" id="address" />
                <label>Address</label>
                <i class="d-none">*fill this</i>
            </div>
        </div>
        <div class="row f-row my-5">
            <div class="col state-col">
                <input required type="text" id="state" />
                <label>State</label>
                <i class="d-none">*fill this</i>
            </div>
            <div class="col pincode-col">
                <input required type="text" id="pincode" />
                <label>pincode</label>
                <i class="d-none">*fill this</i>
            </div>
        </div>
        <div class="text-center">
            <button type="submit" class="first next first-button" onclick="phonenumber(document.form1.phNo)">
                Save & Proceed
            </button>
        </div>
    </form>
</div>

<script>
    $(".first").click(function(event) {


        function phonenumber(inputtxt) {
            var phoneno = /^\d{10}$/;
            if (inputtxt.value.match(phoneno)) {
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

                return true;
            } else {
                alert("Not a valid Phone Number");
                return false;
            }
        }



        // Stop the button from performing it's default task
        event.preventDefault();
    });
</script>