const speed = 2;

const speedOptions = ['Normal', '0.25', '0.75', '0.5', '1.25', '1.75', '1.5', '2', '2.5', '3', '3.5', '4']

window.addEventListener('yt-navigate-finish',(event)=>{
  changePlaybackSpeed(speed);
  
})


const changePlaybackSpeed = function(speed) {
  document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = speed;
}


let item; 
const speedElement = setInterval(function(){
  let items = document.getElementsByClassName('ytp-menuitem-content');
  for (let i = 0 ; i < items.length ; i++){
    let e = items[i].innerText;
    if (speedOptions.includes(e)){
      console.log("here")
      item = document.getElementsByClassName('ytp-menuitem-content')[i];
      clearInterval(speedElement);
      break;
    }
  }
},1)




const SpeedUI = setInterval(function(){
    // const currentSpeed = document.getElementsByClassName('ytp-menuitem-content')[1].innerText;   
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
