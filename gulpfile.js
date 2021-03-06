var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var ghPages = require('gulp-gh-pages');

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'nested'
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('default', gulp.series('sass'), function () {
});

gulp.task('deploy', function() {
    return gulp.src('./**')
    .pipe(ghPages());
})

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});
