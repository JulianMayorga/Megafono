angular.module('Megafono.Complaints.List', [ ])

.config(function ($stateProvider) {
  $stateProvider.state('complaints.list', {
    url: '/',
    templateUrl: 'js/complaints/list/list.html',
    controller: 'ComplaintsListController',
    resolve: {
      complaints: function (Complaints) {
        return Complaints;
      }
    }
  });
})

.controller('ComplaintsListController', function ($scope, $ionicPopover, complaints) {
  $scope.complaints = complaints;

  $ionicPopover.fromTemplateUrl('js/complaints/list/menu.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
});
