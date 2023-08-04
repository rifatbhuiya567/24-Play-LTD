$(window).scroll(function(){
    let scrolling = $(this).scrollTop();

    if( scrolling > 40){
      $(".myNavbar").addClass("navAnim");
    }
    else{
      $(".myNavbar").removeClass("navAnim");
    }
});
// Scroll function end