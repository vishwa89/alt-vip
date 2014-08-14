alt
.directive('searchResult', function() {
  return {
    restrict: 'AEC',
    templateUrl: '/app/partials/search-result.html'
  }
})
.directive('hoverShow', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('.tag-trigger').hoverIntent(function() {
          $(this).parents('.tag').find('.tag-info').css({opacity: 0, visibility: 'visible'}).animate({opacity: 1}, 200, 'easeOutBounce');
        }, function() {
      });
      
      $('.tag').hoverIntent(function() {
        }, function() {
          $(this).find('.tag-info').css({opacity: 1, visibility: 'visible'}).animate({opacity: 0}, 200, 'easeOutBounce');
      });
    }
  };
})
.directive('clickActive', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('.click-active').click(function() {        
        $(this).closest('form').find('.click-active').removeClass('active');
        $(this).addClass('active');
      });
    }
  };
})
.directive('filterHandle', function() {
  return function(scope, element, attrs) {
    var filters = $("#filters");
    filters.find('#filterHandle')
    .hoverIntent(
      function(){
        filters.animate({bottom:'+=5px'},200);
      },
      function() {
        filters.animate({bottom:'-=5px'},200);
      }
    )
    .click(
      function(event){
        if (filters.hasClass("isDown") ) {
          filters.stop().animate({bottom:'-=173px'}, 300, 'easeOutExpo').removeClass("isDown");
        } else {
          filters.stop().animate({bottom:'+=173px'}, 300, 'easeOutExpo').addClass("isDown");
        }
        return false;
      }
    );
  };
});
