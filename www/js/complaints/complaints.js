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

.factory('Complaints', function($firebaseArray) {
  var complaintsRef = new Firebase("https://megafono.firebaseio.com/complaints");
  return $firebaseArray(complaintsRef);
})

.controller('ComplaintsController', function ($scope, newsItems) {
  $scope.newsItems = newsItems;
});
