<head>
    <link rel="stylesheet" href="assets/styles/style-career-apply.css">
</head>

<div class="center-div">
    <div id="questionsdiv" class="questions-container">
        <div class="container initial-active-area">
            <div class="row">
                <div class="col-md-3 text-center p-0">
                    <div class="side-icons line d-flex flex-md-column">
                        <div class="p-4 first-icon active">
                            <span class="fa-stack fa-2x">
                                <i class="fa fa-circle fa-stack-2x text-white"></i>
                                <i class="fa-solid fa-user fa-stack-1x"></i>
                            </span>
                        </div>

                        <div class="p-4 second-icon">
                            <span class="fa-stack fa-2x">
                                <i class="fa fa-circle fa-stack-2x text-white"></i>
                                <i class="fa-solid fa-graduation-cap fa-stack-1x"></i>
                            </span>
                        </div>

                        <div class="p-4 third-icon">
                            <span class="fa-stack fa-2x">
                                <i class="fa fa-circle fa-stack-2x text-white"></i>
                                <i class="fa-solid fa-briefcase fa-stack-1x"></i>
                            </span>
                        </div>
                        <div class="p-4 fourth-icon">
                            <span class="fa-stack fa-2x">
                                <i class="fa fa-circle fa-stack-2x text-white"></i>
                                <i class="fa-solid fa-thumbs-up fa-stack-1x"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="form-bg col-md-9 pt-3">
                    <div class="steps-wrapper">
                        <div class="question-submission">
                            <form class="submission first-step add-mr-form mb-2 ml-3">
                                <?php
                                include "sections/form-1.php";
                                ?>
                                <button class="first next">Save & Proceed</button>
                            </form>


                            <form class="ml-5 submission second-step">
                                <?php
                                include "sections/form-2.php";
                                ?>
                                <button class="second next">Save & Proceed</button>
                            </form>

                            <form class="submission third-step mt-3 add-mr-form">
                                <?php
                                include "sections/form-3.php";
                                ?>
                                <button class="third next">Save & Proceed</button>
                            </form>

                            <!-- dummy form -->
                            <form class="submission fourth-step mt-3">
                                <?php
                                include "sections/form-4.php";
                                ?>
                                <button class="fourth next">this is dummy</button>
                            </form>

                            <form class="submission fifth-step mt-3">
                                <?php
                                include "sections/form-4.php";
                                ?>
                                <button class="fifth next mt-5">Save & Proceed</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="clear"></div>
</div>