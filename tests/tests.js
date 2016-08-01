describe('PushNotificationService', function() {
  beforeEach(module('starter'));
  var service,$state;

  beforeEach(inject(function(_PushNotification_,_$state_){
    $state = _$state_;
    service = _PushNotification_;
  }))

  it('Should go to icon notification view', function() {

    var data = {
      title: 'Icon Title',
      image: "icon.com/icon.jpg",
      message: "Icon Message",
      additionalData:{
        type: "icon"
      }
    }

    spyOn($state, "go");
    service.notificationActions(data);
    expect($state.go ).toHaveBeenCalledWith('icon', {
      "title": 'Icon Title',
      "image": "icon.com/icon.jpg",
      "message": "Icon Message"
    });

  });
  it('Should go to image notification view', function() {

    var data = {
      title: 'Image Title',
      image: "image.com/image.jpg",
      message: "Image Message",
      additionalData:{
        type: "image"
      }
    }

    spyOn($state, "go");
    service.notificationActions(data);
    expect($state.go ).toHaveBeenCalledWith('image', {
      "title": 'Image Title',
      "image": "image.com/image.jpg",
      "message": "Image Message"
    });

  });
  it('Should go to icon-image notification view', function() {

    var data = {
      title: 'Icon-image Title',
      image: "icon-image.com/icon-image.jpg",
      message: "Icon-image Message",
      additionalData:{
        type: "icon-image"
      }
    }

    spyOn($state, "go");
    service.notificationActions(data);
    expect($state.go ).toHaveBeenCalledWith('app', {
      "title": 'Icon-image Title',
      "image": "icon-image.com/icon-image.jpg",
      "message": "Icon-image Message"
    });

  })
})
