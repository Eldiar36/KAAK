$(document).ready(function(){
    $(".team_slider").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        navText:true,
        margin:10,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:2
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            }

        }
    });
});
$(document).ready(function(){
    $("#rev-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        margin:35,
        responsive: {
            0: {
                items:1,
                dots: false,
            },
            600: {
                items:1,
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }
    });
});
$(document).ready(function(){
    $(".document-slider").owlCarousel({
        items: 3,
        loop:true,
        nav:true,
        margin:35,
        responsive: {
            0: {
                items:1,
                dots: false,
            },
            600: {
                items:1,
            },
            900: {
                items:2
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            }

        }
    });
});