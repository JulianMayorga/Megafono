angular.module('Megafono.Register', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('register', {
    url: '/register',
    templateUrl: 'js/register/register.html',
    controller: 'RegisterController',
    resolve: {
      newsItems: function ($http) {
        return [];
      }
    }
  });
})

.controller('RegisterController', function ($scope, newsItems, $ionicHistory, megafonoUtils) {
  $scope.newsItems = newsItems;

  $scope.uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);
});
