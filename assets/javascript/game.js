// Declare variables
var gameWords = ["rugrats", "doug", "animaniacs", "gargoyles", "daria", "pokemon", "catdog", "aladdin", "futurama"];
var word;
var answerArray;
var wrongArray;
var guessesLeft;
var wins = 0;



// Function to start game
function startGame() {


  var x = document.getElementById("cartoon-name");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  // Set word to random pick from gameWords array
  word = gameWords[Math.floor(Math.random() * gameWords.length)];
  console.log(word);

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


  // For loop to check if guess is correct
  if (word.indexOf(guess) === -1 && wrongArray.indexOf(guess) === -1) {
    wrongArray.push(guess);
    document.getElementById("current-guess").innerHTML = wrongArray.join(" ");
    guessesLeft--;
    document.getElementById("guess-counter").innerHTML = guessesLeft;
    checkWin();
  }
  else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        console.log(answerArray);
        guessesLeft--;
        document.getElementById("guess-counter").innerHTML = guessesLeft;
        document.getElementById("current-word").innerHTML = answerArray;

        checkWin();


      }

    }

  }

}


function checkWin() {

  if (guessesLeft <= 0) {
    document.getElementById("cartoon-name").style.display = "block";
    document.getElementById("cartoon-name").innerHTML = "LOSE LOSE LOSE LOSE";

  }
  else if (answerArray.indexOf("_") == -1) {
    wins++;
    document.getElementById("cartoon-name").style.display = "block";
    document.getElementById("cartoon-name").innerHTML = "WIN WIN WIN WIN";
    document.getElementById("win-counter").innerHTML = wins;

  }
}

  // Function to take user input
  document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();


    if (document.getElementById("cartoon-name").style.display === "none" && answerArray.indexOf(userGuess) == -1) {
      updateGuess(userGuess);
    }

    console.log(answerArray);
    //checkWin();
    if (event.keyCode == 13) {
      startGame();
    }
  };


  startGame();
