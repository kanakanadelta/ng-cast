angular.module('video-player')

  .component('search', {
    bindings: {
      searchclick: '<',
      searchbartext: '=',
    },
    templateUrl: 'src/templates/search.html',  
    controller: function() {

    }
  });
