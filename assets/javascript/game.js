// computer chooses and displays a random number between 19 & 120
var randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber)
var score = 0;
var wins = 0;
var losses = 0;

//Each crystal his assigned a random hidden value between 1-12
// var emeraldValue = Math.floor((Math.random() * 12) + 1);
// var diamondValue = Math.floor((Math.random() * 12) + 1);
// var sapphireValue = Math.floor((Math.random() * 12) + 1);
// var rubyValue = Math.floor((Math.random() * 12) + 1);

// //4 crystals that are actually buttons. 

// // when a crystal is clicked, the value is added to the score.

// function filler() {

//     if (score === randomNumber) {
//         wins++;
//         alert('you win');
//     } else if (score > randomNumber) {
//         losses++;
//         alert('you lose');
//     };

//     $('#emerald').on('click', function () {
//         var valueToAdd = emeraldValue;
//         score += parseInt(valueToAdd);
//         console.log(score);
//     });
//     $('#diamond').on('click', function () {
//         var valueToAdd = diamondValue;
//         score += parseInt(valueToAdd);
//         console.log(score);
//     });
//     $('#sapphire').on('click', function () {
//         var valueToAdd = sapphireValue;
//         score += parseInt(valueToAdd);
//         console.log(score);
//     });
//     $('#ruby').on('click', function () {
//         var valueToAdd = rubyValue;
//         score += parseInt(valueToAdd);
//         console.log(score);
//     });
// }

// if the total score is equal to the random number the payer wins
// Made an array that holds each variable that is set to a random number between 1 and 12
new Array(emerald, diamond, sapphire, ruby);

var gems = new Array;

var emerald = Math.floor((Math.random() * 12) + 1);
var diamond = Math.floor((Math.random() * 12) + 1);
var sapphire = Math.floor((Math.random() * 12) + 1);
var ruby = Math.floor((Math.random() * 12) + 1);

gems.push(emerald);
gems.push(diamond);
gems.push(sapphire);
gems.push(ruby);

console.log(gems);

gems.forEach(element => {
    $('body').append(`<button data='${element}'>`);
});

$('button').on('click', function () {
    var valueToAdd = $(this).attr('data');
    score += parseInt(valueToAdd);
    console.log(score);

    if (score === randomNumber) {
        wins++;
        alert('you win');
    } else if (score > randomNumber) {
        losses++;
        alert('you lose');
    };
});

//if the score is greater than the random number the player loses.

// game restarts