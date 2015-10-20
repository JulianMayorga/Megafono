angular.module('Megafono.Complaints.New', [
  'monospaced.elastic'
])

.config(function($stateProvider) {
  $stateProvider.state('complaints.new', {
    url: '/new',
    templateUrl: 'js/complaints/new/new.html',
    controller: 'NewComplaintController'
  });
})

.controller('NewComplaintController', function($scope, $state, $ionicModal, $ionicHistory, Complaints, megafonoAuth) {
  $scope.addComplaint = function addComplaint(complaint) {
    Complaints.$add({
      'username': megafonoAuth.data.password.email,
      'text': complaint.text,
      'imageSrc': 'http://www.asla.org/sustainablelandscapes/images/greenstreet/GreenStreet_3.jpg'
    });
    $scope.closeModal();
  };
  $ionicModal.fromTemplateUrl('js/complaints/new/new-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.$on('$ionicView.enter', function() {
    var isCordovaApp = !!window.cordova;
    $scope.openModal();
    if (isCordovaApp) {
      cordova.plugins.Keyboard.show();
    }
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
    console.log('$destroy');
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
    console.log('modal.hidden');
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('complaints.list');
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
    console.log('modal.removed');
  });
});
