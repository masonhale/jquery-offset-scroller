// jQuery offsetScroller
// Copyright (c) 2016 - Team Topia Inc.
// Author: Mason Hale
//
// Provides handler to scroll smoothly to #anchor
//
// Options:
//    offsetPixels: 0     // useful for fixed headers
//    animationSpeed: 500 // in milliseconds
//
// Usage:
//
//    $(document).ready(function() {
//      $('a[href*=#]:not([href=#])').offsetScroller({offsetPixels:92});
//    });
//
(function($) {

  function clickHandler( event ) {
    var targetSel = $(this).attr("href");
    // only support href's starting with '#'
    if (targetSel && targetSel[0] === '#') {
      var targetObj;
      try {
        targetObj = $(targetSel);
      }
      catch(e) {
        console.log("offsetScroller could not scroll to: '" + targetSel + "'");
      }
      if (targetObj) {
        var opts = event.data;
        event.preventDefault();
        $('html, body').animate(
          {scrollTop: (targetObj.offset().top - opts.offsetPixels)},
          opts.animationSpeed);
        return false;
      }
    }
  }

  $.fn.offsetScroller = function( options ) {
    var opts = $.extend( {}, $.fn.offsetScroller.defaults, options );

    return this.each( function() {
      $(this).bind( 'click', opts, clickHandler );
    });
  };

  $.fn.offsetScroller.defaults = {
    offsetPixels: 0,
    animationSpeed: 500
  }

})(jQuery);

