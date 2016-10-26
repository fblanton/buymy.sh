var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', () => {
  gulp.src(['client-src/**/module.js', 'client-src/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/'))
})

gulp.task('watch', ['js'], () => {
  gulp.watch('client-src/**/*.js', ['js'])
})
