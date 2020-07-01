$(function () {
    $(window).scroll(function () { 
        if($(this).scrollTop()>200){
            $('.nuttop').addClass('hiennuttop');
            $('.menutop').addClass('doimenu');
        }else{
            $('.nuttop').removeClass('hiennuttop');
            $('.doimenu').removeClass('doimenu');
        }
    });



    // back to top
$('.nuttop').click(function () { 
    $('html,body').animate({scrollTop:0},1000);
});


});