

var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var cssver = require('gulp-make-css-url-version');
var del = require('del');
var browserSync = require('browser-sync').create();

var base64 = require('gulp-base64');

// 清空文件夹。
gulp.task('clean',function(){
    del('./dist');
    del('./style/css');
})

//将主文件配置。
gulp.task('index',function(){
    gulp.src('./less/main.less')
        .pipe(less())
        .pipe(base64())
        .pipe(cssver())
        .pipe(cssmin({
            advanced: true,
            keepBreaks: true,
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./style/css'))
});

// 生成每一个图标实例的css。
gulp.task('acticon',function(){
    return gulp.src(['./less/_acticon/*/**.less','./less/_acticon/common.less'])
        .pipe(less())
        .pipe(gulp.dest('./dist/acticon'))
});

// 开启静态服务器。
gulp.task('browser-sync',['index'] ,function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./less/**/**/*.less',['watch']);
    gulp.watch('./index.html',['watch'])
});

gulp.task('watch',['index'],browserSync.reload);


gulp.task('default',['clean','index','acticon','browser-sync'])

