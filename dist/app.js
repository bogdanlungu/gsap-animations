(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {

    // Event handler for the button
    var theButton = $(".animate");
    var increaseButton = $(".increase");
    theButton.on('click', function () {
        moveRight();
    });

    /* Animate function */
    var moveRight = function moveRight() {
        TweenMax.to(".atom", 2, { x: 600, rotation: 360, scale: 0.5 });
    };
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7O0FBRXpCO0FBQ0EsUUFBSSxZQUFZLEVBQUUsVUFBRixDQUFoQjtBQUNBLFFBQUksaUJBQWlCLEVBQUUsV0FBRixDQUFyQjtBQUNBLGNBQVUsRUFBVixDQUFhLE9BQWIsRUFBc0IsWUFBTTtBQUN4QjtBQUNILEtBRkQ7O0FBSUE7QUFDQSxRQUFJLFlBQVksU0FBWixTQUFZLEdBQU07QUFDbEIsaUJBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsQ0FBckIsRUFBd0IsRUFBQyxHQUFHLEdBQUosRUFBUyxVQUFTLEdBQWxCLEVBQXVCLE9BQU8sR0FBOUIsRUFBeEI7QUFDSCxLQUZEO0FBSUgsQ0FkRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBidXR0b25cbiAgICBsZXQgdGhlQnV0dG9uID0gJChcIi5hbmltYXRlXCIpO1xuICAgIGxldCBpbmNyZWFzZUJ1dHRvbiA9ICQoXCIuaW5jcmVhc2VcIik7XG4gICAgdGhlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgfSk7XG5cbiAgICAvKiBBbmltYXRlIGZ1bmN0aW9uICovXG4gICAgbGV0IG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICAgICAgVHdlZW5NYXgudG8oXCIuYXRvbVwiLCAyLCB7eDogNjAwLCByb3RhdGlvbjozNjAsIHNjYWxlOiAwLjV9KTtcbiAgICB9XG5cbn0pO1xuIl19
