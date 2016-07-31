// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $state) {
    $ionicPlatform.ready(function() {

      var push = PushNotification.init({
        android: {
          senderID: "1044405020884",
          icon: 'icon',
          iconColor: "#FF4000"
        },
        ios: {
          alert: "true",
          badge: "true",
          sound: "true"
        },
        windows: {}
      });

      push.on('registration', function(data) {
        console.log(data);
      });




      console.log(window.localStorage);


      push.on('notification', function(data) {
        var dataArr = JSON.parse(window.localStorage['data'] || '[]');;
        console.log(data);
        dataArr.push(data);
      window.localStorage['data'] = JSON.stringify(dataArr);

        if (data.additionalData.type == "icon") {
          console.log('icon appjs');
          window.localStorage['title'] = data.title;
          window.localStorage['image'] = data.image;
          $state.go('icon');
        }

        else if (data.additionalData.type == "image") {
          console.log('img appjs');
          window.localStorage['title'] = data.title;
          window.localStorage['image'] = data.image;
          console.log(data.imageNotifImage);
          console.log(data.imageNotifTitle);
          $state.go('image');
        }

        else {
          console.log('image Icon appjs');
          window.localStorage['title'] = data.title;
          window.localStorage['image'] = data.image;
          $state.go('app');

        }
      });

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
      url: '/app',
      cache: false,
      templateUrl: 'templates/image-icon-notification.html',
      controller: 'imageIconNotificationCtrl'
    })

    .state('image', {
      url: '/image',
      cache: false,
      templateUrl: 'templates/image-notification.html',
      controller: 'imageNotificationCtrl'

    })

    .state('icon', {
      url: '/icon',
      cache: false,
      templateUrl: 'templates/icon-notification.html',
      controller: 'iconNotificationCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
  });
