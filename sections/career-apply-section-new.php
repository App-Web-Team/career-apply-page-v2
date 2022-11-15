<head>
    <link rel="stylesheet" href="assets/styles/style-career-apply-new.css">
</head>

<div class="container pb-5">
    <div class="row justify-content-center">
        <!-- side icons tab -->
        <div class="col-md-3 col-lg-2 p-0">
            <div class="side-icons line d-flex justify-content-center flex-md-column">
                <div class="px-sm-4 py-4 first-icon active">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-white"></i>
                        <i class="fa-solid fa-user fa-stack-1x"></i>
                    </span>
                </div>

                <div class="px-sm-4 py-4 second-icon">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-white"></i>
                        <i class="fa-solid fa-graduation-cap fa-stack-1x"></i>
                    </span>
                </div>

                <div class="px-sm-4 py-4 third-icon">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-white"></i>
                        <i class="fa-solid fa-briefcase fa-stack-1x"></i>
                    </span>
                </div>
                <div class="px-sm-4 py-4 fourth-icon">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x text-white"></i>
                        <i class="fa-solid fa-thumbs-up fa-stack-1x"></i>
                    </span>
                </div>
            </div>
        </div>
        <!-- wrapper col -->
        <div class="wrapper col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7">
            <?php
            echo '<div class="">';
            include "sections/form-1.php";
            echo '</div>';
            echo '<div class="">';
            include "sections/form-2.php";
            echo '</div>';
            echo '<div class="">';
            include "sections/form-3.php";
            echo '</div>';
            echo '<div class="">';
            include "sections/form-4.php";
            echo '</div>';
            ?>
        </div>
    </div>
</div>