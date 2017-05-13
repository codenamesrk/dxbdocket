var gulp 	= require('gulp');
var $    	= require('gulp-load-plugins')();
var uncss 	= require('gulp-uncss');
var sourcemaps = require('gulp-sourcemaps');
var rename	= require('gulp-rename');
var concat 	= require('gulp-concat');
var uglify 	= require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var Paths = {
	sass: [
		'bower_components/normalize.scss/sass',
		'bower_components/foundation-sites/scss',
		'bower_components/motion-ui/src',
		'bower_components/components-font-awesome/scss/'
	],
	javascript: [
		// 'bower_components/what-input/src/what-input.js',
		'bower_components/foundation-sites/js/foundation.core.js',
		'bower_components/foundation-sites/js/foundation.util.*.js',

		// Foundation Specific Js
		// 'bower_components/foundation-sites/js/foundation.abide.js',
		// 'bower_components/foundation-sites/js/foundation.accordion.js',
		// 'bower_components/foundation-sites/js/foundation.accordionMenu.js',
		// 'bower_components/foundation-sites/js/foundation.drilldown.js',
		// 'bower_components/foundation-sites/js/foundation.dropdown.js',
		// 'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
		// 'bower_components/foundation-sites/js/foundation.equalizer.js',
		// 'bower_components/foundation-sites/js/foundation.interchange.js',
		// 'bower_components/foundation-sites/js/foundation.magellan.js',
		// 'bower_components/foundation-sites/js/foundation.offcanvas.js',    
		// 'bower_components/foundation-sites/js/foundation.orbit.js',
		// 'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
		// 'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
		// 'bower_components/foundation-sites/js/foundation.reveal.js',
		// 'bower_components/foundation-sites/js/foundation.slider.js',
		// 'bower_components/foundation-sites/js/foundation.sticky.js',
		// 'bower_components/foundation-sites/js/foundation.tabs.js',
		// 'bower_components/foundation-sites/js/foundation.toggler.js',
		// 'bower_components/foundation-sites/js/foundation.tooltip.js',
		// 'bower_components/foundation-sites/js/foundation.zf.responsiveAccordionTabs.js',		

		// Custom Js
		'bower_components/rater/rater.js',
		'javascripts/*.js',
	],
	images: [
		'assets/**/*'
	]
};

gulp.task('sass', function() {
	return gulp.src('scss/app.scss')
	.pipe(sourcemaps.init())
	.pipe($.sass({
		includePaths: Paths.sass,
	 	outputStyle: 'compressed' 
	})
	.on('error', $.sass.logError))	
	.pipe($.autoprefixer({
		browsers: ['last 2 versions', 'ie >= 9']
		}))
	.pipe(sourcemaps.write('.'))		
	.pipe(gulp.dest('css'));
});

gulp.task('uncss', function(){
	return gulp.src('css/app.css')
	.pipe(uncss({
		html: [
			'http://localhost/dxb/index.html',
		],
		ignore: [
			'.rating span','.rating-ro span','.phone.verified'
		]
		}))
	.pipe(rename({
        suffix: '.min'
    }))	
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('javascript', function(){
	return gulp.src(Paths.javascript)
		.pipe(concat('app.js'))
		// .pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('imagemin', function(){
	return gulp.src(Paths.images)
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images/'))
});

gulp.task('default', ['sass','javascript'], function() {
	gulp.watch(['scss/**/*.scss'], ['sass']);
});
gulp.task('assetsminify', ['imagemin']);
gulp.task('optimize', ['sass','javascript','uncss']);
