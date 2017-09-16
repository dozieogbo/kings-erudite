const gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('default', ['style'], function() {
    nodemon({
            script: './bin/www',
            ext: '.js .njk',
            env: {
                PORT: 8000
            },
            ignore: ['./node_modules/**']
        })
        .on('restart', function() {
            console.log('Restarting app');
        });
});

gulp.task('style', () => {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe(jscs());
});