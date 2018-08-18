angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      changevideo: '<',
    },
    templateUrl: 'src/templates/videoList.html', 
    controller: function() {
    }
  });
