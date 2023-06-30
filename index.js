const speed = 2;

window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed(speed);
  
})


const changePlaybackSpeed = function(speed) {
  document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = speed;
}



const set = setInterval(function(){
    const currentSpeed = document.getElementsByClassName('ytp-menuitem-content')[1].innerText;
    if (currentSpeed!=speed) {
      document.getElementsByClassName('ytp-menuitem-content')[1].innerText = speed;
    } else {
    clearInterval(set);
    }
}, 1);
