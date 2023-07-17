const main = setInterval(() => {
// definitions
let speed = 2;
const speedOptions = ['Normal', '0.25', '0.75', '0.5', '1.25', '1.75', '1.5', '2', '2.5', '3', '3.5', '4'];
const settingsButtonUI = document.getElementsByClassName('ytp-settings-button')[0];
const changePlaybackSpeed = function(speed) {
  if (speed =='Normal') speed = '1'
  document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = speed;
}

const changePlaybackSpeedUI = function(item){
  if (item.innerText!=speed) {
    item.innerText = speed;
  }
};

const findPlaybackSpeedUIElement = function(){
  let items = document.getElementsByClassName('ytp-menuitem-content');
  for (let i = 0 ; i < items.length ; i++){
    let e = items[i].innerText;
    if (speedOptions.includes(e)){
      const item = document.getElementsByClassName('ytp-menuitem-content')[i];
      return item;
    }
  }
};

if (document
  .getElementsByClassName("video-stream html5-main-video")[0]
  .playbackRate == speed) {
  
    clearInterval(main)
}
else {
  


settingsButtonUI.addEventListener('click',function(){
  const item = findPlaybackSpeedUIElement();
  changePlaybackSpeedUI(item);
  
})

window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed(speed);
})

}
  

}, 1);









