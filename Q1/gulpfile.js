var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

var paths = {
  scripts: './js/*.js',
  styles: './css/*.css'
};

gulp.task('concat-uglify-js', function () {
    gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('concat-minify-css', function () {
    gulp.src(paths.styles)
    .pipe(concat('app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['concat-uglify-js']);
  gulp.watch(paths.styles, ['concat-minify-css']);
});

gulp.task('default', ['concat-uglify-js', 'concat-minify-css']);


