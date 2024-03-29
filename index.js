/*
                 speed options:   a list contains speed options 1, 1.5..etc
find Playback Speed UI Element:   if item.includes(speed options) -> return item
                         click:   clicks speed element & clicks the desired speed (to get the check mark)
                          save:   stores the speed variable in the synchronized session storage.
test this, the only event listener you need is "playing"

*/
const speedOptions = [
  "0.25",
  "0.75",
  "0.5",
  "Normal",
  "1.25",
  "1.75",
  "1.5",
  "2",
];
const findPlaybackSpeedUIElement = function () {
  let items = document.getElementsByClassName("ytp-menuitem-content");
  for (let i = 0; i < items.length; i++) {
    let e = items[i].innerText;
    if (speedOptions.includes(e)) {
      const item = document.getElementsByClassName("ytp-menuitem-content")[i];
      return item;
    }
  }
};
const click = function (speed) {
  document.querySelector("button.ytp-settings-button:nth-child(4)")
  speedUIElement = findPlaybackSpeedUIElement();
  speedUIElement.click();
  switch (speed) {
      case 0.25:
          numericRepresentation = 0;
          break;
      case 0.5:
          numericRepresentation = 1;
          break;
      case 0.75:
          numericRepresentation = 2;
          break;
      case 1:
          numericRepresentation = 3;
          break;
      case 1.25:
          numericRepresentation = 4;
          break;
      case 1.5:
          numericRepresentation = 5;
          break;
      case 1.75:
          numericRepresentation = 6;
          break;
      case 2:
          numericRepresentation = 7;
          break;
  }
  document.getElementsByClassName("ytp-panel")[1].children[1].children[numericRepresentation].click()
  document.getElementsByClassName("ytp-panel")[1].children[0].click()
}

function save(speed) {
  browser.storage.sync.set({ speed: speed });
}

function main() {
  const currentSpeed = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0].playbackRate;

  const storedSpeed = browser.storage.sync.get("speed");
  storedSpeed.then(function (result) {
    if (result) {
      document.getElementsByClassName(
        "video-stream html5-main-video"
      )[0].playbackRate = result.speed;
      if (result.speed != currentSpeed) {
        click(result.speed);
      }
    }
  });
}

// const interval = setInterval(main, 1);


// test how it works



// storage speed != playbackRate
// change playbackrate and stop
// keep waiting for ui until you get it, then stop

// this only works once when you refresh the page / open a new page
// the script only runs once when a refresh happens



// This function will be called whenever a new video is selected
function onChange() {
  console.log("change")
  main();
  // Add your custom logic here
}
function onSpeedChange() {
  console.log("speed changed")
}

// Add event listeners
document.addEventListener("DOMContentLoaded", onChange); // Triggered when the page is loaded
window.addEventListener("beforeunload", onChange); // Triggered when the page is refreshed

// Example: Assuming there is a container that holds the video player on the page
// You may need to adjust this selector based on the current YouTube structure
const videoContainer = document.querySelector(".html5-main-video");

if (videoContainer) {
  videoContainer.addEventListener("playing", onChange); // Triggered when a new video starts playing
  element = videoContainer.playbackRate;
  Object.observe(videoContainer, function (changes) {
    changes.forEach(function (change) {
      if (change.name === 'playbackRate') {
        // Update the input field when the playbackRate changes
        console.log("value changed")
      }
    });
  });
}
