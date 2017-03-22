//jQuery
$(function() {
    //delay load four items

    $(".row-victor").delay(1000).show("fade", 2500);
    $(".row-niggaLee").delay(5000).show("fade", 2500);
    $(".row-button").delay(8000).show("fade", 3000);
    $(".row-nav").delay(8000).show("fade", 3000);

    $("#typedLee").typed({
        stringsElement: $('#typed-Lee'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 6500,
        contentType: 'html'
    }); //typed.js
    $("#typedVic").typed({
        stringsElement: $('#typed-Vic'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 2000,
        contentType: 'html'
    }); //typed.js

}); //jQuery
