angular.module('BackToListService', [])

.service('BackToList', function($state) {
  var self = this;

  self.getBackToList = function() {
    //    $scope.getBackToList = function(){
    $state.go('list');
    console.log('Tapped from Service');
    //}
  }
})
