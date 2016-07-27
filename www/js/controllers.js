angular.module('starter.controllers', [])

.controller('iconNotificationCtrl', function($scope, $state) {

  console.log('Hello Icon');

})

.controller('imageNotificationCtrl', function($scope, $state) {
  console.log('Hello Image');
})

.controller('imageIconNotificationCtrl', function($scope, $state) {
  console.log('Hello ImageIcon');
});
