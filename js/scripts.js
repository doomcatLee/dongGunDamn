//jQuery
$(function() {
    //delay load four items


    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 2300,
        contentType: 'html'
    }); //typed.js
    $("#typedLee").typed({
        stringsElement: $('#typed-stringsLee'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 2300,
        contentType: 'html'
    }); //typed.js

}); //jQuery
