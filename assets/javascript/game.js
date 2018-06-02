// Declare variables

var gameWords = ["rugrats", "doug", "animaniacs", "gargoyles", "daria", "pokemon", "catdog", "aladdin", "futurama"];
var word;
var answerArray;
var wrongArray;
var guessesLeft;
var wins = 0;



// Function to start game
function startGame() {


  var x = document.getElementById("text")
  var y = document.getElementById("image");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
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
  guessesLeft = word.length + 3;
  // Fill answerArray with underscores that are equal to length of word variable
  for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
  }




  // Display answerArray, wrongArray and guessesLeft to HTML page
  document.getElementById("current-word").innerHTML = answerArray.join(" ");
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
        document.getElementById("current-word").innerHTML = answerArray.join(" ").toUpperCase();

        checkWin();


      }

    }

  }

}


function checkWin() {

  if (guessesLeft <= 0) {
    document.getElementById("text").style.display = "block";
    document.getElementById("image").style.display = "block";
    document.getElementById("text").innerHTML = "You Lose Hit Enter To Try Again!";
    document.getElementById("image").innerHTML = ("<IMG src='https://media0.giphy.com/media/cr9vIO7NsP5cY/giphy.gif'>");

  }
  else if (answerArray.indexOf("_") == -1) {
    wins++;
    document.getElementById("text").style.display = "block";
    document.getElementById("image").style.display = "block";
    document.getElementById("text").innerHTML = "WIN WIN WIN WIN";
    document.getElementById("image").innerHTML = ("<IMG src='https://akns-images.eonline.com/eol_images/Entire_Site/201621/rs_320x240-160301083538-legends3.gif?fit=inside|900:auto&output-quality=90'>");
    document.getElementById("win-counter").innerHTML = wins;

  }
}

  // Function to take user input
  document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();


    if (document.getElementById("text").style.display === "none" && answerArray.indexOf(userGuess) == -1) {
      updateGuess(userGuess);
    }

    console.log(answerArray);
    //checkWin();
    if (event.keyCode == 13) {
      startGame();
    }
  };


  startGame();
