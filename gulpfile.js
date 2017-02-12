

var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var cssver = require('gulp-make-css-url-version');
var del = require('del')


gulp.task('clean',function(){
    del('./dist');
})

gulp.task('index',function(){
    gulp.src('./less/main.less')
        .pipe(less())
        .pipe(cssver())
        .pipe(cssmin({
            advanced: true,
            keepBreaks: true,
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./dist/less'))
});


gulp.task('acticon',function(){
    return gulp.src(['./less/_acticon/*/**.less','./less/_acticon/common.less'])
        .pipe(less())
        .pipe(gulp.dest('./dist/acticon'))
})
