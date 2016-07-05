/*
 *
 *  Modules
 *
 */

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    notify = require('gulp-notify');

/*
 *
 *  Paths Config
 *
 */

var Paths = function(src){
      this.src = src;
      this.dest = './public/';
      this.assets = this.dest+'assets/'

      this.scriptsSrc = this.src+'scripts/';
      this.markupSrc = this.src+'markup/';
      this.stylesSrc = this.src+'styles/';

      this.jsSrc = this.scriptsSrc+'js/';
      this.cssSrc = this.stylesSrc+'css/';
      this.scssSrc = this.stylesSrc+'scss/';
      this.htmlSrc = this.markupSrc+'html/';

      this.jsDest = this.assets+'js/';
      this.cssDest = this.assets+'css/';
    },
    paths = new Paths('./resources/');

/*
 *
 *  TASKS
 *
 */

gulp.task('scss', function() {

  return gulp.src([paths.scssSrc + '**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.cssDest))
    .pipe(notify('Processed SCSS'));

});

gulp.task('js', function() {

  return gulp.src([paths.jsSrc + '**/*.js'])
    .pipe(watch(paths.jsSrc + '**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.jsDest))
    .pipe(notify('Processed JS'));

});

gulp.task('html', function() {});
gulp.task('css', function() {});
gulp.task('images', function() {});

gulp.task('watchers', function(){
  return gulp.watch(paths.scssSrc + '**/*.scss', ['scss']);
});

gulp.task('default', [
  'scss',
  'js',
  'html',
  'css',
  'images',
  'watchers'
]);
