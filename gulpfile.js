var gulp = require('gulp'),
	connect = require('gulp-connect'),
	less = require('gulp-less'),
	path = require('path'),
	minifyCSS = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	usemin = require('gulp-usemin');


gulp.task('default', ['less', 'webserver', 'watch']);

gulp.task('javascript', function() {
	//Define some task here
});


gulp.task('usemin', function() {
	return gulp.src('./*.html')
});

gulp.task('less', function () {
	return gulp.src('./static/less/main.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function() {
	gulp.watch('./static/less/**/*.less', ['less']);
	gulp.watch('./static/javascript/app/**/*.js', ['javascript']);
});


gulp.task('webserver', function() {
	connect.server({
		port: 3334
	});
});