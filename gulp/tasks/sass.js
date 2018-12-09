'use strict';

module.exports = function () {
    $.gulp.task('sass', function() {
        return $.gulp.src('./source/style/app.scss')
        .pipe($.gp.changed('build/css'))
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass())
        .on('error', $.gp.notify.onError({
            title: 'Style'
        }))
        .pipe($.gp.uncss({
            html: ['index.html', 'build/**/*.html']
        }))
        .pipe($.gp.autoprefixer({
            browsers: [
                'last 3 version',
                '> 1%',
                'ie 8',
                'ie 9',
                'Opera 12.1'
            ]
        }))
        .pipe($.gp.filesize())
        .pipe($.gulp.dest('./build/css/app.css'))
        .pipe($.gp.csso())
        .pipe($.gp.rename({suffix: '.min'}))
        .pipe($.gp.filesize())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('./build/css'))
    });
};