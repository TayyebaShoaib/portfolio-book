jQuery(document).ready(function() {
  var navOffset = jQuery("header").offset().top;
  alert(navOffset)
  jQuery("header").wrap("<div class='nav-placeholder'></div>")
  jQuery(".nav-placeholder").height(jQuery("header").outerHeight());
  
  jQuery(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    if(scrollPos >= navOffset) {
      jQuery("header").addClass("fixed");
    } else {
      jQuery("header").removeClass("fixed");
    }
  });
  
});
