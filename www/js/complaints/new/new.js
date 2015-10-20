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

.controller('NewComplaintController', function($scope, $state, $ionicModal,
  $ionicHistory, $cordovaCamera, Complaints, megafonoAuth) {

  $scope.complaint = {};

  $scope.addComplaint = function addComplaint(complaint) {
    Complaints.$add({
      'username': megafonoAuth.data.password.email,
      'text': complaint.text,
      'date': new Date().getTime(),
      'imageSrc': complaint.imageSrc || null,
      'userProfileImage': megafonoAuth.data.password.profileImageURL
    });
    $scope.closeModal();
  };
  document.addEventListener("deviceready", function() {
    $scope.takePicture = function() {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.complaint.imageSrc = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        console.log('Error: ' + err);
      });
    };
  }, false);

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
