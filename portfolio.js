jQuery(document).ready(function() {
  var navOffset = jQuery("header").offset().top;
      
  jQuery(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    if(scrollPos >= navOffset) {
      jQuery("header").addClass("fixed");
      jQuery("header").wrap("<div class='placeholder'></div>")
      jQuery(".placeholder").height(jQuery("header").outerHeight());
    } else {
      jQuery("header").removeClass("fixed");
    }
  });
});
