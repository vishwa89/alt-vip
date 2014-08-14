alt
.controller('indexCtrl', function($scope){
})
.controller('searchCtrl', function($scope, $routeParams, $location, searches){
  $scope.searches = searches.query();
  
  $scope.sections = [
    {value: "name", text: "name"}, 
    {value: "id", text: "created"}, 
    {value: "price", text: "price"}
  ];
  $scope.section = _.where($scope.sections, {value: $routeParams.section});
  $scope.sectionValue = $routeParams.section;
  $scope.sectionText = '';
  if (!_.isEmpty($scope.section)) {
    $scope.sectionText = $scope.section[0]['text'];
  }

  $scope.criteria = $location.search().target;
})
.controller('productsCtrl', function($scope, products, productsFilterService) {
  $scope.products = products.query();
  $scope.productsFilterService = productsFilterService; 
})
.controller('filterCtrl', function($scope, productsFilterGender, productsFilterType, productsFilterColor, productsFilterService) { 
    $scope.productsFilterService = productsFilterService;
    $scope.genders = productsFilterGender.query();
    $scope.types = productsFilterType.query();
    $scope.colors = productsFilterColor.query();

    /*

    $scope.selected = $scope.genders[0].value;
    console.log($scope.selected);

    $scope.select= function(value) {
       console.log(value);
       $scope.selected = value; 
    };

    $scope.itemClass = function(value) {
        return value === $scope.selected ? 'active' : undefined;
    };*/
})
.controller('sortCtrl', function($scope, productsSort) {
    $scope.sorts = productsSort.query();
})
.controller('brandChapterCtrl', function($scope, $routeParams, $location) { 
    $scope.onchapter = $routeParams.chapter;

    $scope.chapters = [
        { name: 'products', url: '/brand/products' },
        { name: 'story', url: '/brand/story' },
        { name: 'mood', url: '/brand/mood' },
        { name: 'talk', url: '/brand/talk' },
        { name: 'trip', url: '/brand/trip' },
        { name: 'moment', url: '/brand/moment' },
    ]

    $scope.navClass = function (chapter) {
        var currentRoute = $location.path().split('/');
        return chapter === currentRoute[2] ? 'active' : '';
    };
});
