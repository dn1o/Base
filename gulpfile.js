var gulp = require ('gulp');
var sass = require ('gulp-sass');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
gulp.task('sass', function(){
	gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
});
gulp.task('watch', function (){
	gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['webserver', 'sass', 'watch']);