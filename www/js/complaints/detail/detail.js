angular.module('Megafono.Complaints.Detail', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('complaints.detail', {
    url: '/:id/detail',
    templateUrl: 'js/complaints/detail/detail.html',
    controller: 'ComplaintsDetailController',
    resolve: {
      newsItems: function ($http) {
        return [];
      }
    }
  });
})

.controller('ComplaintsDetailController', function ($scope, $stateParams, newsItems) {
  $scope.id = $stateParams.id;
  $scope.newsItems = newsItems;
});
