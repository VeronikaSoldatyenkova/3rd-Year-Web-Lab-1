$(document).ready(function(){
    $("#band h2").hide().slideDown(1000);
    $("#band p").hide().fadeIn(1500);     
});

  
$(document).ready(function(){  
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      var startChange = 50; 
    
      if (scrollTop > startChange) {
        var newOpacity = 1 - (scrollTop - startChange) / 200; 
        if (newOpacity < 0.5) newOpacity = 0.5;
        $(".w3-bar").css("opacity", newOpacity);
      } else {
        $(".w3-bar").css("opacity", 1); 
      }
    });
});


$(document).ready(function() {
    $('a[href*="#"]').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
});


  $(document).ready(function(){
    $(".w3-third img").hover(function(){
      $(this).animate({width: "110%"}, 300); 
    }, function(){
      $(this).animate({width: "100%"}, 300);
    });
  });