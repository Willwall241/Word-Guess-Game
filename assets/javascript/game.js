// Declare variables
var gameWords = ["rugrats", "doug", "hey arnold", "swat cats",];
var word;
var answerArray;
var wrongArray;
var guessesLeft;
var wins = 0;


// Function to start game
function startGame() {
  // Set word to random pick from gameWords array
  word = gameWords[Math.floor(Math.random() * gameWords.length)];

  // Set answerArray to empty array
  answerArray = [];


  // Set wrongArray to empty array
  wrongArray = [];
  document.getElementById("current-guess").innerHTML = wrongArray;
  // Set guessesLeft to length of random word plus 5
  guessesLeft = word.length + 5;
  // Fill answerArray with underscores that are equal to length of word variable
  for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
  }




  // Display answerArray, wrongArray and guessesLeft to HTML page
  document.getElementById("current-word").innerHTML = answerArray;
  document.getElementById("guess-counter").innerHTML = guessesLeft;
  document.getElementById("win-counter").innerHTML = wins;


}

// Function to update guesses
function updateGuess(guess) {

  // Decrease amount of guesses left
  guessesLeft--;
  // Show updated guesses left
  document.getElementById("guess-counter").innerHTML = guessesLeft;

  // For loop to check if guess is correct
  if (word.indexOf(guess) === -1) {
    wrongArray.push(guess);
    document.getElementById("current-guess").innerHTML = wrongArray;

  }
  else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        console.log(answerArray);
        document.getElementById("current-word").innerHTML = answerArray;
        if (answerArray.indexOf("_") == -1) {
          document.getElementById("cartoon-name").innerHTML = "WIN WIN WIN WIN";
          wins++;
        }
        else if (guessesLeft === 0) {
          document.getElementById("cartoon-name").innerHTML = "LOSE LOSE LOSE LOSE";
        }

      }
    }

  }

}

// Function to check win
// function checkWin() {

//   if (answerArray.indexOf("_") == -1) {
//     alert("you win!");
//     wins++;
//   }
//   else if (guessesLeft === 0) {
//     alert("you lose!");
//   } console.log(answerArray);
// }

// Function to take user input
document.onkeyup = function (event) {
  var userGuess = event.key.toLowerCase();

  updateGuess(userGuess);
  console.log(answerArray);
  //checkWin();
  if (event.keyCode == 13) {
    startGame();
  }
};


startGame();
