var VideoPlayer = function(){

  // cache video and modal objects
  this.video = document.getElementsByTagName('video')[0];
  this.modal = document.querySelectorAll('.modal')[0];

  // function that checks if the video is at the end, will display share buttons in modal.
var endCheck = function(){
  this.video = document.getElementsByTagName('video')[0];
  this.modal = document.querySelectorAll('.modal')[0];
if(this.video.currentTime === this.video.duration){

this.modal.showModal();
this.video.pause();
this.video.currentTime = 0;

  //show modal

} else if (this.video.currentTime < this.video.duration){
  console.log(this.video.currentTime);
  window.requestAnimationFrame(endCheck);

}


  };

  this.resize = function(){
      this.video.style.width = window.innerWidth + 'px';
      this.video.style.height = (window.innerWidth * 9) / 16 + 'px';
      this.video.style.marginTop = '0px';
      this.video.style.left = '0px';
      this.video.style.marginLeft = '0px';
  };


  this.init = function(){

    var that = this;
    console.dir(this.video);

    //this.resize();

    window.requestAnimationFrame(endCheck);
   // window.addEventListener("resize",that.resize)
  };


  this.init();

};

document.addEventListener("DOMContentLoaded", function(event) {
    VideoPlayer();
});
