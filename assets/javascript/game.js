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
    // $('button').addClass(btn[i], function (index, currentclass);

});
// gems[0].addClass("emStyle");
// gems[1].addClass("diStyle");
// gems[2].addClass("saStyle");
// gems[3].addClass("ruStyle");

$('button').on('click', function () {
    var valueToAdd = $(this).attr('data');
    score += parseInt(valueToAdd);
    $('.scoreStat').html(`<h1>${score}</h1>`);


    if (score === randomNumber) {
        wins++;
        $('.status').append(`<h1>WINNER!</h1>`);

        $('.victories').html(`<h1>${wins}</h1>`);

    } else if (score > randomNumber) {
        losses++;
        $('.status').append(`<h1>LOSER!</h1>`);

        $('.defeats').html(`<h1>${losses}</h1>`);
    };
});
// });
//if the score is greater than the random number the player loses.

// game restarts