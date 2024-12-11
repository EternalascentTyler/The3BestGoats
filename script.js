let Screen = 1;

// Image elements
const b1 = document.getElementById("bald");
const bm = document.getElementById("batMan");
const l0 = document.getElementById("loGo");
const Wi = document.getElementById("aHHH");
const Dl = document.getElementById("lost");
const BN = document.getElementById("Banner");

// Text element for screenText
const ST = document.getElementById("screenText");

// Left and Right arrow elements
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// Audio elements
const dsound = document.getElementById("dsound");
const csound = document.getElementById("csound");
const bsound = document.getElementById("bsound");

// Text content for each screen
const texts = [
  "CoryxKenshin, whose real name is Cory DeVante Williams, is a popular American YouTuber, and gamer. He is best known for his humorous and energetic commentary while playing video games, particularly horror games, though he has played a variety of genres.",
  "Dashie, whose real name is Charlie Guzman, is a popular YouTuber and content creator known for his comedic and high-energy gaming videos. His channel, DashieGames, primarily focuses on Let's Plays, where he plays various video games while providing humorous commentary and reactions. He has gained a significant following for his loud and animated personality, which contrasts with more subdued YouTubers in the gaming community.",
  "Berleezy, whose real name is Berlin Edmond, is a popular YouTuber, content creator, and comedian best known for his hilarious commentary, reactions, and gaming videos. His YouTube channel, Berleezy, has grown significantly over the years, and he has become a prominent figure in the YouTube community. Like Dashie, Berleezy is known for his energetic and comedic style, but his brand has a slightly different tone, often incorporating dark humor, sharp wit, and a laid-back yet engaging personality.",
];

// Function to change back to the default screen (Screen 1)
function changeBack() {
  b1.src = "Images/BaldCory.jpg";
  bm.src = "Images/batmanCory.png";
  l0.src = "Images/coryLogo.jpg";
  Wi.src = "Images/goofyAhCory.jpg";
  Dl.src = "Images/WeirdCory.jpg";
  BN.src = "Images/coryBanner.png";
  ST.textContent = texts[0]; // Set default text for screen 1
}

// Function to change to the second screen (Screen 2)
function changeImage() {
  b1.src = "Images/dashie1.jpg";
  bm.src = "Images/dashie2.jpeg";
  l0.src = "Images/dashielogo.jpg";
  Wi.src = "Images/dashieweird.png";
  Dl.src = "Images/dashielost.png";
  BN.src = "Images/dashieBanner.jpg";
  ST.textContent = texts[1]; // Set text for screen 2
}

// Function to change to the third screen (Screen 3)
function changeImages() {
  b1.src = "Images/berleezy3.gif";
  bm.src = "Images/berleezydrip.webp";
  l0.src = "Images/berleezy2.jpg";
  Wi.src = "Images/berleezy4.jpg";
  Dl.src = "Images/berleezy1.jpg";
  BN.src = "Images/berleezyBanner.png";
  ST.textContent = texts[2]; // Set text for screen 3
}

// Function to stop all audio
function stopAllAudio() {
  dsound.pause();
  dsound.currentTime = 0;
  csound.pause();
  csound.currentTime = 0;
  bsound.pause();
  bsound.currentTime = 0;
}

// Function to play a specific sound when an image is clicked
function playSoundForImage(imageId) {
  stopAllAudio(); // Stop any currently playing audio

  // Determine which sound to play based on the image ID
  switch (imageId) {
    case "loGo":
      csound.play();
      console.log("Playing Cory Sound");
      break;
    case "batMan":
      csound2.play();
      console.log("Playing cory annoyied Sound");
      break;
    case "lost":
      csound3.play();
      console.log("Playing Cory Sound");
      break;
    case "bald":
      csound3.play();
      console.log("Playing Dashie Sound");
      break;
    case "batMan":
      csound.play();
      console.log("Playing Cory Sound");
      break;
    case "Banner":
      csound.play();
      console.log("Playing Cory Sound");
      break;
    default:
      console.log("Unknown image clicked.");
      break;
  }
}

// Function to cycle between the screens
function cycleScreen(direction) {
  stopAllAudio(); // Stop any audio when changing the screen

  if (direction === "left") {
    Screen--;
    if (Screen < 1) {
      Screen = 3;
    }
  } else if (direction === "right") {
    Screen++;
    if (Screen > 3) {
      Screen = 1;
    }
  }

  // Update the screen based on the current screen number
  if (Screen === 1) {
    changeBack();
  } else if (Screen === 2) {
    changeImage();
  } else if (Screen === 3) {
    changeImages();
  }

  console.log("Current Screen:", Screen);

  // Play the sound for the current screen
  playSoundForImage(); // You can modify this later if needed
}

// Event listeners for the left and right arrows
leftArrow.addEventListener("click", () => cycleScreen("left"));
rightArrow.addEventListener("click", () => cycleScreen("right"));

// Event listeners for the images
b1.addEventListener("click", () => playSoundForImage("bald"));
bm.addEventListener("click", () => playSoundForImage("batMan"));
l0.addEventListener("click", () => playSoundForImage("loGo"));
Wi.addEventListener("click", () => playSoundForImage("aHHH"));
Dl.addEventListener("click", () => playSoundForImage("lost"));
BN.addEventListener("click", () => playSoundForImage("Banner"));

// Initialize the first screen and play its sound
changeBack();
playSoundForImage("loGo"); // Play the sound for the initial screen
