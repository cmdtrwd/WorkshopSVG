$(document).ready(function(){
    let lastScrollTop = 0;

    $(window).scroll(function(){
        let currentScrollTop = $(this).scrollTop();
        // console.debug("current scroll position: " + currentScrollTop);

        //Scrolling down is detected!
        if (currentScrollTop > lastScrollTop){
            console.debug("scrolling down");      
            if($("#top-nav").hasClass("active")){
                $("#top-nav").removeClass("active");
            }      
        }
        //Scrolling up is detected!
        else{
            console.debug("scrolling up");
            $("#top-nav").addClass("active");
        }

        lastScrollTop = currentScrollTop;

        //The top nav background will become transparent when scrolling to the top of the screen
        if (currentScrollTop < 1){
            $("#top-nav").addClass("top");
        }
        else{
            $("#top-nav").removeClass("top");
        }
    });
});