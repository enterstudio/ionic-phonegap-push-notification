angular.module('starter.controllers', [])

.controller('iconNotificationCtrl', function($scope, $state) {

  console.log('Hello Icon');
  $scope.iconTitle = window.localStorage['title'];
  $scope.iconImage = window.localStorage['image'];

})

.controller('imageNotificationCtrl', function($scope, $state) {
  console.log('Hello Image');
})

.controller('imageIconNotificationCtrl', function($scope, $state) {
  console.log('Hello ImageIcon');
})

.controller('listNotificationCtrl', function($scope, $state) {
  console.log('Hello List');
});
