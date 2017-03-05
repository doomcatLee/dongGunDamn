//jQuery
$(function() {
    //delay load four items
    $("#vic").delay(500).show('scale', 1000);
    $(".type-wrap").delay(1500).show('fade');
    $("#header").delay(5200).show('fade', 1000);
    $("#yes").delay(4800).show('fade', 1000);

    $("#buttons").delay(5200).show('fade', 1000);
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 2300,
        contentType: 'html', // or text
        // defaults to false for infinite loop
    }); //typed.js
}); //jQuery
