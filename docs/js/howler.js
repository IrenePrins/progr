var sound = new Howl({
    src: ["../audio/PimPoy.wav"],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log("Finished!");
    }
  });
  
  sound.on("load", function() {
    // var startButton = document.getElementById("music")[0];
    // startButton.addEventListener("mouseover", function() {
    //   if (sound.playing()) {
    //     sound.pause();
    //   } else {
    //     sound.play();
    //   }
    // });
    sound.play()
  });