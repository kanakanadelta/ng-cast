angular.module('video-player')

.component('app', {

  templateUrl:'src/templates/app.html',  
  controller: function(youTube){
  this.searchyoutube = youTube.search;
  this.videos = window.exampleVideoData;
  this.dvideo = this.videos[0];
  this.autoplay = 1;


  //ES6 scoping, arrow function binds it to the app.
  this.changevideo = (value) => {
    this.dvideo = value;
  }

  this.searchclick = (value) => {
    this.searchyoutube(value, this.render)
  }

  this.toggleauto = () => {
    console.log('click');
    if(this.autoplay === 1) {
      this.autoplay = 0;
    } else if (this.autoplay ===0) {
      this.autoplay = 1;
    }
  }

  this.render = (data) => {
    this.videos = data.data.items;
    this.dvideo = data.data.items[0];
  }
  }
});
