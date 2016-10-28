var gulp = require('gulp')
var concat = require('gulp-concat')
var flatten= require('gulp-flatten')

gulp.task('js', () => {
  gulp.src(['client/app.js', 'client/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./server/public/dist/'))
})

gulp.task('index', () => {
  gulp.src(['client/index.*'])
    .pipe(gulp.dest('./server/public/dist/'))
})

gulp.task('templates', () => {
  gulp.src(['!client/index.html', 'client/**/*.html'])
    .pipe(flatten())
    .pipe(gulp.dest('./server/public/dist/templates/'))
})

gulp.task('watch', ['js', 'index', 'templates'], () => {
  gulp.watch('client/**/*.*', ['js', 'index', 'templates'])
})

gulp.task('deploy', ['js', 'index', 'templates'])
