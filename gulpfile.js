var gulp = require('gulp'),
    sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
  });

gulp.task('browser-sync', function() {
    browserSync({
      server: { 
        baseDir: './' 
      },
      notify: false
    });
});

gulp.task('sass', function(){ 
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) 
    .pipe(autoprefixer(
      ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
      { cascade: true }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('run', gulp.parallel('sass', 'browser-sync', 'watch'));

gulp.task('css-min', function() {
    return gulp.src('scss/main.scss')
      .pipe(sass())
      .pipe(autoprefixer(
        ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
        { cascade: true }))
      .pipe(cssnano())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('css/'));
 });

gulp.task('build', gulp.parallel('css-min'));
