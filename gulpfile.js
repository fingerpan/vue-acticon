

var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var cssver = require('gulp-make-css-url-version');
var del = require('del')


gulp.task('clean',function(){
    del('./dist');
})

gulp.task('textless',function(){
    gulp.src('./css/main.less')
        .pipe(less())
        .pipe(cssver())
        .pipe(cssmin({
            advanced: true,
            keepBreaks: true,
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./dist/css'))
});



gulp.task('acticon',function(){
    return gulp.src(['./css/_acticon/*/**.less','./css/_acticon/common.less'])
        .pipe(less())
        .pipe(gulp.dest('./dist/acticon'))
})
