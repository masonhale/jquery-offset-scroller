# jquery-offset-scroller

A jQuery plugin to enable smooth scrolling to a page anchor/id with a configurable offset.

http://masonhale.github.io/jquery-offset-scroller

## Demo

See <a href="http://codepen.io/masonhale/pen/BKLdqE/">jQuery offsetScroller</a> on <a href="http://codepen.io">CodePen</a>.

## Options
  - offsetPixels - subtracted from target position. Default: 0
  - animationSpeed - milliseconds to reach target. Default: 500

## Usage
```html
<script>
  $(document).ready(function() {
    // update offsetPixels default to account for fixed position header
    $().offsetScroller.defaults.offsetPixels = 92;

    // add scroller for all '#anchor' links
    $('a[href*="#"]:not([href="#"])').offsetScroller();

    // auto scroll to #hash location on page load
    $().offsetScroller.scrollToHash(window.location.hash);
  });
</script>
```

## License

MIT License

