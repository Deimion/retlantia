'use strict';

module.exports = function () {
    $.gulp.task('pug', function() {
        return $.gulp.src('./source/template/*.pug')
        .pipe($.gp.pug ({
            pretty: true,
            plugins: [$.gp.pugbem]
        }))
        .on('error', $.gp.notify.onError(function (error) {
             return {
                 title: 'pug',
                 message: error.message
             }
        }))
        .pipe($.gulp.dest('./build/'));
    });
};