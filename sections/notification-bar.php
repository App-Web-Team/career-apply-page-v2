<head>
    <link rel="stylesheet" href="assets/styles/style-notification.css">
</head>

<!-- navbar section-->
<nav id="scroll-nav" class="navbar navbar-expand-lg navbar-dark">
    <!-- logo -->
    <a href="#"><img class="navbar-brand" src="assets/images//pondy_world_white_logo.svg" alt=""></a>
    <!-- toggle button for mobile nav -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- navbar links -->
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto nav-fill w-50">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#benefits">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#team-section">Brands</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#events-section">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link pw-active" href="#join-section">Career</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">ReachUs</a>
            </li>
        </ul>
        <!-- social media links -->
        <ul class="navbar-nav sm-icons">
            <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-facebook"></i></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-twitter"></i></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-instagram"></i></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-linkedin"></i></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-whatsapp"></i></a></li>
        </ul>
    </div>
</nav>

<script>
    window.onscroll = () => {
        const nav = document.querySelector('#scroll-nav');
        if (this.scrollY <= 10) nav.className = 'navbar navbar-expand-lg navbar-dark';
        else nav.className = 'navbar navbar-expand-lg navbar-dark scroll fixed-top';
    };
</script>