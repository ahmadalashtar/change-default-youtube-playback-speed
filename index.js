let speed = 2;
const speedOptions = ['Normal', '0.25', '0.75', '0.5', '1.25', '1.75', '1.5', '2', '2.5', '3', '3.5', '4']

const settingsButtonUI = document.getElementsByClassName('ytp-settings-button')[0];

settingsButtonUI.addEventListener('click',function(){
  const item = findSpeedElement();
  if (item.innerText!=speed) {
    console.log(`speed: ${speed}`)
    console.log(`item.innerText: ${item.innerText}`)
    item.innerText = speed;
    console.log(`speed: ${speed}`)
    console.log(`item.innerText: ${item.innerText}`)
  }
})

const menuSelect = document.getElementById("speed-select");
console.log(menuSelect)

window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed(speed);
  
})



const changePlaybackSpeed = function(speed) {
  if (speed =='Normal') speed = '1'
  document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = speed;
}


const findSpeedElement = function(){
  let items = document.getElementsByClassName('ytp-menuitem-content');
  for (let i = 0 ; i < items.length ; i++){
    let e = items[i].innerText;
    if (speedOptions.includes(e)){
      const item = document.getElementsByClassName('ytp-menuitem-content')[i];
      return item;
    }
  }
};
