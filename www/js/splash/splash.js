angular.module('Megafono.Splash', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('splash', {
    url: '/',
    templateUrl: 'js/splash/splash.html',
    controller: 'SplashController',
    resolve: {
      items: function ($http) {
        return [];
      }
    }
  });
})

.controller('SplashController', function ($scope, items) {
  $scope.newsItems = items;
});
