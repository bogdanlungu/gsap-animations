$(document).ready(function() {

    // Event handler for the button
    let theButton = $(".animate");
    let increaseButton = $(".increase");
    theButton.on('click', () => {
        moveRight();
    });

    /* Animate function */
    let moveRight = () => {
        TweenMax.to(".atom", 2, {x: 600, rotation:360, scale: 0.5});
    }

});
