//jQuery
$(function() {
    //delay load four items
    // $("#vic").delay(500).show('scale', 1000);
    // $("#header").hide();
    // $("#header").delay(3000).show('fade', 1000);
    // $("#typed").delay(2000).show('fade', 1000).typed({
    //     strings: ["Yo Lee, you full-stack?"],
    //     typeSpeed: 70
    // });
    //
    // $("#buttons").delay(3000).show('fade', 1000);
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        backDelay: 500,
        contentType: 'html', // or text
        // defaults to false for infinite loop
    }); //typed.js
}); //jQuery
