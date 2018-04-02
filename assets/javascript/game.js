//javascript code by Robert Helm for Psychic Game

$(document).ready(function() {

    //variables
    var current_guesses = " ";
    var wins = 0;
    var losses = 0;
    var guesses_left = 9;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var answer = alphabet[Math.floor((Math.random() * 25))];
    
    //resets game state
    function reset() {
        current_guesses = " ";
        guesses_left = 9;
        answer = alphabet[Math.floor((Math.random() * 25))];
    }

    //if a key is pressed...
    $(document).keyup(function(e) {
        //check if input is a letter
        if(e.which > 64 && e.which < 91) {
            //use a guess
            guesses_left--;

            //if the guess is correct, add win and reset
            if(alphabet[e.which-65] == answer) {
                wins++;
                reset();
            }
            //if not a win, check if there is a loss
            else if (guesses_left == 0) {
                losses++;
                reset();
            }
            //if not a loss or a win
            else {
                //check if this is the first guess for style purposes
                if(current_guesses == " ") {
                     current_guesses = current_guesses.concat(alphabet[e.which-65]);
                }
                else {
                    current_guesses = current_guesses.concat(", ");
                    current_guesses = current_guesses.concat(alphabet[e.which-65]);
                }
            }

            //update html
            $("#wins").text("Wins: " + wins);
            $("#losses").text("Losses: " + losses);
            $("#guesses-left").text("Guesses Left: " + guesses_left);
            $("#current-guesses").text("Your Guesses so Far:" + current_guesses);
        }
    });

})