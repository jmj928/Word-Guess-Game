
window.onload = function () {
    //global varibales
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessedLetters = [];
        var computerChoices = ["carrie", "jaws", "insidious","the shining","nightmare on elm street","chucky"];
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

        displayValues();


        }


        document.onkeyup = function(event) {
            //get the usersGuess
            var userGuess = event.key;
            var tempCount = 0;

            for(var i = 0; i < wordArray.length; i++)
            {
                if(wordArray[i] === userGuess){
                   userGuessedVisisbleWord[i] = (userGuess);
                    //tempArray.push(userGuess);
                    tempCount++;

                
                }
                else{
                    //userGuessedVisisbleWord.push(wordArray[i]);
                    //tempArray.push(userGuessedVisisbleWord[i]);          
                   
                }

            }

                if(tempCount === 0){

                    if(guessedLetters.includes(userGuess)){

                        //do nothing
                    }
                    else {

                    guessedLetters.push(userGuess);
                    guessesLeft --;

                    }

                    if(guessesLeft == 0)
                    {
                        alert("Sorry looks like you lost this one");
                        resetToBeginning();

                    }
                    else{
                        //do nothing they still get to keep guessing
                        
                    }
                
                }
                else{
                   //do nothing they guessed right
                   
                }
                displayValues();

           
            
            if(userGuessedVisisbleWord.includes("_")){
                //keep guessing

            }
            else{
                displayValues();
                youWon();
            }



        };

        function displayValues(){

            displayedWord = userGuessedVisisbleWord.toString().replace(/,/g," " );

            console.log("Selected word array " + selectedWord + " array for user " + userGuessedVisisbleWord);


            document.querySelector("#currentWord").innerHTML = "<h5>" + displayedWord + "</h5>";
            document.querySelector("#totalWins").innerHTML = "<h5>" + wins + "</h5>";
            document.querySelector("#remainingGuesses").innerHTML = "<h5>" + guessesLeft + "</h5>";
            document.querySelector("#guessedLetters").innerHTML = "<h5>" + guessedLetters + "</h5>";


        }

        function youWon(){
            wins++;
            displayValues();
            //alert("You won");
            resetToBeginning();



        }
    }
        
    
    
    
 