var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

var production = process.argv.includes('--prod');
var files = [
    './dist/static/main.js',
    './dist/static/polyfills.js',
    './dist/static/runtime.js'
];

if (!production) {
    files.push('./dist/static/vendor.js');
}

function bundle() {
    return gulp.src(files)
        .pipe(concat('elements.js'))
        .pipe(gulp.dest('./elements'))
}

gulp.task('bundle', function () {
    return bundle();
});

gulp.task('bundle:watch', function () {
    return watch(files, { allowEmpty: true }, bundle);
});
