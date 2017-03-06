//jQuery
$(function() {
    //delay load four items
    $("#vic").delay(500).show('bounce', 1000);
    $(".type-wrap").delay(1600).show('fade');
    $("#header").delay(6700).show('fade', 1500);
    $("#yes").delay(5500).show('fade', 1500);

    $("#buttons").delay(6700).show('fade', 1500);
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 2300,
        contentType: 'html'
    }); //typed.js
}); //jQuery
