// computer chooses and displays a random number between 19 & 120
var randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber)
var score = 0;
var emeraldValue = Math.floor((Math.random() * 12) + 1);
var diamondValue = Math.floor((Math.random() * 12) + 1);
var sapphireValue = Math.floor((Math.random() * 12) + 1);
var rubyValue = Math.floor((Math.random() * 12) + 1);

//4 crystals that are actually buttons. 

//Each crystal his assigned a random hidden value between 1-12

$('#emerald').on('click', function () {
    var valueToAdd = emeraldValue;
    score += parseInt(valueToAdd);
    console.log(score);
})
// when a crystal is clicked, the value is added to the score.

//if the total score is equal to the random number the payer wins

//if the score is greater than the random number the player loses. 

// game restarts