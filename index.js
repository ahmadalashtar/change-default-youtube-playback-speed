function changePlaybackSpeed() {
    document.getElementsByClassName("video-stream html5-main-video")[0]. playbackRate = 2;
  }
  
let currentUrl = "";

// Check for URL changes every 500ms
setInterval(function() {
  if (window.location.href !== currentUrl) {
    // The URL has changed
    // Update the current URL
    changePlaybackSpeed();
    currentUrl = window.location.href;
  }
}, 500);

