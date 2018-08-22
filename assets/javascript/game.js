
window.onload = function () {
    //global varibales
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessedLetters = [];       
        var gameStarted = false;
        var wordArray =[];
        var userGuessedVisisbleWord = [];
        var initialScreen;
        var selectedWord;
        var displayedWord;
        var displayedImage;
        var pictureDisplay = document.querySelector("#pictureDisplay");
        var pictureDisplay2 = document.querySelector("#pictureDisplay2");

        var computerChoices = {
            films:  ["carrie", "jaws", "insidious","the shining","nightmare on elm street","chucky"],
            

            displayValues: function() {

                displayedWord = userGuessedVisisbleWord.toString().replace(/,/g," " );

                console.log("Selected word array " + selectedWord + " array for user " + userGuessedVisisbleWord);

                document.querySelector("#currentWord").innerHTML = "<h5>" + displayedWord + "</h5>";
                document.querySelector("#totalWins").innerHTML = "<h5>" + wins + "</h5>";
                document.querySelector("#remainingGuesses").innerHTML = "<h5>" + guessesLeft + "</h5>";
                document.querySelector("#guessedLetters").innerHTML = "<h5>" + guessedLetters + "</h5>";


            },

            resetToBeginning: function() {
                guessesLeft = 10;
                gameStarted = false;



                //clear arrays
                guessedLetters =[];
                wordArray =[];
                userGuessedVisisbleWord = [];

                //get random word
                selectedWord = computerChoices.films[Math.floor(Math.random() * computerChoices.films.length)];

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

               

                this.displayValues();
               // this.wait(3000);



              
            },

            youWon: function() {
                wins++;
                this.displayValues();
                //alert("You won");
                var audio = new Audio('./assets/images/Blop.mp3');
                audio.play();
                pictureDisplay.src = 'assets/images/redballoon.png';
                pictureDisplay2.src = 'assets/images/redballoon.png'; 
                setTimeout(function () { pictureDisplay.src = ''; pictureDisplay2.src = ''; },1000);
                this.resetToBeginning(); 
                
            },

            wait: function(){
            //
            alert("hi");
                
            }

        };
       
        computerChoices.resetToBeginning();

        document.onkeyup = function(event) {
            //get the usersGuess
            pictureDisplay.src = '';
            pictureDisplay2.src = '';
            var userGuess = event.key;
            var tempCount = 0;

            for(var i = 0; i < wordArray.length; i++){
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

                if(guessesLeft === 0){

                    alert("Sorry looks like you lost this one");
                    computerChoices.resetToBeginning();

                }
                else{
                    //do nothing they still get to keep guessing               
                }
                
            }
            else{
                //do nothing they guessed right                   
            }

            computerChoices.displayValues();
               
            if(userGuessedVisisbleWord.includes("_")){
                //keep guessing
            }
            else{
                computerChoices.displayValues();
                //computerChoices.wait(3000);
                computerChoices.youWon();
            }

        };

        //window.setTimeout(computerChoices.resetToBeginning, 3000);

}
        
    
    
    
 