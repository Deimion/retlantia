'use strict';

module.exports = function () {
    $.gulp.task('image', function () {
        return $.gulp.src('./source/img/*.*')
            .pipe($.gp.debug({title: 'building img:', showFiles: true}))
            .pipe($.gulp.dest('./build/img'))
            .pipe($.gp.imagemin([
                $.gp.imagemin.gifsicle({interlaced: true}),
                $.ijr({
                    progressive: true,
                    max: 80,
                    min: 70
                }),
                $.ipng({quality: '80'}),
                $.gp.imagemin.svgo({plugins: [{removeViewBox: true}]})
            ]))
            .pipe($.gulp.dest('./build/img'))
    });
};