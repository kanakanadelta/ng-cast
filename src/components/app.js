angular.module('video-player')

.component('app', {

  templateUrl:'src/templates/app.html',  
  controller: function(){

  this.videos = window.exampleVideoData;
  this.dvideo = this.videos[0];

  //ES6 scoping, arrow function binds it to the app.
  this.changevideo = (value) => {
    this.dvideo = value;
  }

  }
});
