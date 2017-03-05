//jQuery
$(function() {
    //delay load four items
    $("#vic").delay(500).show('scale', 1000);
    $("#header").hide();
    $("#header").delay(3000).show('fade', 1000);
    $("#yes").delay(2000).show('fade', 1000).typed({
        strings: ["Word up."],
        typeSpeed: 100
    });

    $("#buttons").delay(3000).show('fade', 1000);
}); //jQuery
