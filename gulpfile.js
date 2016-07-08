/*
 *
 *  Modules
 *
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync').create();

/*
 *
 *  Paths Config
 *
 */

var Paths = function(src){
      this.src = src;
      this.dest = './public/';
      this.assets = this.dest+'assets/';
      this.node = './node_modules/';

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
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDest))
    .pipe(notify('Processed SCSS'));

});

gulp.task('js', function() {

  return gulp.src([paths.jsSrc + '**/*.js', '!vendor/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.jsDest))
    .pipe(notify('Processed JS'));

});

gulp.task('js_vendors', function() {

  return gulp.src([paths.jsSrc + 'vendor/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.jsDest + 'vendor'))
    .pipe(notify('Processed JS Vendors'));

});

gulp.task('html', function() {});
gulp.task('css', function() {});
gulp.task('images', function() {});

gulp.task('watchers', function(){
  gulp.watch(paths.scssSrc + '**/*.scss', ['scss']);
  gulp.watch([paths.jsSrc + '**/*.js', '!vendor/*.js'], ['js']);
  gulp.watch([
    paths.dest+'**/*.php',
    paths.dest+'**/*.css',
    paths.dest+'**/*.js'
  ]).on('change', function () {
    browserSync.reload();
  });
});

gulp.task('webserver', function() {
  connect.server({
    base: paths.dest
  }, function (){
    browserSync.init({
      baseDir: paths.dest,
      proxy: '127.0.0.1:8000'
    });
  });
});

gulp.task('default', [
  'scss',
  'js',
  'js_vendors',
  'html',
  'css',
  'images',
  'webserver',
  'watchers'
]);
