'use strict';

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    ijr: require('imagemin-jpeg-recompress'),
    ipng: require('imagemin-pngquant'),
    gp: require('gulp-load-plugins') (),
    browserSync: require('browser-sync').create()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath) ();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'sprite',
        'fonts',
        'scripts',
        'image'
),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));