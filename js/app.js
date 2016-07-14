$(document).ready(function() {

    // Event handler for the button
    let theButton = $(".animate");
    let animateBoxesButton = $(".animateBoxes");
    let resetButton = $(".reset");
    theButton.on('click', () => {
        moveRight();
        resetButton.show();
    });

    resetButton.on('click', () => {
        resetAnimation();
        resetButton.hide();
    });

    animateBoxesButton.on('click', () => {
        animateBoxes();
        animateBoxesButton.hide();
        setTimeout(() => {
            animateBoxesButton.show();
        }, 3000);
    });

    /* Animate function */
    let moveRight = () => {
        TweenMax.to(".atom", 2, {
            x: 600,
            rotation: 360,
            scale: 0.5
        });
    };

    /* Animate back */
    let resetAnimation = () => {
        TweenMax.to(".atom", 2, {
            x: 0,
            rotation: 0,
            scale: 1
        });
    };

    /* Animate boxes */
    let animateBoxes = () => {
        TweenMax.staggerFrom(".box", 0.5, {
            opacity: 0,
            y: 200,
            rotation: 360,
            scale: 2,
            delay: 0.5,
        }, 0.2);
    };

    function showAnimateBoxesButton() {
        console.log("Done!");
    }

});
