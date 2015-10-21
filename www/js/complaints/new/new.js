angular.module('Megafono.Complaints.New', [
  'monospaced.elastic',
  'angularReverseGeocode'
])

.config(function($stateProvider) {
  $stateProvider.state('complaints.new', {
    url: '/new',
    templateUrl: 'js/complaints/new/new.html',
    controller: 'NewComplaintController',
    resolve: {
      position: function ($cordovaGeolocation, $q) {

        var deferred = $q.defer();

        var posOptions = {
          timeout: 10000,
          enableHighAccuracy: false
        };

        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function(pos) {
            var position = {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            };
            deferred.resolve(position);
          }, function(err) {
            console.log('Error: ' + err);
            deferred.resolve({
              latitude: null,
              longitude: null
            });
          });

          return deferred.promise;
      }
    }
  });
})

.controller('NewComplaintController', function($scope, $state, $ionicModal, $ionicPopup,
  $ionicHistory, $cordovaCamera, Complaints, position) {

  $scope.complaint = {
    latitude: position.latitude,
    longitude: position.longitude
  };

  $scope.addComplaint = function addComplaint(complaint) {
    Complaints.$add({
      'username': auth.$getAuth().password.email,
      'text': complaint.text,
      'date': new Date().getTime(),
      'latitude': complaint.latitude,
      'longitude': complaint.longitude,
      'imageSrc': complaint.imageSrc || null,
      'userProfileImage': auth.$getAuth().password.profileImageURL
    });
    $ionicPopup.alert({
      title: 'Muchisimas gracias por su aporte!',
      template: 'Con su participación haremos juntos la Ciudad donde vivís mejor.'
    }).then(function(res) {
      $scope.closeModal();
    });
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
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('complaints.list');
  });
});
