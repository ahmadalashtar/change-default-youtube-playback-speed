function changePlaybackSpeed() {
    document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = 2;
  }
  
window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed();
})