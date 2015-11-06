var gulp = require('gulp');
    myth = require('gulp-myth');
    gls = require('gulp-live-server');

var server = gls.static('/', 8888);
    server.start();
gulp.task('myth', function(){
  return gulp.src('myth/*.css')
    .pipe(myth())
    .on('error', swallowError)
    .pipe(gulp.dest('css'));
});

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

gulp.task('watch', function(){
  gulp.watch('myth/*.css', ['myth']);
  gulp.watch(['myth/*.css', '*.html'], function (file) {
    server.notify.apply(server, [file]);
  });
});
