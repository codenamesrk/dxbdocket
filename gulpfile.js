var gulp 	= require('gulp');
var $    	= require('gulp-load-plugins')();
var uncss 	= require('gulp-uncss');
var sourcemaps = require('gulp-sourcemaps');
var rename	= require('gulp-rename');

var sassPaths = [
	'bower_components/normalize.scss/sass',
	'bower_components/foundation-sites/scss',
	'bower_components/motion-ui/src',
	'bower_components/components-font-awesome/scss/'
];

gulp.task('sass', function() {
	return gulp.src('scss/app.scss')
	.pipe(sourcemaps.init())
	.pipe($.sass({
		includePaths: sassPaths,
	 	outputStyle: 'compressed' 
	})
	.on('error', $.sass.logError))
	.pipe(sourcemaps.write())	
	.pipe($.autoprefixer({
		browsers: ['last 2 versions', 'ie >= 9']
		}))
	.pipe(gulp.dest('css'));
});

gulp.task('uncss', function(){
	return gulp.src([
		'css/app.css',
		])
	.pipe(uncss({
		html: [
			'http://localhost/dxb/index.html',
		]
		}))
	.pipe(rename({
        suffix: '.min'
    }))	
	.pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
	gulp.watch(['scss/**/*.scss'], ['sass']);
});
