/*

تغيير نص السرعة:
نص السرعة لا يتواجد على اليوتيوب إلا بعد الضغط على أيقونة المسننات

*/

const speed = 2;

window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed(speed);
  
})


const changePlaybackSpeed = function(speed) {
  document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = speed;
}



const set = setInterval(function(){
    console.log('inside')
    const currentSpeed = document.getElementsByClassName('ytp-menuitem-content')[1].innerText;
    console.log    (document.getElementsByClassName('ytp-menuitem-content')[1].innerText)
    console.log(currentSpeed)
    if (currentSpeed!=speed) {
      console.log('changed')
      document.getElementsByClassName('ytp-menuitem-content')[1].innerText = speed;
      console.log    (document.getElementsByClassName('ytp-menuitem-content')[1].innerText)
    console.log(currentSpeed)
    } else {
      console.log('stopped')
      console.log    (document.getElementsByClassName('ytp-menuitem-content')[1].innerText)
    console.log(currentSpeed)
    clearInterval(set);
    }
}, 1);
