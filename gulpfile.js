var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('js', () => {
  gulp.src(['src-client/**/module.js', 'src-client/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/'))
})

gulp.task('watch', ['js'], () => {
  gulp.watch('src-client/**/*.js', ['js'])
})
