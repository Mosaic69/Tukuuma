$(window).scroll(function () {
    console.log($(window).scrollTop())
    ;
    if ($(window).scrollTop() > 63) {
        if($('.nav-item').click() === true){
            $('.navbar').removeClass('navbar-fixed');
        }
        else{
            $('.navbar').addClass('navbar-fixed');
        }
    }
    if ($(window).scrollTop() < 64) {
      $('.navbar').removeClass('navbar-fixed');
    }
});



