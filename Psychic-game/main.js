



var computerChoices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var wins=0;
var losses=0;
var guessLeft=10;



document.onkeyup=function(event){
    var userGuess= event.key.toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userGuess === computerGuess) {    
       wins++;
       guessLeft=9
    }
    else {

       if (userGuess!==computerGuess) {
            guessLeft -- ;       
            }
            if (guessLeft == 0) {losses ++

            	guessLeft=9}
        
               
       
    
			var html =
          "<p>Your choice: " + userGuess+ "</p>" +
          "<p>The computer choice: " + computerGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guess Left: " +guessLeft + "</p>";
           document.querySelector("#game").innerHTML = html;
		}
			document.getElementById('#choices').innerHTML=userGuess
		}
console.log("hello")