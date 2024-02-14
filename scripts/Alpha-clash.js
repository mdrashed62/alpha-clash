// function play() {
//   //step-1: hide the home screen. to hide the screen and the class hidden to the home section.
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   console.log(homeSection.classList);

//   //step-2: show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function continueGame() {
  //step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("Your random alphabet", alphabet);

  //set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgrounColorById(alphabet);
}

//another way(with utility)
function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame("");
}
