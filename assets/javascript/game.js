
window.onload = function () {
    //global varibales
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessedLetters = [];
        var computerChoices = ["carrie", "jaws", "insidious","the shining"];
        var gameStarted = false;
        var wordArray =[];
        var userGuessedVisisbleWord = [];
        var initialScreen;
        var selectedWord;
        var displayedWord;
       
        resetToBeginning();

        function resetToBeginning(){
            guessesLeft = 10;
            gameStarted = false;

            //clear arrays
            guessedLetters =[];
            wordArray =[];
            userGuessedVisisbleWord = [];

            //get random word
            selectedWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            //turn word into array
            wordArray = selectedWord.split("");

        
            //make word to be displayed
            for (var i = 0; i < selectedWord.length; i++)
            {
                if(selectedWord[i] === " ")
                {
                    userGuessedVisisbleWord.push(" &nbsp; ");

                }
                else {
                userGuessedVisisbleWord.push("_");
                }

            }

            //remove commas
           displayedWord = userGuessedVisisbleWord.toString().replace(/,/g," " );

            console.log("Selected word array " + selectedWord + " array for user " + userGuessedVisisbleWord);

            document.querySelector("#currentWord").innerHTML = "<h5>" + displayedWord + "</h5>";
            document.querySelector("#totalWins").innerHTML = "<h5>" + wins + "</h5>";
            document.querySelector("#remainingGuesses").innerHTML = "<h5>" + guessesLeft + "</h5>";


        }


        document.onkeyup = function(event) {
            //get the usersGuess
            var userGuess = event.key;
            var tempArray = [];

            for(var i = 0; i < wordArray.length; i++)
            {
                if(wordArray[i] === userGuess){
                   // userGuessedVisisbleWord.push(userGuess);
                    tempArray.push(userGuess);

                
                }
                else{
                    //userGuessedVisisbleWord.push(wordArray[i]);
                    tempArray.push(userGuessedVisisbleWord[i]);          
                   
                }

            }
            console.log(tempArray);

            displayedWord = tempArray.toString().replace(/,/g," " );

            document.querySelector("#currentWord").innerHTML = "<h5>" + displayedWord + "</h5>";
            document.querySelector("#totalWins").innerHTML = "<h5>" + wins + "</h5>";
            document.querySelector("#remainingGuesses").innerHTML = "<h5>" + guessesLeft + "</h5>";
            document.querySelector("#guessedLetters").innerHTML = "<h5>" + guessedLetters + "</h5>";



        };
    }
        
    
    
    
 