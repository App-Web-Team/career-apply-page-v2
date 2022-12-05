<!-- <div class="form-3-move-up"> -->
<div class="mt-5">
    <div class="row f-row mt-5">
        <div class="col">
            <input type="text" name="eSalary" />
            <label>expected salary</label>
        </div>
        <div class="col">
            <input type="text" name="ePosition" />
            <label>expected position</label>
        </div>
    </div>
    <div class="row f-row mt-5">
        <div class="resume-box ml-md-3 text-center">
            <label for="myFile" class="text-capitalize not-apply">
                resume upload
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </label>
            <input class="not-apply custom-style d-none" type="file" id="myFile" name="myFile" accept=".pdf, .docx" required>
            <p>Please upload only pdf & docx</p>
            <i class="d-none" id="err-file">*file not uploaded</i>
            <i class="d-none" id="err-file-size">size must be less than 1mb</i>
            <i class="d-none" id="succ-file">file uploaded successfully</i>
        </div>
    </div>
    <div class="row f-row mt-4">
        <div class="form-check mt-3 mb-3 ml-3 text-left">
            <input class="form-check-input not-apply" type="checkbox" value="" id="flexCheckDefault" required>
            <label class="form-check-label ml-3 not-apply" for="flexCheckDefault">
                I agree to the “TERMS & CONDITIONS” and also mention that the above mentioned details are true.
            </label>
        </div>
    </div>
    <div class="text-center">
        <button class="last next" type="submit" id="last-btn">Save & Proceed</button>
    </div>

</div>