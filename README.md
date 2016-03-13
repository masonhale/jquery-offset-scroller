# jquery-offset-scroller

A jQuery plugin to enable smooth scrolling to a page anchor/id with a configurable offset.

An offset can be helpful for pages with a fixed position header.

## Options
  - offsetPixels - subtracted from target position. Default: 0
  - animationSpeed - milliseconds to reach target. Default: 500

## Usage
```html
<script>
  // update offsetPixels default to account for fixed position header
  $().offsetScroller.defaults.offsetPixels = 92;

  // add scroller for all '#anchor' links
  $(document).ready(function() {
     $('a[href*=#]:not([href=#])').offsetScroller();
  });

  // auto scroll to #hash location on page load
  $().offsetScroller.scrollToHash(window.location.hash);
</script>
```

## License

MIT License

