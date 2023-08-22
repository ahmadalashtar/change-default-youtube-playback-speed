function save(speed) {
  browser.storage.local.set({ speed: speed });
}

function main() {
  const speedElement = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0];
  const currentSpeed = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0].playbackRate;
  speedElement.addEventListener("change", (event) => {
    main();
  });

  if (currentSpeed != 1) {
    save(currentSpeed);

  }
  const storedSpeed = browser.storage.local.get("speed");
  storedSpeed.then(function (result) {
    if (result) {
      document.getElementsByClassName(
        "video-stream html5-main-video"
      )[0].playbackRate = result.speed;
    }
  });
}

const interval = setInterval(main, 1);
