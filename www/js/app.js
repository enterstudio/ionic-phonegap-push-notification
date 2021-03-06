// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform, $state,$rootScope, PushNotification) {
    $ionicPlatform.ready(function() {

    PushNotification.initPushNotification();

      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
      url: '/app/:title/:image/:message',
      cache: false,
      templateUrl: 'templates/image-icon-notification.html',
      controller: 'imageIconNotificationCtrl'
    })

    .state('image', {
      url: '/image/:title/:image/:message',
      cache: false,
      templateUrl: 'templates/image-notification.html',
      controller: 'imageNotificationCtrl'

    })

    .state('list', {
      url: '/list',
      cache: false,
      templateUrl: 'templates/list-notifications.html',
      controller: 'listNotificationCtrl'

    })

    .state('icon', {
      url: '/icon/:title/:image/:message',
      cache: false,
      templateUrl: 'templates/icon-notification.html',
      controller: 'iconNotificationCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/list');
  });
