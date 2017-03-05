// //Play music when starts after a delay
// var sound = document.createElement('audio')
// sound.id = 'audio'
// sound.controls = 'controls'
// sound.src = 'http://a.tumblr.com/tumblr_leltkjNwWL1qf32t9o1.mp3'
// sound.type = 'audio/mp3'
// document.body.appendChild(sound)
//
// function playAudio() {
//     document.getElementById('audio').play();
// }

setTimeout("playAudio()", 3000);

//jQuery
$(function() {
    //delay load four items
    $("#vic").delay(500).show('scale', 1000);
    $(".type-wrap").delay(1500).show('fade');
    $("#header").delay(5500).show('fade', 1000);
    $("#yes").delay(4800).show('fade', 1000);

    $("#buttons").delay(5500).show('fade', 1000);
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 2300,
        contentType: 'html', // or text
        // defaults to false for infinite loop
    }); //typed.js
}); //jQuery
