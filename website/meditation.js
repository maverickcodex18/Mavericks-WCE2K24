var playButton1 = document.getElementById("playButton1");
var playButton2 = document.getElementById("playButton2");
var stopButton = document.getElementById("stopButton");

// Variable to hold the currently playing audio element
var currentAudio = null;

// Add click event listener to the first button
playButton1.addEventListener("click", function () {
  playSong("./OM.mp3"); // Replace 'your_first_song_url.mp3' with the URL of your first song
});

// Add click event listener to the second button
playButton2.addEventListener("click", function () {
  playSong("./flute.mp3"); // Replace 'your_second_song_url.mp3' with the URL of your second song
});

// Add click event listener to the stop button
stopButton.addEventListener("click", function () {
  stopSong();
});

// Function to play a song
function playSong(songUrl) {
  // Pause the currently playing audio, if any
  if (currentAudio !== null) {
    currentAudio.pause();
  }

  // Create an audio element
  var audio = new Audio(songUrl);

  // Play the audio
  audio.play();

  // Update the currently playing audio
  currentAudio = audio;
}

// Function to stop the currently playing song
function stopSong() {
  // Pause the currently playing audio, if any
  if (currentAudio !== null) {
    currentAudio.pause();
    currentAudio = null;
  }
}

document.getElementById("meditation").addEventListener("click", () => {
  const popupWindow = window.open(
    "test.html",
    "_blank",
    "width=400,height=300"
  );
  popupWindow.focus();
});
