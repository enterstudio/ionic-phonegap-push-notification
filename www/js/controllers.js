angular.module('starter.controllers', [])

.controller('iconNotificationCtrl', function($scope, $state, $stateParams) {

  console.log('Hello Icon');
  $scope.title = $stateParams.title;
  $scope.image = $stateParams.image;
  $scope.message = $stateParams.message;

})

.controller('imageNotificationCtrl', function($scope, $state, $stateParams) {
  console.log('Hello Image');
  $scope.title = $stateParams.title;
  $scope.image = $stateParams.image;
  $scope.message = $stateParams.message;

})

.controller('imageIconNotificationCtrl', function($scope, $state, $stateParams) {
  console.log('Hello ImageIcon');
  $scope.title = $stateParams.title;
  $scope.image = $stateParams.image;
  $scope.message = $stateParams.message;

})

.controller('listNotificationCtrl', function($scope, $state) {
  console.log('Hello List');
    $scope.data = JSON.parse(window.localStorage['data'] || '[]');
//  $state.go($state.current, {}, {reload: true});
  $scope.routeToNotification = function(data) {
    console.log(data);
    if (data.additionalData.type == "icon") {
      console.log('icon appjs');
      $state.go('icon', {
        "title": data.title,
        "image": data.image,
        "message": data.message
      });
    } else if (data.additionalData.type == "image") {
      console.log('img appjs');

      $state.go('image', {
        "title": data.title,
        "image": data.image,
        "message": data.message
      });
    } else {
      console.log('image Icon appjs');

      $state.go('app', {
        "title": data.title,
        "image": data.image,
        "message": data.message
      });

    }
  }
});
