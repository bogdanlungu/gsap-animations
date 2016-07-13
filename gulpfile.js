var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("babeljs", function () {
	browserify({
	    entries: 'js/app.js',
	    debug: true
	})
	.transform("babelify", {presets: ["es2015"]})
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['babeljs', 'watch'], function() {
    //console.log('done');
});

gulp.task('watch', function() {
    gulp.watch(['js/*.js', './*.html'], ['default']);
});
