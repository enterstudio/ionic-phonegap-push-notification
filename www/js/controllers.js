angular.module('starter.controllers', ['BackToListService'])

.controller('iconNotificationCtrl', function($scope, $state, $stateParams, BackToList) {

  console.log('Hello Icon');
  $scope.title = $stateParams.title;
  $scope.image = $stateParams.image;
  $scope.message = $stateParams.message;

  $scope.getBackToList = function(){
    $scope.getBackToList=BackToList.getBackToList();
  }

})

.controller('imageNotificationCtrl', function($scope, $state, $stateParams) {
  console.log('Hello Image');
  $scope.title = $stateParams.title;
  $scope.image = $stateParams.image;
  $scope.message = $stateParams.message;

  $scope.getBackToList = function(){
    $scope.getBackToList=BackToList.getBackToList();
  }

})

.controller('imageIconNotificationCtrl', function($scope, $state, $stateParams) {
  console.log('Hello ImageIcon');
  $scope.title = $stateParams.title;
  $scope.image = $stateParams.image;
  $scope.message = $stateParams.message;

  $scope.getBackToList = function(){
    $scope.getBackToList=BackToList.getBackToList();
  }

})

.controller('listNotificationCtrl', function($scope, $state) {
  console.log('Hello List');
    $scope.data = JSON.parse(window.localStorage['data'] || '[]');

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
