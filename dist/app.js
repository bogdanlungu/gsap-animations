(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

    // Event handler for the button
    var theButton = $(".animate");
    var animateBoxesButton = $(".animateBoxes");
    var resetButton = $(".reset");
    theButton.on('click', function () {
        moveRight();
        resetButton.show();
    });

    resetButton.on('click', function () {
        resetAnimation();
        resetButton.hide();
    });

    animateBoxesButton.on('click', function () {
        animateBoxes();
        animateBoxesButton.hide();
        setTimeout(function () {
            animateBoxesButton.show();
        }, 3000);
    });

    /* Animate function */
    var moveRight = function moveRight() {
        TweenMax.to(".atom", 2, {
            x: 600,
            rotation: 360,
            scale: 0.5
        });
    };

    /* Animate back */
    var resetAnimation = function resetAnimation() {
        TweenMax.to(".atom", 2, {
            x: 0,
            rotation: 0,
            scale: 1
        });
    };

    /* Animate boxes */
    var animateBoxes = function animateBoxes() {
        TweenMax.staggerFrom(".box", 0.5, {
            opacity: 0,
            y: 200,
            rotation: 360,
            scale: 2,
            delay: 0.5
        }, 0.2);
    };

    function showAnimateBoxesButton() {
        console.log("Done!");
    }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7O0FBRXpCO0FBQ0EsUUFBSSxZQUFZLEVBQUUsVUFBRixDQUFoQjtBQUNBLFFBQUkscUJBQXFCLEVBQUUsZUFBRixDQUF6QjtBQUNBLFFBQUksY0FBYyxFQUFFLFFBQUYsQ0FBbEI7QUFDQSxjQUFVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFlBQU07QUFDeEI7QUFDQSxvQkFBWSxJQUFaO0FBQ0gsS0FIRDs7QUFLQSxnQkFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFNO0FBQzFCO0FBQ0Esb0JBQVksSUFBWjtBQUNILEtBSEQ7O0FBS0EsdUJBQW1CLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDakM7QUFDQSwyQkFBbUIsSUFBbkI7QUFDQSxtQkFBVyxZQUFNO0FBQ2IsK0JBQW1CLElBQW5CO0FBQ0gsU0FGRCxFQUVHLElBRkg7QUFHSCxLQU5EOztBQVFBO0FBQ0EsUUFBSSxZQUFZLFNBQVosU0FBWSxHQUFNO0FBQ2xCLGlCQUFTLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLENBQXJCLEVBQXdCO0FBQ3BCLGVBQUcsR0FEaUI7QUFFcEIsc0JBQVUsR0FGVTtBQUdwQixtQkFBTztBQUhhLFNBQXhCO0FBS0gsS0FORDs7QUFRQTtBQUNBLFFBQUksaUJBQWlCLFNBQWpCLGNBQWlCLEdBQU07QUFDdkIsaUJBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsQ0FBckIsRUFBd0I7QUFDcEIsZUFBRyxDQURpQjtBQUVwQixzQkFBVSxDQUZVO0FBR3BCLG1CQUFPO0FBSGEsU0FBeEI7QUFLSCxLQU5EOztBQVFBO0FBQ0EsUUFBSSxlQUFlLFNBQWYsWUFBZSxHQUFNO0FBQ3JCLGlCQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkIsR0FBN0IsRUFBa0M7QUFDOUIscUJBQVMsQ0FEcUI7QUFFOUIsZUFBRyxHQUYyQjtBQUc5QixzQkFBVSxHQUhvQjtBQUk5QixtQkFBTyxDQUp1QjtBQUs5QixtQkFBTztBQUx1QixTQUFsQyxFQU1HLEdBTkg7QUFPSCxLQVJEOztBQVVBLGFBQVMsc0JBQVQsR0FBa0M7QUFDOUIsZ0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSDtBQUVKLENBekREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gRXZlbnQgaGFuZGxlciBmb3IgdGhlIGJ1dHRvblxuICAgIGxldCB0aGVCdXR0b24gPSAkKFwiLmFuaW1hdGVcIik7XG4gICAgbGV0IGFuaW1hdGVCb3hlc0J1dHRvbiA9ICQoXCIuYW5pbWF0ZUJveGVzXCIpO1xuICAgIGxldCByZXNldEJ1dHRvbiA9ICQoXCIucmVzZXRcIik7XG4gICAgdGhlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgICAgIHJlc2V0QnV0dG9uLnNob3coKTtcbiAgICB9KTtcblxuICAgIHJlc2V0QnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVzZXRBbmltYXRpb24oKTtcbiAgICAgICAgcmVzZXRCdXR0b24uaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0ZUJveGVzQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYW5pbWF0ZUJveGVzKCk7XG4gICAgICAgIGFuaW1hdGVCb3hlc0J1dHRvbi5oaWRlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYW5pbWF0ZUJveGVzQnV0dG9uLnNob3coKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfSk7XG5cbiAgICAvKiBBbmltYXRlIGZ1bmN0aW9uICovXG4gICAgbGV0IG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICAgICAgVHdlZW5NYXgudG8oXCIuYXRvbVwiLCAyLCB7XG4gICAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgICByb3RhdGlvbjogMzYwLFxuICAgICAgICAgICAgc2NhbGU6IDAuNVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyogQW5pbWF0ZSBiYWNrICovXG4gICAgbGV0IHJlc2V0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBUd2Vlbk1heC50byhcIi5hdG9tXCIsIDIsIHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKiBBbmltYXRlIGJveGVzICovXG4gICAgbGV0IGFuaW1hdGVCb3hlcyA9ICgpID0+IHtcbiAgICAgICAgVHdlZW5NYXguc3RhZ2dlckZyb20oXCIuYm94XCIsIDAuNSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHk6IDIwMCxcbiAgICAgICAgICAgIHJvdGF0aW9uOiAzNjAsXG4gICAgICAgICAgICBzY2FsZTogMixcbiAgICAgICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgIH0sIDAuMik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNob3dBbmltYXRlQm94ZXNCdXR0b24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSFcIik7XG4gICAgfVxuXG59KTtcbiJdfQ==
