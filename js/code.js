/**
 * Created by Max on 29.05.17.
 */


if (annyang) {
    console.log("hallo");


    var hello = function() {
        $('#box').animate({margin: '50vh auto 0'});
        console.log("geht");
    };
    //
    // var rotate = function() {
    //     $('#box').animate({rotate: ''});
    //     console.log("geht");
    // };


    var commands = {
        'hello':        hello
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    annyang.setLanguage('en');

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}
