'use strict';

module.exports = function () {
    $.gulp.task('sprite', function () {
        return $.gulp.src('./source/img/svgsprite/*.svg')
        .pipe($.gp.svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe($.gp.cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe($.gp.replace('&gt;', '>'))
        .pipe($.gp.svgSprite({
             mode: {
                 view: {
                     bust: false,
                     render: {
                         scss: true
                     }
                 }
             }
        }))
        .pipe($.gp.if('*.svg', $.gulp.dest('./build/img/')))
        .pipe($.gp.if('*.scss', $.gulp.dest('./source/style/')));
    });
};

