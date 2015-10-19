angular.module('Megafono.Login', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'js/login/login.html',
    controller: 'LoginController',
    resolve: {
      newsItems: function ($http) {
        return [];
      }
    }
  });
})

.controller('LoginController', function ($scope, $ionicHistory, megafonoUtils, newsItems) {
  $scope.newsItems = newsItems;

  $scope.uiSrefNoBack = megafonoUtils.uiSrefNoBack($ionicHistory);
});
