angular.module('Megafono.Complaints', [
  'Megafono.Complaints.List',
  'Megafono.Complaints.Detail',
  'Megafono.Complaints.New',
])

.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('complaints', {
    url: '/complaints',
    abstract: true,
    templateUrl: 'js/complaints/complaints.html',
    controller: 'ComplaintsController',
    resolve: {
      newsItems: function ($http) {
        return [];
      }
    }
  });
})

.controller('ComplaintsController', function ($scope, newsItems) {
  $scope.newsItems = newsItems;
});
