angular.module('starter.services',[])

.service('PushNotification', function($state) {
  var self = this;

  self.initPushNotification = function() {
    var push = PushNotification.init({
      android: {
        senderID: "1044405020884",
        icon: 'smallicon',
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

    push.on('notification', function(data){
      self.notificationActions(data);
    });
  }

  self.notificationActions = function(data) {
    var dataArr = JSON.parse(window.localStorage['data'] || '[]');;
    console.log(data);
    dataArr.push(data);
    window.localStorage['data'] = JSON.stringify(dataArr);

    if (data.additionalData.type == "icon") {
      console.log('icon appjs');
      //console.log(dataArr.data.title);
      $state.go('icon', {
        "title": data.title,
        "image": data.image,
        "message": data.message
      });
    } else if (data.additionalData.type == "image") {
      console.log('img appjs');

      $state.go('image');
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

})
