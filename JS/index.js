$(document).ready(function(){
    let lastScrollTop = 0;

    $(window).scroll(function(){
        let currentScrollTop = $(this).scrollTop();
        // console.debug("current scroll position: " + currentScrollTop);

        //Scrolling down is detected!
        if (currentScrollTop > lastScrollTop){
            console.debug("scrolling down");
        }
        //Scrolling up is detected!
        else{
            console.debug("scrolling up");
        }

        lastScrollTop = currentScrollTop;
    });
});