$(document).ready(function() {

    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
});
