angular.module('video-player')
.service('youTube', function($http){
  this.search = function(query, callback){
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      videoEmbeddable: true,
      params: {
        key: window.YOUTUBE_API_KEY,  
        part: 'snippet',
        q: query,
        maxResults: 5,
        type: 'video',
      }
    }).then(function(data){
      // if(callback) {
        callback(data);
      // }
      console.log('Success, data get.', data);
    }).catch(function(data){
      // console.log('Error', data)
    });
  }
});
