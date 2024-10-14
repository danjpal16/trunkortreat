$(document).ready(function() {
    $('.title-header').hover(
      function() {
        $(this).find('.title-text').slideDown();
      },
      function() {
        $(this).find('.title-text').slideUp();
      }
    );

    $('.moreinfo-btn').on('click', () => {
      $('.moreinfo-text').toggle();
    });

    $('.trunk-card').hover(
      function() {
        $(this).find('.section-2').slideDown();
      },
      function() {
        $(this).find('.section-2').slideUp();
      }
    );

  });