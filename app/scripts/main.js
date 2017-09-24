

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
$(document).ready(function() {

  $('#design').click(function() {
    $('#design-content').show().removeClass('hidden');
    $('#identity-content').addClass('hidden').hide();
    $('#web-design-content').addClass('hidden').hide();
    $('#photography-content').addClass('hidden').hide();
  });

  $('#photography').click(function() {
    $('#photography-content').show().removeClass('hidden');
    $('#identity-content').addClass('hidden').hide();
    $('#web-design-content').addClass('hidden').hide();
    $('#design-content').addClass('hidden').hide();
  });

  $('#identity').click(function() {
    $('#identity-content').show().removeClass('hidden');
    $('#photography-content').addClass('hidden').hide();
    $('#web-design-content').addClass('hidden').hide();
    $('#design-content').addClass('hidden').hide();
  });

  $('#web-design').click(function() {
    $('#web-design-content').show().removeClass('hidden');
    $('#photography-content').addClass('hidden').hide();
    $('#identity-content').addClass('hidden').hide();
    $('#design-content').addClass('hidden').hide();
  });

  $('#show-all').click(function() {
    $('.grid div').removeClass('hidden');

  });
});
