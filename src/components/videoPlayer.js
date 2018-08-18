angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      dvideo: '<',
      autoplay: '<',
      toggleauto: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html',
  });
