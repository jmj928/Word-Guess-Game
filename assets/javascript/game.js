

    //global varibales
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessedLetters = [];
        var computerChoices = ["madonna", "cher"];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var initialScreen = computerGuess.replace(/[a-z]/gi, '_ ')
        var html =
        "<h2> Press any key to get started </h2>" +
        "<p>" + initialScreen + "</p>";
   
            document.querySelector("#game").innerHTML = html;
      
        document.onkeyup = function(event) {
            //get the usersGuess
            var userGuess = event.key;

            if(computerGuess.includes(userGuess)){
                console.log("i guessed right");


            }
            else{
                console.log("i guessed wrong");

            }

            //get computers guess
           // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            // if(userGuess === computerGuess)
            // {
            //     wins++;
            //     guessesLeft = 10;
            //     guessedLetters = [];
            // }
            // else{
            //     if(guessesLeft === 0){
            //         losses++;
            //         guessesLeft = 10;
            //         guessedLetters = [];
            //     }
            //     else{
            //     guessesLeft--;
            //     guessedLetters.push(userGuess);
            //      }

            // }


            // html =
            // "<h2> Press any key to get started </h2> "
            // "<p> " + computerGuess + "</p>";
       
        document.querySelector("#game").innerHTML = html;





        };
            
        
    
    
    
 