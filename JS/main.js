$(document).ready(function () {
    let lastScrollTop = 0;

    $(window).scroll(function () {
        let currentScrollTop = $(this).scrollTop();        
        let translatePos = currentScrollTop;
        let rotateDeg = currentScrollTop;
        translatePos = translatePos * 0.8;
        let scalingFactor = 1 - currentScrollTop * .002;
        let translateRectY = 70 - currentScrollTop * 0.1;


        $('#circle-a').css("transform", "translate(" + translatePos + "px, 0px) rotate(" + rotateDeg + "deg) scale(" + scalingFactor + ")");

        $('#circle-b').css("transform", "translate(" + (-translatePos) + "px, 0px) rotate(" + rotateDeg + "deg) scale(" + scalingFactor + ")");

        $('#red').css("transform", "translate(100px, " + (-translateRectY) + "vh)");

        $('#blue').css("transform", "translate(-100px, " + translateRectY + "vh)");


        //Scrolling down
        if (currentScrollTop > lastScrollTop) {
            if ($('#top-nav').hasClass('active')) {
                $("#top-nav").removeClass("active");
            }
        }
        //Scrolling up
        else {
            $("#top-nav").addClass("active");
        }
        //Update scroll position
        lastScrollTop = currentScrollTop;

        if (currentScrollTop < 1) {
            if (!$('#top-nav').hasClass('top')) {
                $('#top-nav').addClass('top');
            }

        } else {
            $('#top-nav').removeClass('top');
        }

    });

    //Show the banner detail panel
    $('#bar-btn').click(function () {
        $('#menu-container').addClass('active');
        $(this).addClass('active');
        $('#close-btn').addClass('active');
    });
    $('#close-btn').click(function () {
        $(this).removeClass('active');
        $('#bar-btn').removeClass('active');
        $('#menu-container').removeClass('active');
    });
});
