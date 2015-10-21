angular.module('Megafono.Complaints.List', [])

.config(function($stateProvider) {
  $stateProvider.state('complaints.list', {
    url: '/',
    templateUrl: 'js/complaints/list/list.html',
    controller: 'ComplaintsListController',
    resolve: {
      complaints: function(Complaints) {
        return Complaints;
      }
    }
  });
})

.controller('ComplaintsListController', function($scope, $ionicNavBarDelegate, complaints) {
  $scope.complaints = complaints;
  $scope.$on('$ionicView.enter', function(e) {
    $ionicNavBarDelegate.showBar(true);
  });
});
