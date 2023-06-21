function changePlaybackSpeed() {
    document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = 2;
  }
  
window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed();
})

const changeSpeedText = function(newSpeed){
  document.getElementsByClassName('ytp-menuitem-content')[2].innerText = newSpeed 
}