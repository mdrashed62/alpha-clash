// function play() {
//   //step-1: hide the home screen. to hide the screen and the class hidden to the home section.
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   console.log(homeSection.classList);

//   //step-2: show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }
function handlerKeyboardButtonPressed(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

  //stop the game if pressed 'Esc'
  if (playerPressed === "Escape") {
    gameOver();
  }

  //   //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  //cheak matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point");
    //update score
    //1.get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // //2.increase the score by 1
    // const newScore = currentScore + 1;
    // //3.show the updated score
    // currentScoreElement.innerText = newScore;
    //start a new round

    //another way for score with function (with utility.js)
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);

    console.log("You have pressed correctly", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("Missed. You lost a life");
    //1. get the current life number
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // //2. reduce the life count
    // const newLife = currentLife - 1;
    // //3. display the updated life
    // currentLifeElement.innerText = newLife;

    //another way for life score by function with utility.js
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);
    //end of another way part

    if (newLife === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handlerKeyboardButtonPressed);

function continueGame() {
  //step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  //   console.log("Your random alphabet", alphabet);

  //set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

//another way(with utility)
function play() {
  //hide everything show only the playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  //reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame("");
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  //update final score
  //1. get the final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  //clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
