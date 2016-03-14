// jQuery offsetScroller
// Copyright (c) 2016 Mason Hale
// MIT License
(function($) {

  function scrollToHash( hash, options ) {

    var opts = $.extend( {}, $.fn.offsetScroller.defaults, options );

    if (hash && hash[0] === '#') {
      var targetObj;
      try {
        targetObj = $(hash);
      }
      catch(e) {
        console.log("offsetScroller could not scroll to: '" + hash + "'");
      }
      var targetOffset = targetObj && targetObj.offset();
      if (targetOffset) {
        $('html, body').animate(
          {scrollTop: (targetOffset.top - opts.offsetPixels)},
          opts.animationSpeed);
        return true;
      }
    }
    return false;
  }

  function updateUrl( hash ) {
    if ( history.pushState && window.location.protocol !== 'file:' ) {
      history.pushState( null, null, hash );
    }
  }

  function clickHandler( event ) {
    // Don't run if right-click or command/control + click
    if ( event.button !== 0 || event.metaKey || event.ctrlKey ) return;

    var targetSel = $(this).attr("href");

    if ( targetSel && targetSel[0] === '#' ) {
      var opts = event.data;
      event.preventDefault();
      updateUrl( targetSel );
      scrollToHash( targetSel, opts );
    }
  }

  $.fn.offsetScroller = function( options ) {
    return this.each( function() {
      $(this).bind( 'click', options, clickHandler );
    });
  };

  $.fn.offsetScroller.defaults = {
    offsetPixels: 0,
    animationSpeed: 500
  }

  $.fn.offsetScroller.scrollToHash = scrollToHash;

})(jQuery);

