
  	var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  
  	var wins = 0;
  	var losses = 0;
  	var guesses = 9;
  	var guessesLeft = 9;
  	var guessedLetters = [];
  	var letterToGuess = null;

  	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  
  	var updateguessesLeft = function() {  
  	document.querySelector("#guessesleft").innerHTML = "Guesses Left: " + guessesLeft;
  	};
 
	  var updateletterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
	  };
	

	  var updateguessesSoFar = function() {
    document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
	  };

	  var reset = function() {
  		totalGuesses = 9;
  		guessesLeft = 9;
  		guessedLetters = [];

  	updateletterToGuess();
  	updateguessesLeft();
  	updateguessesSoFar();
	  }

	document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	guessedLetters.push(userGuess);
  	updateguessesLeft();
  	updateguessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#loses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?"); 
            reset();
        }
};