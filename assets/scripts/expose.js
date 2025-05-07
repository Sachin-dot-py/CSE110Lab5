
window.addEventListener('DOMContentLoaded', init);

function init() {


  //Image variables 
  const selectElement = document.getElementById("horn-select");
  const imageElement = document.querySelector("#expose img");

  //Volume Controls variables 
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const volumeControls = document.getElementById("volume-controls");
  

  //Play button controls 
  const playButton = document.querySelector("#expose button");
  const audioElement = document.querySelector("audio");

  //Confetti
  const jsConfetti = new JSConfetti();



  selectElement.addEventListener("change", function () {
    const selectedValue = selectElement.value;

    // Only update if an actual horn is selected
    if (selectedValue === "select") return;

    imageElement.src = `assets/images/${selectedValue}.svg`;
    audioElement.src = `assets/audio/${selectedValue}.mp3`;
  
  });



  
  volumeSlider.addEventListener("input", function () {
    const volumeValue = Number(volumeSlider.value);
    audioElement.volume = volumeValue / 100;

    // Change volume icon based on value
    if (volumeValue === 0) 
    {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } 
    else if (volumeValue < 33) 
    {
      volumeIcon.src = "assets/icons/volume-level-1.svg"
    } 
    else if (volumeValue < 67) 
    {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } 
    else 
    {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", function () {
    if(audioElement.src.includes("party-horn.mp3"))
    {
      jsConfetti.addConfetti();
      audioElement.play();
    }
    if (audioElement.src && !audioElement.src.endsWith("/")) {
      audioElement.play();
    }
  });
}