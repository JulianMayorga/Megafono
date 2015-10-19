angular.module('Megafono.Complaints.List', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('complaints.list', {
    url: '/',
    templateUrl: 'js/complaints/list/list.html',
    controller: 'ComplaintsListController',
    resolve: {
      newsItems: function ($http) {
        return [];
      }
    }
  });
})

.controller('ComplaintsListController', function ($scope, newsItems) {
  $scope.newsItems = newsItems;
});
