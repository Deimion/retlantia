'use strict';

module.exports = function () {
    $.gulp.task('scripts', function () {
        return $.gulp.src('./source/js/*.*')
            .pipe($.gulp.dest('./build/scripts'))
    });
};