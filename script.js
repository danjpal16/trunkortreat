$(document).ready(function() {
    $('.title-header').hover(
      function() {
        $(this).find('.title-text').slideDown();
      },
      function() {
        $(this).find('.title-text').slideUp();
      }
    );
  });