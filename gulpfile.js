var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var csscomb = require('gulp-csscomb');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var prettify = require('gulp-jsbeautifier');
var rigger = require('gulp-rigger');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');

gulp.task('scss', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 5 versions', '>0%', 'ie 7'],
		cascade: false
	}))
	.pipe(csscomb())
	.pipe(prettify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css'))
});

gulp.task('template-assets', function(){
	return gulp.src('app/template-modules/template-assets/*.html')
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('html', function(){
	return gulp.src('app/template-modules/*.html')
	.pipe(rigger())
	.pipe(prettify())
	.pipe(gulp.dest('app/'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('useref', function(){
	return gulp.src('app/*.html')
	.pipe(prettify())
	.pipe(useref())
	.pipe(gulpif('*.css', minifyCSS()))
	.pipe(gulpif('*.js', uglify({
		mangle: false
	})))
	.pipe(gulp.dest('dist/'));
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './app'
		},
		port: 3004,
		open: true,
		browser: 'default',
		startPath: '/'
	})
});

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/template-modules/template-assets/*.html', ['template-assets']);
	gulp.watch('app/**/*.html', ['html']);
	// gulp.watch('app/js/**/*.js', ['js']);
});

gulp.task(
	'default', 
	[
	'scss', 
	// 'js',
	'html', 
	'useref', 
	'browserSync', 
	'watch'
	]
	);



