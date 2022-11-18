<!-- <div class="form-1"> -->
<div class="">
    <p class="details-heading text-capitalize">
        personal details
    </p>
    <form action="" method="post" name="form1" autocomplete="off" spellcheck="false">
        <div class="row f-row mt-5">
            <div class="col fname-col">
                <input required type="text" name="fname" id="fname" />
                <label>First Name <span class="req">&#42;</span></label>
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
                <label>Phone No. <span class="req">&#42;</span></label>
                <i class="d-none" id="err">*fill this</i>
            </div>
            <div class="col email-col">
                <input required type="email" id="email" />
                <label>Email <span class="req">&#42;</span></label>
                <i class="d-none" id="err-email">*fill this</i>
            </div>
        </div>
        <div class="row f-row my-5">
            <div class="col address-col">
                <input required type="text" id="address" />
                <label>Address <span class="req">&#42;</span></label>
                <i class="d-none">*fill this</i>
            </div>
        </div>
        <div class="row f-row my-5">
            <div class="col state-col">
                <input required type="text" id="state" />
                <label>State <span class="req">&#42;</span></label>
                <i class="d-none">*fill this</i>
            </div>
            <div class="col pincode-col">
                <input required type="text" id="pincode" />
                <label>pincode <span class="req">&#42;</span></label>
                <i class="d-none" id="err-pin">*fill this</i>
            </div>
        </div>
        <div class="text-center">
            <button type="submit" class="first next first-button">
                Save & Proceed
            </button>
        </div>
    </form>
</div>

<script>
</script>