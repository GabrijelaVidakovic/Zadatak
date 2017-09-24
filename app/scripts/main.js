
// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

$(document).ready(function() {

  jQuery('.gallery').mixItUp();

});

