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

.controller('ComplaintsListController', function ($scope, complaints) {
  $scope.complaints = complaints;
});
