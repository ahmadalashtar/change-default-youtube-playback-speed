let speed = 2;
const menuSelect = document.getElementById("speed-select");
console.log(menuSelect)

window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed(speed);
  
})

// addEventListener("change", (event) => {});

const speedOptions = ['Normal', '0.25', '0.75', '0.5', '1.25', '1.75', '1.5', '2', '2.5', '3', '3.5', '4']


const changePlaybackSpeed = function(speed) {
  if (speed =='Normal') speed = '1'
  document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = speed;
}


let item; 
const findSpeedElement = setInterval(function(){
  let items = document.getElementsByClassName('ytp-menuitem-content');
  for (let i = 0 ; i < items.length ; i++){
    let e = items[i].innerText;
    if (speedOptions.includes(e)){
      console.log("here")
      item = document.getElementsByClassName('ytp-menuitem-content')[i];
      clearInterval(findSpeedElement);
      break;
    }
  }
},1)

const SpeedUI = setInterval(function(){
    if (item.innerText!=speed) {
      console.log(`speed: ${speed}`)
      console.log(`item.innerText: ${item.innerText}`)
      item.innerText = speed;
      console.log(`speed: ${speed}`)
      console.log(`item.innerText: ${item.innerText}`)
    } else {
    clearInterval(SpeedUI);
    }
}, 1);
