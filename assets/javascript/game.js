var randomNumber = [];
var wins = 0;
var losses = 0;
var score = 0;


var emerald;
var diamond;
var sapphire;
var ruby;

$('body').append(`<button id="sapphire">`);
$('body').append(`<button id="diamond">`);
$('body').append(`<button id="ruby">`);
$('body').append(`<button id="emerald">`);

restart();


function restart() {
    score = 0;

    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $('.ranNum').html(`<h1>${randomNumber}</h1>`)

    emerald = Math.floor((Math.random() * 12) + 1);
    $('#emerald').attr('data', emerald);

    diamond = Math.floor((Math.random() * 12) + 1);
    $('#diamond').attr('data', diamond);

    sapphire = Math.floor((Math.random() * 12) + 1);
    $('#sapphire').attr('data', sapphire);

    ruby = Math.floor((Math.random() * 12) + 1);
    $('#ruby').attr('data', ruby);
};

$('button').on('click', function () {
    var valueToAdd = $(this).attr('data');
    score += parseInt(valueToAdd);
    $('.scoreStat').html(`<h1>${score}</h1>`);


    if (score === randomNumber) {
        wins++;
        $('.status').html(`<h1>WINNER!</h1>`);

        $('.victories').html(`<h1>${wins}</h1>`);



    } else if (score > randomNumber) {
        losses++;
        $('.status').html(`<h1>LOSER!</h1>`);

        $('.defeats').html(`<h1>${losses}</h1>`);


    };

    if (score >= randomNumber) {
        restart();

    };
});
